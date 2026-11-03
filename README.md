# MedPass Madness 💊

A mobile-first nursing med-pass time-management game.
**Play:** https://medpass-madness.vercel.app (backup link: https://htmlpreview.github.io/?https://github.com/WTFINATRUCK/medpass-madness/blob/main/index.html)

## What's new in v3.3 (consistency + 100-run playtest)
- **One art style everywhere.** Menus, countdown and end screens show your actual floor map with your nurse, and rooms use a drawn interior, so no more generic painted nurse fighting your chosen avatar.
- **Fixed:** broken bold text in How It Works and the iPhone install tip; screens opening pre-scrolled; interruption card sliding off-screen when the sheet was scrolled; result title hidden by the avatar on small phones; nurse token covering the RN station.
- **Dana stops you in the hall:** your nurse waits for your answer instead of walking into a room and dropping her report mid-read.
- **Tighter shifts:** less dead time in Arcade 7–9, the Daily and every Career shift, based on 100+ bot playthroughs.
- XP title "Preceptor Pick" renamed "Hallway Hero" (Career already has a real preceptor).

## What's new in v3.2: Career Mode, Chapter 1 "The New Hire"
- **8 Memory Care shifts** with a fixed cast (Mae, Jim, José, Lena, Henry, Evelyn) in the same rooms every shift, plus 2 rotating guests. Pick a preceptor; they react to your big moments and judge each shift.
- **Live situations, not quizzes.** Mae insists she's Evelyn, José swears he never got his pill, the cuff says 62 but the order says apical. Every choice has an in-character consequence.
- **Dana the CNA** pops up on the hallway map with what she saw. Assess it yourself, have her recheck vitals, or leave it for later, but ignore the urgent ones and they come back worse.
- **Interruptions** hit mid-check: phones, visitors, lifts, a doctor rattling off orders.
- **Call the Doc:** an SBAR phone mini-game. Put the call in order fast and skip the tomatoes.
- **Sign-offs and rematches.** Clean shifts earn a sign-off. Anything that got you comes back later as a surprise 🔁 rematch, spaced out further each time you win it (Career and Arcade, never the Daily).

## v3.1 (Career Mode groundwork)
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
