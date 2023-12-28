import { Flex } from "@components/flex";
import { PlaylistItem } from "@playlist/ui";
import { SearchWithHints } from "features/searchWithHints";
import React from "react";
import { useSearchParams } from "react-router-dom";

export const Search = () => {
  const [params, setParams] = useSearchParams();
  // console.log(params.get("query"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({ query: e.target.value });
  };

  return (
    <div style={{ width: "100%", maxWidth: "700px", margin: "60px auto" }}>
      <SearchWithHints />
      <Flex gap={20}>
        <PlaylistItem
          playlist={{
            name: "Changes",
            songs: [],
            subscribers: 0,
            listens: 0,
            isPrivate: false,
            isAlbum: false,
            imageColors: ["#f04635"],
            image:
              "https://images.genius.com/00e0c3ee397b98acb01d5e41171a3568.1000x1000x1.jpg",
            id: "",
            creationDate: "",
            authors: [{ uid: "", displayName: "Justin Bieber" }],
          }}
        />
        <PlaylistItem
          playlist={{
            name: "Justice",
            songs: [],
            subscribers: 0,
            listens: 0,
            isPrivate: false,
            isAlbum: false,
            imageColors: ["#259094"],
            image:
              "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431",
            id: "",
            creationDate: "",
            authors: [{ uid: "", displayName: "Justin Bieber" }],
          }}
        />
        <PlaylistItem
          playlist={{
            name: "LIL CHILL",
            songs: [],
            subscribers: 0,
            listens: 0,
            isPrivate: false,
            isAlbum: false,
            imageColors: ["#ecc03d", "#fccc51", "#683419"],
            image:
              "https://firebasestorage.googleapis.com/v0/b/soundbubble-27737.appspot.com/o/songsImages%2Fchill.jpg?alt=media&token=0af7adb2-7b0d-4ab6-942d-00923be83a01",
            id: "",
            creationDate: "",
            authors: [{ uid: "", displayName: "Justin Bieber" }],
          }}
        />
      </Flex>
    </div>
  );
};
