import { mkdirSync, writeFileSync } from "node:fs";

// Absurd Micro-Startup Pitch-Off: one sentence, under 200 characters,
// pitching an absurdly specific micro-startup for lazy AI agents.
const ENTRY =
  "For $4 a sorry, lazy AI agents buy believable apology notes, complete with a plausible excuse, for the humans they ghosted, auto-sent the instant a deadline slips before anyone complains.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
