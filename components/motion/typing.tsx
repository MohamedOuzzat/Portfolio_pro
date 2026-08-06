"use client";

import { useEffect, useState } from "react";

export function Typing({ words, className }: { words: string[]; className?: string }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = words[idx];
    const timeout = del
      ? setTimeout(() => {
          setSub((s) => {
            if (s - 1 <= 0) {
              setDel(false);
              setIdx((i) => (i + 1) % words.length);
              return 0;
            }
            return s - 1;
          });
        }, 42)
      : setTimeout(() => {
          setSub((s) => {
            if (s + 1 > cur.length) {
              setTimeout(() => setDel(true), 1500);
              return cur.length;
            }
            return s + 1;
          });
        }, 70);
    return () => clearTimeout(timeout);
  }, [idx, sub, del, words]);

  return (
    <span className={className}>
      {words[idx].slice(0, sub)}
      <span className="ml-0.5 inline-block w-[2px] animate-blink bg-primary-400" style={{ height: "1em", verticalAlign: "text-bottom" }} />
    </span>
  );
}
