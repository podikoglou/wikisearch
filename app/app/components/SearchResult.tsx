import type { QueryResult } from "../lib/query";

export default function ({ data }: { data: QueryResult }) {
  return (
    <a href="">
      <div className="py-2 px-4 border-teal-950 border-2 rounded-xl">
        <p>{data.title}</p>
      </div>
    </a>
  );
}
