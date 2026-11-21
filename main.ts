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

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
