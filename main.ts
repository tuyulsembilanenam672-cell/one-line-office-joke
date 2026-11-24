import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My calendar blocked out focus time, so my manager booked a meeting over it titled 'Quick sync about focus time.'";

const MAX_CODE_POINTS = 200;

function codePointCount(text: string): number {
  return [...text].length;
}

function validate(line: string): void {
  const count = codePointCount(line);
  if (count < 1 || count > MAX_CODE_POINTS) {
    throw new Error(`entry must be 1-${MAX_CODE_POINTS} code points, got ${count}`);
  }
  if (!line.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(`Wrote ${codePointCount(LINE)} code points to /output/entry.txt`);
}

main();
