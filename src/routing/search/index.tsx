import { Input } from "@components/input";
import React from "react";
import { useSearchParams } from "react-router-dom";

export const Search = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("query"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({ query: e.target.value });
  };

  return (
    <div>
      <Input onChange={handleChange} placeholder="Search" />
    </div>
  );
};
