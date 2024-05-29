import { VerticalSongsList } from "@song/ui/verticalList";
import { IconMusic } from "@tabler/icons-react";
import styled from "styled-components";
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
  return <Flex padding="20px 50px" width="100%" d="column" gap={0}>
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
    <SongSkeleton />
    <SongSkeleton />
    <SongSkeleton />
  </Flex>
}

export const Library = () => {
  const [library, loading] = userModel.useSongLibrary()

  return (
    <LibraryStyled>
      <Header />
      <SkeletonPageAnimation color="" loading={loading} skeleton={<SkeletonLoading />}>
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
