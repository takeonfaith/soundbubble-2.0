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
    </div>
  );
};
