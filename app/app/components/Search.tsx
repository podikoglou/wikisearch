import type { Dispatch, SetStateAction, FormEvent } from "react";
import type { Query, QueryResult } from "../lib/query";

export default function ({
  query,
  setResults,
}: {
  query: (q: Query) => Promise<QueryResult[]>;
  setResults: Dispatch<SetStateAction<QueryResult[]>>;
}) {
  "use client";

  const onInput = async (event: FormEvent<HTMLInputElement>) => {
    const result = await query(event.target.value);

    setResults(result);
  };

  return (
    <input
      className="text-lg py-2 px-4 border-1 rounded-xl bg-teal-950 border-white"
      placeholder="Search"
      onInput={onInput}
    />
  );
}
