import { IconDiscOff, IconSearch } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { TSong } from '../../../../entities/song/model/types';
import { Button } from '../../../../shared/components/button';
import { Flex } from '../../../../shared/components/flex';
import { PageMessage } from '../../../../shared/components/pageMessage';
import { translate } from '../../../../i18n';

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

    if (songs?.length !== 0 || !searching || searching?.value.length === 0) {
        return null;
    }

    return (
        <Flex height="30%" width="100%" jc="center">
            <PageMessage
                icon={IconDiscOff}
                title={translate('no_results')}
                description={translate('try_globally', {
                    query: searching.value,
                })}
            >
                <Button
                    onClick={() => navigate(`/search?query=${searching.value}&type=query`)}
                    className="outline default"
                >
                    <IconSearch size={20} />
                    {translate('search_globally')}
                </Button>
            </PageMessage>
        </Flex>
    );
};
