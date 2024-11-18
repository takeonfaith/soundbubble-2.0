import React, { useCallback, useEffect, useRef, useState } from 'react';
import { chatModel } from '../../../../entities/chat/model';
import { Flex } from '../../../../shared/components/flex';
import { Loading } from '../../../../shared/components/loading';
import { useIsOnScreen } from '../../../../shared/hooks/useIsOnScreen';
import { TChat, TMessage } from '../../../../entities/chat/model/types';
import { MAX_MESSAGES_PER_LOAD } from '../../../../entities/chat/model/constants';

type Props = {
    messages: TMessage[];
    canMoreBeLoaded: boolean;
    loadingPrevious: boolean;
    scrollRef: React.RefObject<HTMLDivElement>;
    shouldScrollBottom: boolean;
    currentChat: TChat;
    setShouldScrollToBottom: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingMoreMessages = ({
    canMoreBeLoaded,
    messages,
    loadingPrevious,
    scrollRef,
    shouldScrollBottom,
    setShouldScrollToBottom,
    currentChat,
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
        return () => {
            setPreviousScrollTop(0);
            setPreviousScrollHeight(0);
        };
    }, [currentChat]);

    useEffect(() => {
        if (!loadingPrevious && !shouldScrollBottom && scrollRef.current) {
            const newScrollHeight = scrollRef.current.scrollHeight;
            const heightDifference = newScrollHeight - previousScrollHeight;
            scrollRef.current.scrollTop =
                previousScrollTop + heightDifference - 100;
        }
    }, [
        loadingPrevious,
        previousScrollHeight,
        previousScrollTop,
        scrollRef,
        shouldScrollBottom,
    ]);

    useEffect(() => {
        if (isOnScreen) {
            setShouldScrollToBottom(false);
            onLoadMoreMessages();
        }
    }, [isOnScreen, onLoadMoreMessages, setShouldScrollToBottom]);

    if (!canMoreBeLoaded || messages.length < MAX_MESSAGES_PER_LOAD)
        return null;

    return (
        <Flex width="100%" jc="center" padding="30px 0" ref={loadingRef}>
            <Loading />
        </Flex>
    );
};
