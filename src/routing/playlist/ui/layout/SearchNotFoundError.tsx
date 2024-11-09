import { IconDiscOff, IconSearch } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { TSong } from '../../../../entities/song/model/types';
import { Button } from '../../../../shared/components/button';
import { Flex } from '../../../../shared/components/flex';
import { PageMessage } from '../../../../shared/components/pageMessage';

type Props = {
    searching:
        | {
              isSearching: boolean;
              value: string;
          }
        | undefined;
    songs: TSong[] | null;
};

export const SearchNotFoundError = ({ searching, songs }: Props) => {
    const navigate = useNavigate();
    console.log(songs?.length !== 0, searching?.value);

    if (songs?.length !== 0 || searching?.value.length === 0) {
        return null;
    }

    return (
        <Flex height="30%" width="100%" jc="center">
            <PageMessage
                icon={IconDiscOff}
                title="Nothing was found"
                description={`Try searhing globally for ${searching.value}`}
            >
                <Button
                    onClick={() => navigate(`/search?query=${searching.value}`)}
                    className="outline"
                    $width="170px"
                >
                    <IconSearch size={20} />
                    Search globally
                </Button>
            </PageMessage>
        </Flex>
    );
};
