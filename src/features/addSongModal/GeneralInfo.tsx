import {
    IconMoodHappy,
    IconMoodLookDown,
    IconMoodLookUp,
    IconMoodNerd,
    IconMoodSad,
    IconMoodShare,
    IconMoodWink2,
} from '@tabler/icons-react';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { TExtendedSuggestion } from '../searchWithHints/types';
import { SearchWithItems } from '../searchWithItems';
import { SignUpModalStyled } from '../signUpModal/styles';
import { modalModel } from '../../layout/modal/model';
import { Lyrics } from './Lyrics';
import { $addSongForm, updateField } from './model';
import { Input } from '../../shared/components/input';
import { useUnit } from 'effector-react';

const MOODS: TExtendedSuggestion[] = [
    {
        uid: 'happy',
        fullName: 'Happy',
        place: 'users',
        icon: <IconMoodHappy />,
    },
    {
        uid: 'calm',
        fullName: 'Calm',
        place: 'users',
        icon: <IconMoodLookDown />,
    },
    {
        uid: 'focused',
        fullName: 'Focused',
        place: 'users',
        icon: <IconMoodNerd />,
    },
    {
        uid: 'inspired',
        fullName: 'Inspired',
        place: 'users',
        icon: <IconMoodLookUp />,
    },
    {
        uid: 'confident',
        fullName: 'Confident',
        place: 'users',
        icon: <IconMoodWink2 />,
    },
    { uid: 'sad', fullName: 'Sad', place: 'users', icon: <IconMoodSad /> },
    {
        uid: 'energy',
        fullName: 'Energy',
        place: 'users',
        icon: <IconMoodShare />,
    },
];

const GENRES: TExtendedSuggestion[] = [
    { uid: 'rap', fullName: 'Rap', place: 'users' },
    { uid: 'instrumental', fullName: 'Instrumental', place: 'users' },
    { uid: 'pop', fullName: 'Pop', place: 'users' },
    { uid: 'rnb', fullName: 'R&B', place: 'users' },
    { uid: 'rock', fullName: 'Rock', place: 'users' },
    { uid: 'classical', fullName: 'Classical', place: 'users' },
    { uid: 'electronic', fullName: 'Electronic', place: 'users' },
    { uid: 'country', fullName: 'Country', place: 'users' },
    { uid: 'folk', fullName: 'Folk', place: 'users' },
    { uid: 'blues', fullName: 'Blues', place: 'users' },
    { uid: 'jazz', fullName: 'Jazz', place: 'users' },
    { uid: 'world', fullName: 'World', place: 'users' },
    { uid: 'african', fullName: 'African', place: 'users' },
];

const LANGUAGES: TExtendedSuggestion[] = [
    { uid: 'russian', fullName: 'Russian', place: 'users' },
    { uid: 'english', fullName: 'English', place: 'users' },
    { uid: 'spanish', fullName: 'Spanish', place: 'users' },
    { uid: 'french', fullName: 'French', place: 'users' },
    { uid: 'german', fullName: 'German', place: 'users' },
    { uid: 'chinese', fullName: 'Chinese', place: 'users' },
    { uid: 'japanese', fullName: 'Japanese', place: 'users' },
    { uid: 'korean', fullName: 'Korean', place: 'users' },
    { uid: 'italian', fullName: 'Italian', place: 'users' },
    { uid: 'portuguese', fullName: 'Portuguese', place: 'users' },
];

export const GeneralInfo = () => {
    const form = useUnit($addSongForm);
    const handleNext = () => {
        modalModel.events.open({
            title: 'Lyrics',
            content: <Lyrics />,
            sizeX: 's',
            sizeY: 's',
        });
    };

    return (
        <SignUpModalStyled>
            <Flex width="100%" d="column" gap={24} jc="center" height="100%">
                <Input
                    type="date"
                    placeholder="Release date"
                    label="Release date"
                    value={form.releaseDate?.toString()}
                    onChange={(event) =>
                        updateField({
                            id: 'releaseDate',
                            value: event.target.value,
                        })
                    }
                />
                <SearchWithItems
                    onSubmit={(addedItems) =>
                        updateField({ id: 'genres', value: addedItems })
                    }
                    items={GENRES}
                    label="Genres"
                    placeholder="Find genres"
                />
                <SearchWithItems
                    onSubmit={(addedItems) =>
                        updateField({ id: 'moods', value: addedItems })
                    }
                    items={MOODS}
                    label="Moods"
                    placeholder="Find moods"
                />
                <SearchWithItems
                    onSubmit={(addedItems) =>
                        updateField({ id: 'langs', value: addedItems })
                    }
                    items={LANGUAGES}
                    label="Languages"
                    placeholder="Find languages"
                />
            </Flex>
            <Flex width="100%">
                <DefaultButton onClick={handleNext} appearance="primary">
                    Next
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};