import { useUnit } from 'effector-react';
import { useCallback, useState } from 'react';
import { Database } from '../../database';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { Message } from '../../shared/components/mesage';
import { useEffectOnce } from '../../shared/hooks/useEffectOnce';
import { AuthorsInput } from '../authorsInput';
import { TExtendedSuggestion } from '../searchWithHints/types';
import { SignUpModalStyled } from '../signUpModal/styles';
import { $addSongForm, updateField } from './model';
import { SongCover } from './SongCover';

export const SongNameAndAuthor = () => {
    const { name, author, authors } = useUnit($addSongForm);
    const [error, setError] = useState<string | null>(null);
    const [loadingItems, setLoadingItems] = useState(false);

    const handleNext = () => {
        if (name && authors.length > 0) {
            modalModel.events.open({
                title: 'Song cover',
                content: <SongCover />,
                sizeX: 's',
                sizeY: 's',
            });
        } else {
            setError('Song name and authors are required');
        }
    };

    const requestAuthors = useCallback(async (value: string) => {
        const res = await Database.SearchSuggestions.getSearchSuggestions(
            value,
            [],
            ['users']
        );

        return res as TExtendedSuggestion[];
    }, []);

    const tryRequestAuthors = useCallback(async () => {
        setLoadingItems(true);
        const words = author.split(' ');
        let i = 0;
        const result: TExtendedSuggestion[] = [];

        while (i < words.length) {
            let found = false;
            let potentialName = '';

            for (let j = i; j < words.length; j++) {
                potentialName += words[j] + ' ';
                potentialName = potentialName.trim();

                // Check if the combined name exists in the database
                const res = await requestAuthors(potentialName);
                console.log(res);

                if (res.length > 0) {
                    console.log({ authors, res });

                    result.push(...res);
                    console.log(`Author found: ${potentialName}`);
                    // Move index past the found name segment
                    i = j + 1;
                    found = true;
                    break;
                }
            }

            // If no author was found during this iteration, move to next word
            if (!found) {
                i++;
            }
        }
        setLoadingItems(false);
        updateField({ id: 'authors', value: result });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffectOnce(() => {
        if (authors.length === 0 && author.length !== 0) {
            tryRequestAuthors();
        }
    }, [author.length, authors]);

    return (
        <SignUpModalStyled>
            <Flex gap={15} d="column" height="100%" jc="center" width="100%">
                <Message type="success">File succesfully uploaded!</Message>
                {error && <Message type="error">{error}</Message>}
                <Input
                    required
                    placeholder="Song name"
                    label="Song name"
                    value={name}
                    onChange={(value) => {
                        updateField({
                            id: 'name',
                            value: value.currentTarget.value,
                        });
                        setError(null);
                    }}
                />
                <AuthorsInput
                    onChange={(value) => updateField({ id: 'author', value })}
                    onSumbit={(authors) => {
                        updateField({ id: 'authors', value: authors });
                        setError(null);
                    }}
                    value={author}
                    addedAuthors={authors}
                    required={true}
                    error={undefined}
                    loadingItems={loadingItems}
                />
            </Flex>
            <Flex width="100%" onClick={handleNext}>
                <DefaultButton appearance="primary">Next</DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
