// make.fun entry: The Funniest Excuse for Skipping a Meeting
// Writes one razor-sharp excuse line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (byte-exact, no trailing newline). Node 22, no dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry, I can't make it \u2014 I'm stuck in a meeting about why we have too many meetings. It's going great.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
