# MedPass Madness 💊

A mobile-first nursing med-pass time-management game.
**Play:** https://medpass-madness.vercel.app (backup link: https://htmlpreview.github.io/?https://github.com/WTFINATRUCK/medpass-madness/blob/main/index.html)

## What's new in v3.1 (Career Mode groundwork)
- **Arcade and Career split.** The 9-level ladder is now called **Arcade** (same levels, stars and saves). **Career** previews Chapter 1, *The New Hire*: eight Memory Care shifts with a preceptor, a recurring cast and a solo finale. Coming soon.
- **"You're hired!" card.** The first time you open Career, a short intro sets the scene plus a one-line note that it's a fictional care home with simplified meds. The same note is in Settings.
- **Rematch pile.** Situations that trip you up in any mode (wrong pull, allergy, out-of-range vitals, crushing an ER tablet and so on) are saved so they can come back as surprise rematches in Chapter 1.
- **Save v4.** Adds Career and rematch-pile fields; v3 saves and old backup codes migrate with nothing lost.

## What's new in v3
- 18 residents and 12 playable nurses from the character sheets; pick your nurse + nickname on first launch
- Room scene shows the resident you're treating and your nurse
- Faster bedside check: read the rows, then **Give** or **Hold** (tap the row that's wrong)
- Foam-in hand hygiene, name + DOB on wristbands, allergy-conflict catches, realistic med times
- Rush moments, finish-early bonus, in-shift star meter, mood faces on call lights
- **Daily Shift** (same for everyone, shareable result), daily streak with weekly freeze, experience titles

## How it plays
- **Hallway map** – residents ring call lights, each with a patience timer. Tap glowing rooms to queue your route; the nurse walks them in order. Let a timer run out and the resident gives up (−100).
- **In the room** – pull the right med from the cart, then tap each Right on the bedside check (MAR vs. bedside). **Administer** if everything matches, **🛑 Hold** if something doesn't.
- **Hidden problems** – wrong wristband, already given, NPO, vitals below hold parameters, ER tablets that can't be crushed, low blood sugar, PRN given too recently. Catching one = +200.

## Arcade (9 levels, 3 stars each)
| Unit | New skill |
|---|---|
| 🌸 Memory Care (1–3) | Scheduled meds, 5 Rights, route planning |
| 🦽 Rehab (4–6) | 💓 Vital-sign hold parameters · 🥄 Crushed meds / Do-Not-Crush |
| 🏥 Med-Surg (7–9) | 🩸 Sliding-scale insulin · 😣 PRN pain by pain score |

★ serve 70% safely · ★★ hit the score target · ★★★ higher target with zero mistakes. Each star unlocks the next level.

## Upgrades (coins from every shift)
👟 Comfy Shoes · 💬 Bedside Manner · 📟 Barcode Scanner · 🗂️ Organized Cart · ☕ Coffee

## ∞ Endless
Calls keep coming faster; 3 hearts. Skills unlock as you earn Arcade stars.

Single `index.html` + `/assets`. No build step, no ads, no music. Progress saves in the browser.
