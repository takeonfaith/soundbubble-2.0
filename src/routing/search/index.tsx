import { Flex } from "@components/flex";
import { PlaylistItem } from "@playlist/ui";
import { songModel } from "@song/model";
import { SearchWithHints } from "features/searchWithHints";
import { THint } from "features/searchWithHints/types";
import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const Search = () => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const { play } = songModel.useControls();
  // console.log(params.get("query"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({ query: e.target.value });
  };

  const handleSuggestionSubmit = (hint: THint) => {
    let to = "";
    if ("displayName" in hint) {
      to = `/author/${hint.uid}`;
      setParams({ query: hint.displayName });
    } else if ("lyrics" in hint) {
      play(hint);
      setParams({ query: hint.name });
      return;
    } else {
      to = `/playlist/${hint.id}`;
      setParams({ query: hint.name });
    }

    navigate(to);
  };

  return (
    <div style={{ width: "100%", maxWidth: "700px", margin: "60px auto" }}>
      <SearchWithHints
        initialValue={params.get("query")}
        onSuggestionSubmit={handleSuggestionSubmit}
      />
    </div>
  );
};
