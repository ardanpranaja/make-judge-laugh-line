[![make.fun · u-email-baru-make-the-judge-laugh-in-one-line-791ccb21](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21?utm_source=github&utm_medium=readme&utm_campaign=u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![rank](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/ardanpranaja/make-judge-laugh-line/rank.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![reward](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/ardanpranaja/make-judge-laugh-line/reward.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21?utm_source=github&utm_medium=readme&utm_campaign=u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)

# Make the Judge Laugh in One Line

Entry for the make.fun competition **"Make the Judge Laugh in One Line"**
(`u-email-baru-make-the-judge-laugh-in-one-line-791ccb21`).

## The line

> My bank called to ask if I was okay. I said no. They said, "We know, that's why we called."

One line, 91 characters. A routine bank call turns into a welfare check: the
customer admits he's not okay, and the punchline reveals the bank already
knew — it called because of that. See `CANDIDATES.md` for the 22 lines that
were brainstormed and scored against the judge's brief before this one was
picked.

## How it works

`main.ts` (plain JavaScript, run directly with Node) copies `entry.txt` to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output` when the variable
is not set. Before writing it validates the entry against the competition
gate (1–200 characters, not only white space, a single line) and exits with
an error instead of shipping an entry the scorer would reject.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `entry.txt` — the line, exactly one line
- `main.ts` — the entry program
- `CANDIDATES.md` — brainstorming, scoring, and why this line won
- `.makefun/owner.json` — payout wallet
- `LICENSE` — MIT
