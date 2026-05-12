# AIA 3A Girls Basketball · Region Alignment & Schedule Tool

Built by the Seton Catholic Preparatory Athletic Department (Chandler, AZ)  
**2026–27 Season Draft Proposal**

## What this is

An interactive web tool supporting a proposed realignment of the AIA 3A conference into 7 regions for girls basketball, with full 18-game schedules for all 62 schools. Built to share with other athletic directors as a collaborative planning tool.

**Live site:** https://BigDaddyNAZ.github.io/aia3a---scheduler/

## Regions

| Region | Schools | Notes |
|--------|---------|-------|
| Greater Phoenix | 10 | Private/charter schools across the valley |
| East Valley / Pinal | 9 | Queen Creek, Apache Junction, Coolidge corridor |
| Rim Country | 9 | Payson through Flagstaff/Coconino |
| Navajo / North | 10 | Navajo Nation + 4×2A additions |
| Tucson / South | 9 | Tucson metro + Safford/Thatcher |
| Yuma / Colorado River | 6 | Yuma, Parker, Tonopah |
| Kingman / Prescott | 9 | Kingman, Bullhead City, Prescott corridor |

## Schedule structure (per school)

- **18 games** total (15–16 for Yuma region due to geographic constraints)
- **12 region games** — full home-and-away round robin
- **2 away long-haul + 2 home long-haul** — 2-year rotating contracts, unique opponents
- **2–4 nearby non-region games** — max 1×4A, rest 3A
- **9 home / 9 away** — perfectly balanced
- **Max 3 consecutive** home or away games — no streaks longer than 3
- **No games:** Sundays · Thanksgiving weekend · Dec 18–Jan 1

## Boys / Girls coordination

When the girls play at home, the boys travel — and vice versa. The boys program mirrors these H/A assignments on the same dates.

## Files

```
index.html          Main app shell
css/styles.css      All styles
js/app.js           Map, schedule display, regions page logic
data/schedules.json All 62 school schedules (18 games each)
data/schools.js     School coordinates, regions, conference metadata
```

## Running locally

Open `index.html` directly in a browser **won't work** (the fetch() call for schedules.json is blocked by browser security on local files). Two options:

**Option A — Use the standalone file** (simplest):  
Download `aia3a_master_v7.html` from the releases tab. Open it directly — all data is inline.

**Option B — Run a local server:**
```bash
cd aia3a-scheduler
python3 -m http.server 8000
# Then open http://localhost:8000 in your browser
```

## Editing schedules

To update a school's schedule, edit `data/schedules.json`. Each entry follows this structure:

```json
"School Name": {
  "city": "City",
  "region": "Region Name",
  "color": "#HEX",
  "games": [
    { "g": 1, "date": "Tue, Nov 18", "wk": "W1",
      "opp": "Opponent Name", "type": "rgn",
      "ha": "H", "dist": 12, "notes": "Season opener" }
  ]
}
```

Game types: `rgn` · `long` · `long2` · `long_home` · `long_home2` · `near`

## Contact

Seton Catholic Preparatory · Office of the Athletic Director · Chandler, AZ  
AIA Division 3A · 2026–27 season draft
