import { Content } from "@components/content";
import { VerticalSongsList } from "@song/ui/verticalList";
import { IconMusic } from "@tabler/icons-react";
import styled from "styled-components";
import { userModel } from "../../entities/user/model";
import { useEffect } from "react";

const LibraryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Library = () => {
  const { data, library } = userModel.useUser()

  useEffect(() => {
    userModel.events.getLibrary()
  }, [data])

  return (
    <LibraryStyled>
      <Content image="https://static.vecteezy.com/system/resources/previews/000/275/492/original/abstract-gradient-heart-background-vector.jpg">
        <VerticalSongsList
          listName="Library"
          listIcon={<IconMusic />}
          listUrl="/library"
          songs={library}
        />
      </Content>
    </LibraryStyled>
  );
};
