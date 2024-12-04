import type { QueryResult } from "../lib/query";
import SearchResult from "./SearchResult";

export default function ({ results }: { results: QueryResult[] }) {
  "use client";
  return (
    <ol className="flex flex-col gap-4">
      {results.map((result) => {
        return (
          <li key={result.id}>
            <SearchResult data={result} />
          </li>
        );
      })}
    </ol>
  );
}
