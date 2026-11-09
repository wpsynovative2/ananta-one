"use client";

import { useSearchParams } from "next/navigation";

/** Reads ?name= on the client so the thank-you page itself stays static (cacheComponents). */
export default function Greeting() {
  const name = useSearchParams().get("name") || "";
  const first = name.replace(/[^\p{L} .'-]/gu, "").trim().slice(0, 30);
  return <>{first ? `Thank you, ${first}` : "Thank you"}</>;
}
