import type { QueryResult } from "../lib/query";

export default function ({ results }: { results: QueryResult[] }) {
  "use client";
  return (
    <ol>
      {results.map((result) => {
        return <li key={result.id}>{result.title}</li>;
      })}
    </ol>
  );
}
