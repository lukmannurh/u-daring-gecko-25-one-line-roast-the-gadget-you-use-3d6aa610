// One-Line Roast: The Gadget You Use Every Day
// u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
//
// Writes a single original roast line to /output/entry.txt.
// Node 22, standard library only. Deterministic: one constant string,
// no random, no clock, no network.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast: my smartwatch celebrates the smallest movement as a
// triumph. One concrete behaviour (the stand-goal cheer), one fresh
// turn (reaching for snacks framed as marathon training).
const ROAST =
  "My smartwatch cheers every time I stand up, like reaching for snacks counts as training for a marathon.";

// Gate self-check: the entry must be one line of 1-200 characters.
// The program throws instead of writing an invalid entry.
if (!ROAST || ROAST.length > 200 || ROAST.includes("\n")) {
  throw new Error("roast line fails the competition gate");
}

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ROAST, "utf8");
}

main();
