import {
  type Dispatch,
  type SetStateAction,
  type FormEvent,
  useEffect,
} from "react";
import type { Query, QueryResult } from "../lib/query";
import { useQueryState } from "nuqs";

export default function ({
  queryFn,
  setResultsFn,
}: {
  queryFn: (q: Query) => Promise<QueryResult[]>;
  setResultsFn: Dispatch<SetStateAction<QueryResult[]>>;
}) {
  "use client";

  const [query, setQuery] = useQueryState("q");

  const onInput = async (event: FormEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    async function performQuery() {
      const result = await queryFn(query || "");

      setResultsFn(result);
    }

    performQuery();
  }, [query, queryFn, setResultsFn]);

  return (
    <input
      className="text-lg py-2 px-4 border-1 rounded-xl bg-teal-950 border-white"
      placeholder="Search"
      onInput={onInput}
      value={query || ""}
    />
  );
}
