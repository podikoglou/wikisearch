"use client";

import { useState } from "react";
import Search from "./components/Search";
import type { Query, QueryResult } from "./lib/query";
import { query } from "./lib/meilisearch";
import SearchResults from "./components/SearchResults";

export default function () {
  const [results, setResults] = useState<QueryResult[]>([]);

  return (
    <div className="flex flex-col max-w-sm mx-auto my-16 gap-4">
      <h1 className="text-6xl font-bold text-center">Wikisearch</h1>

      <Search query={query} setResults={setResults} />

      <SearchResults results={results} />
    </div>
  );
}
