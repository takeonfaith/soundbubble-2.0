import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Database } from '../../database';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { Message } from '../../shared/components/mesage';
import { useEffectOnce } from '../../shared/hooks/useEffectOnce';
import { AuthorsInput } from '../authorsInput';
import { TExtendedSuggestion } from '../searchWithHints/types';
import { SignUpModalStyled } from '../signUpModal/styles';
import { CreateAuthor } from './CreateAuthor';
import { useForm } from './model';
import { SongCover } from './SongCover';
import { IconMusic } from '@tabler/icons-react';
import { translate } from '../../i18n';

const CreateAuthorButton = styled(Button)`
    font-size: 0.85rem;
    font-weight: 300;
    color: ${({ theme }) => theme.scheme.blue.text};
    padding: 2px 8px;

    &:hover {
        background: ${({ theme }) => theme.scheme.blue.transparent};
    }
`;

export const SongNameAndAuthor = () => {
    const handleNext = () => {
        modalModel.events.open({
            title: translate('photo'),
            content: <SongCover />,
            sizeX: 's',
            sizeY: 's',
        });
    };

    const {
        updateField,
        values: { name, author, authors, songFile },
        errors,
        onSubmit,
        onChange,
    } = useForm(handleNext, ['name', 'authors']);
    console.log(songFile);

    const [loadingItems, setLoadingItems] = useState(false);

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
        console.log({ result });

        updateField({
            id: 'authors',
            value: result,
        });
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
                <Input
                    required
                    placeholder="Enter song name..."
                    label="Song name"
                    id="name"
                    value={name}
                    error={errors.name}
                    onChange={onChange}
                    icon={<IconMusic />}
                />
                <AuthorsInput
                    onChange={(value) => updateField({ id: 'author', value })}
                    onSumbit={(authors) => {
                        console.log(authors);

                        updateField({
                            id: 'authors',
                            value: authors,
                        });

                        updateField({
                            id: 'author',
                            value: '',
                        });
                    }}
                    value={author}
                    addedAuthors={authors}
                    required={true}
                    error={errors.authors}
                    loadingItems={loadingItems}
                />
                <CreateAuthorButton
                    $height="10px"
                    className="forgot-password"
                    $width="fit-content"
                    onClick={() =>
                        modalModel.events.open({
                            title: 'Create author',
                            content: <CreateAuthor />,
                            sizeX: 's',
                            sizeY: 'm',
                        })
                    }
                >
                    Author in not on soundbubble?
                </CreateAuthorButton>
            </Flex>
            <Flex width="100%" onClick={onSubmit}>
                <DefaultButton appearance="primary">
                    {translate('next')}
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
