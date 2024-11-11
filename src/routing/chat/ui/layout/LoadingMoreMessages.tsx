import React, { useCallback, useEffect, useRef, useState } from 'react';
import { chatModel } from '../../../../entities/chat/model';
import { Flex } from '../../../../shared/components/flex';
import { Loading } from '../../../../shared/components/loading';
import { useIsOnScreen } from '../../../../shared/hooks/useIsOnScreen';
import { TMessage } from '../../../../entities/chat/model/types';

type Props = {
    messages: TMessage[];
    canMoreBeLoaded: boolean;
    loadingPrevious: boolean;
    scrollRef: React.RefObject<HTMLDivElement>;
    setShouldScrollToBottom: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingMoreMessages = ({
    canMoreBeLoaded,
    messages,
    loadingPrevious,
    scrollRef,
    setShouldScrollToBottom,
}: Props) => {
    const loadingRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useIsOnScreen(loadingRef);
    const [previousScrollHeight, setPreviousScrollHeight] = useState(0);
    const [previousScrollTop, setPreviousScrollTop] = useState(0);

    const onLoadMoreMessages = useCallback(() => {
        setPreviousScrollHeight(scrollRef?.current?.scrollHeight ?? 0);
        setPreviousScrollTop(scrollRef?.current?.scrollTop ?? 0);

        chatModel.events.loadNextMessages();
    }, [scrollRef]);

    useEffect(() => {
        if (isOnScreen) {
            setShouldScrollToBottom(false);
            onLoadMoreMessages();
        }
    }, [isOnScreen, onLoadMoreMessages, setShouldScrollToBottom]);

    useEffect(() => {
        return () => {
            setPreviousScrollTop(0);
            setPreviousScrollHeight(0);
        };
    }, []);

    useEffect(() => {
        if (!loadingPrevious) {
            if (scrollRef.current) {
                const newScrollHeight = scrollRef.current.scrollHeight;
                const heightDifference = newScrollHeight - previousScrollHeight;
                scrollRef.current.scrollTop =
                    previousScrollTop + heightDifference - 100;
            }
        }
    }, [loadingPrevious, previousScrollHeight, previousScrollTop, scrollRef]);

    if (!canMoreBeLoaded || messages.length === 0) return null;

    return (
        <Flex width="100%" jc="center" padding="30px 0" ref={loadingRef}>
            <Loading />
        </Flex>
    );
};
