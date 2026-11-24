const fs = require("fs");

const WINNING_LINE: string = "Replace payment processor with `Math.random()` — same uptime, zero fees";

const lines = WINNING_LINE.split("\n");
if (lines.length !== 1) {
  throw new Error("winning line must be a single line");
}
if (WINNING_LINE.length >= 200) {
  throw new Error("winning line must be under 200 characters");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", WINNING_LINE, { encoding: "utf8" });

console.log(WINNING_LINE);