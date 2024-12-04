"use server";

import { MeiliSearch } from "meilisearch";
import type { Query, QueryResult } from "./query";

const client = new MeiliSearch({
  host: "http://127.0.0.1:7700",
  apiKey: "ctDE5hIuNGM2ryTOUGNPw3t8qFllsKBe1IXGlhUQNfQ",
});

export async function query(input: Query): Promise<QueryResult[]> {
  "use server";

  // TODO: add index name in the url path
  const index = client.index("simplewiki");

  return (await index.search(input)).hits;
}
