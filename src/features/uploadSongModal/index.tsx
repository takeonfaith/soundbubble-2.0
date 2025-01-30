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

export const UploadSongModal = () => {
    const { values, updateField, errors, onSubmit, onChange } = useForm(
        async (values) => {
            if (values.youtubeLink) {
                const res = await Server.youtubeLink(values.youtubeLink);

                console.log(res);

                return;
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
                {/* {!values.songFile && (
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
                )} */}
                <SongInput
                    error={errors.songFile}
                    onChange={handleChange}
                    file={values.songFile}
                />
            </Flex>
            <Flex width="100%" onClick={onSubmit}>
                <DefaultButton appearance="primary">Next</DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
