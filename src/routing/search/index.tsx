import { songModel } from "@song/model";
import { SearchWithHints } from "features/searchWithHints";
import { THint } from "features/searchWithHints/types";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getEntityType } from "../../features/searchWithHints/lib/getEntityType";
import { TUser } from "../../entities/user/model/types";
import { TSong } from "../../entities/song/model/types";

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
    const type = getEntityType(hint)
    if (type === 'author' || type === 'user') {
      const thint = (hint as TUser)
      to = `/author/${thint.uid}`;
      setParams({ query: thint.displayName });
    } else if (type === 'song') {
      const thint = (hint as TSong)
      play(thint);
      setParams({ query: thint.name });
      return;
    } else {
      const thint = (hint as TSong)
      to = `/playlist/${thint.id}`;
      setParams({ query: thint.name });
    }

    navigate(to);
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "60px auto" }}>
      <SearchWithHints
        initialValue={params.get("query")}
        onSuggestionSubmit={handleSuggestionSubmit}
      />
    </div>
  );
};
