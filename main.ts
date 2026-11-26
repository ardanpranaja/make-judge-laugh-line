// make-judge-laugh-line — entry program for make.fun competition
// u-email-baru-make-the-judge-laugh-in-one-line-791ccb21
//
// Reads the chosen one-liner from entry.txt next to this file, checks it
// against the competition gate, and writes it to
// $MAKEFUN_OUTPUT_DIR/entry.txt (falling back to /output when the variable
// is not set). Plain JavaScript on purpose: the grader runs
// `node /bot/main.ts` directly, with no network, on a read-only filesystem.

const fs = require("fs");
const path = require("path");

const MAX_CHARS = 200;

function loadLine() {
  let raw = fs.readFileSync(path.join(__dirname, "entry.txt"), "utf8");
  // A text editor's trailing newline is not part of the line, and neither
  // is a leading byte-order mark if an editor added one.
  if (raw.charCodeAt(0) === 0xfeff) {
    raw = raw.slice(1);
  }
  return raw.replace(/\r?\n$/, "");
}

function gate(line) {
  if (line.length === 0 || line.trim().length === 0) {
    throw new Error("entry.txt is empty or only white space");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      "entry is " + line.length + " chars, over the " + MAX_CHARS + " limit"
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main() {
  const line = loadLine();
  gate(line);

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const outputPath = path.join(outputDir, "entry.txt");
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputPath, line, "utf8");

  // Round-trip check: what the grader will read must be byte-for-byte the
  // entry we wrote, so a silent partial write can never slip through.
  if (fs.readFileSync(outputPath, "utf8") !== line) {
    throw new Error("round-trip check failed: " + outputPath + " differs");
  }

  console.log("wrote " + outputPath + " (" + line.length + " chars)");
}

main();
