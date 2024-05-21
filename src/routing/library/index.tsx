import { VerticalSongsList } from "@song/ui/verticalList";
import { IconMusic } from "@tabler/icons-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { SongSkeleton } from "../../entities/song/ui/Skeleton";
import { userModel } from "../../entities/user/model";
import { Header } from "../../layout/header";
import { Flex } from "../../shared/components/flex";
import { SkeletonPageAnimation } from "../../shared/components/skeleton/SkeletonPageAnimation";

const LibraryStyled = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const ContentStyled = styled.div`
  padding: 20px 50px;
  height: 100%;
  width: 100%;
`

const SkeletonLoading = () => {
  return <Flex padding="50px" width="100%" d="column" gap={10}>
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
  </Flex>
}

export const Library = () => {
  const { data, library, loadingLibrary } = userModel.useUser()
  const theme = useTheme()

  useEffect(() => {
    userModel.events.getLibrary()
  }, [data])

  return (
    <LibraryStyled>
      <Header>
        <Flex gap={30}>
          <Link to='/' style={{ opacity: 1, fontWeight: 300, background: theme.colors.hover, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '25px', padding: '18px 20px', borderRadius: '4px' }}>Songs</Link>
          <Link to='/' style={{ opacity: '0.4', fontWeight: 300, width: '100px' }}>Playlists</Link>
          <Link to='/' style={{ opacity: '0.4', fontWeight: 300, width: '100px' }}>Artists</Link>
        </Flex>
      </Header>
      <SkeletonPageAnimation color="" loading={loadingLibrary} skeleton={<SkeletonLoading />}>
        <ContentStyled>
          <VerticalSongsList
            listName="Library"
            listIcon={<IconMusic />}
            listUrl="/library"
            songs={library}
          />
        </ContentStyled>
      </SkeletonPageAnimation>
    </LibraryStyled>
  );
};
