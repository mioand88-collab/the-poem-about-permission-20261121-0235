// The poem about permission — an original poem about agency.
// Writes the poem to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `I asked, and the door opened —
not for the loudness of my knock,
but because someone inside
was listening for my hand.

Now the key rests in my palm,
warm as a held breath,
and I learn the strangest truth:
the power I own most
is the power I hand back.`;

// Guard: validate the poem before writing anything.
// Count Unicode code points (not UTF-16 code units) so the 280
// cap matches how the bounty measures length. The poem must be
// non-empty, not only whitespace, and at most 280 code points.
const codePoints = [...poem].length;
if (codePoints < 1 || codePoints > 280 || poem.trim().length === 0) {
  console.error(
    `error: poem must be 1–280 Unicode code points and not only whitespace (got ${codePoints} code points)`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
