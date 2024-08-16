import { TModal } from '../../../layout/modal/model/types';
import { getPageClassName } from './lib/getPageClassName';
import { PageStackWrapper } from './styles';

type Props = {
    pages: TModal[];
    slidingBack: boolean;
    getHeader: (
        title: string,
        isNotFirstPage: boolean,
        index: number
    ) => React.ReactNode;
    getContent: (content: React.ReactNode) => React.ReactNode;
};

export const PageStack = ({
    pages,
    slidingBack,
    getHeader,
    getContent,
}: Props) => {
    return (
        <>
            {pages.map(({ title, content }, index) => {
                const className = getPageClassName(index, slidingBack, pages);
                const isNotFirstPage = index !== 0 && pages.length > 1;

                if (className === 'vanish') return null;

                return (
                    <PageStackWrapper key={title + index} className={className}>
                        {getHeader(title, isNotFirstPage, index)}
                        {getContent(content)}
                    </PageStackWrapper>
                );
            })}
        </>
    );
};
