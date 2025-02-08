import { IconBrandYoutubeFilled } from '@tabler/icons-react';
import { getSongDuration } from '../../entities/song/lib/getSongDuration';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Divider } from '../../shared/components/divider';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { SongInput } from '../../shared/components/songInput';
import { Subtext } from '../../shared/components/subtext';
import { SignUpModalStyled } from '../signUpModal/styles';
import { useForm } from './model';
import { SongNameAndAuthor } from './SongNameAndAuthor';
import { Server } from '../../server';
import { toastModel } from '../../layout/toast/model';

export const UploadSongModal = () => {
    const { values, updateField, errors, onSubmit, onChange, loading } =
        useForm(
            async (values, _, update) => {
                if (values.youtubeLink) {
                    const res = await Server.youtubeLink(values.youtubeLink);
                    if (!res) {
                        toastModel.events.add({
                            type: 'error',
                            message: 'Failed to get data from youtube link ',
                        });
                        return;
                    }
                    const file = new File([res], 'audio.mp3', {
                        type: 'audio/mpeg',
                    });
                    update({ id: 'songFile', value: file });
                    const url = await getSongDuration(
                        URL.createObjectURL(file)
                    );
                    updateField({ id: 'duration', value: url });
                }

                modalModel.events.open({
                    title: 'Name and author',
                    content: <SongNameAndAuthor />,
                    sizeX: 's',
                    sizeY: 's',
                });
            },
            ['songFile', 'youtubeLink']
        );
    console.log(loading);

    const handleChange = (file: File | null) => {
        if (file === null) {
            updateField({ id: 'songFile', value: null });
            updateField({ id: 'name', value: '' });
            updateField({ id: 'author', value: '' });
            updateField({ id: 'duration', value: 0 });
            return;
        }

        const [author, name] = file.name.includes('-')
            ? file.name.replace('.mp3', '').split('-')
            : ['', file.name.replace('.mp3', '')];

        updateField({ id: 'songFile', value: file });
        updateField({
            id: 'name',
            value: author.includes('feat') ? author.trim() : name.trim(),
        });
        updateField({
            id: 'author',
            value: author.includes('feat') ? name.trim() : author.trim(),
        });
        getSongDuration(URL.createObjectURL(file)).then((res) => {
            console.log(res);

            updateField({ id: 'duration', value: res });
        });
        // handleNext();
    };

    return (
        <SignUpModalStyled>
            <Flex
                d="column"
                gap={20}
                width="100%"
                jc="center"
                height="100%"
                padding="0 0 30px 0"
            >
                {!values.songFile && (
                    <Input
                        placeholder="Enter youtube link..."
                        value={values.youtubeLink}
                        error={errors.youtubeLink}
                        label="Youtube link"
                        id="youtubeLink"
                        onChange={onChange}
                        icon={
                            <IconBrandYoutubeFilled
                                opacity={1}
                                color="red"
                                stroke="#ff0000"
                            />
                        }
                    />
                )}
                {!values.songFile && (
                    <Flex width="100%" gap={20}>
                        <Divider />
                        <Subtext>Or</Subtext>
                        <Divider />
                    </Flex>
                )}
                <SongInput
                    error={errors.songFile}
                    onChange={handleChange}
                    file={values.songFile}
                />
            </Flex>
            <Flex width="100%" onClick={onSubmit}>
                <DefaultButton loading={loading} appearance="primary">
                    Next
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
