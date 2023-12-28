import { Content } from "@components/content";
import { TSong } from "@song/model/types";
import { VerticalSongsList } from "@song/ui/verticalList";
import { IconMusic } from "@tabler/icons-react";
import { Database } from "database";
import { useEffect, useState } from "react";
import styled from "styled-components";

const LibraryStyld = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Library = () => {
  const [songs, setSongs] = useState<TSong[]>([]);

  // console.log(songs);

  useEffect(() => {
    if (!songs.length) {
      Database.Songs.getTop10Songs().then((res) => setSongs(res));
    }
  }, [songs]);

  return (
    <LibraryStyld>
      <Content image="https://static.vecteezy.com/system/resources/previews/000/275/492/original/abstract-gradient-heart-background-vector.jpg">
        <VerticalSongsList
          listName="Library"
          listIcon={<IconMusic />}
          listUrl="/library"
          songs={songs}
        />
      </Content>
    </LibraryStyld>
  );
};
