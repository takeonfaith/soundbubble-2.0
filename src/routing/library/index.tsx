import { Input } from "@components/input";
import { TSong } from "@song/model/types";
import { VerticalSongsList } from "@song/ui/verticalList";
import { Database } from "database";
import { useEffect, useState } from "react";
import styled from "styled-components";

const LibraryStyld = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Library = () => {
  const [songs, setSongs] = useState<TSong[]>([]);

  console.log(songs);

  useEffect(() => {
    Database.getTop10Songs().then((res) => setSongs(res));
  }, []);

  return (
    <LibraryStyld>
      <Input placeholder="Поиск" />
      <VerticalSongsList songs={songs} />
    </LibraryStyld>
  );
};
