// Data-driven content for Red Cup League Berlin.
// Edit here to update the site without touching layout.

export type Status = "open" | "soldout" | "final" | "invite";

export interface RcEvent {
  night: string;        // "04"
  title: string;
  weekday: string;
  date: string;
  time: string;
  location: string;
  format: string;
  teams: string;        // "16 / 24"
  status: Status;
  statusLabel: string;
  cta: string;
}

export const events: RcEvent[] = [
  {
    night: "04",
    title: "Berlin Cup Night",
    weekday: "Friday",
    date: "19 Jul",
    time: "20:00",
    location: "Kreuzberg",
    format: "16 Teams · 2v2",
    teams: "16 / 24",
    status: "open",
    statusLabel: "Registration Open",
    cta: "Register Team",
  },
  {
    night: "05",
    title: "Späti Pong Special",
    weekday: "Saturday",
    date: "03 Aug",
    time: "21:00",
    location: "Neukölln",
    format: "Knockout · 2v2",
    teams: "08 / 32",
    status: "open",
    statusLabel: "Registration Open",
    cta: "Register Team",
  },
  {
    night: "06",
    title: "Champions Table",
    weekday: "Saturday",
    date: "30 Aug",
    time: "22:00",
    location: "Friedrichshain",
    format: "Top 8 · Invite",
    teams: "08 / 08",
    status: "invite",
    statusLabel: "Invite Only",
    cta: "Leaderboard",
  },
];

export interface HowStep {
  n: string;
  title: string;
  body: string;
}

export const howItWorks: HowStep[] = [
  {
    n: "01",
    title: "Register your team",
    body: "Grab a teammate, pick a name worth shouting, and lock your spot before the bracket fills.",
  },
  {
    n: "02",
    title: "Enter the bracket",
    body: "Play the group stage, then the knockout rounds. Win your table or go home dry.",
  },
  {
    n: "03",
    title: "Win the cup",
    body: "Claim the title, the photo, and a permanent line in the Berlin Hall of Fame.",
  },
];

export const rules: string[] = [
  "2 vs 2. No subs mid-game.",
  "10 cups per team, racked in a pyramid.",
  "Bounce shots count double — but can be swatted.",
  "Re-racks only by announcement, once per game.",
  "Sudden death decides a draw: 3 cups, one shot each.",
  "House rules apply on the night. The table is law.",
];

export interface RankRow {
  pos: number;
  team: string;
  district: string;
  w: number;
  l: number;
  hits: number;
  cups: number; // tournament wins
  streak: string;
}

export const leaderboard: RankRow[] = [
  { pos: 1, team: "Späti Kings", district: "Wedding", w: 19, l: 4, hits: 211, cups: 3, streak: "W6" },
  { pos: 2, team: "Prenzlauer Pong Club", district: "Prenzlauer Berg", w: 17, l: 6, hits: 188, cups: 2, streak: "W2" },
  { pos: 3, team: "Kreuzberg Splash", district: "Kreuzberg", w: 16, l: 7, hits: 176, cups: 1, streak: "L1" },
  { pos: 4, team: "Mitte Snipers", district: "Mitte", w: 14, l: 9, hits: 169, cups: 1, streak: "W3" },
  { pos: 5, team: "Neukölln Nightshift", district: "Neukölln", w: 13, l: 10, hits: 154, cups: 0, streak: "W1" },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "How many players per team?",
    a: "Two. It's 2v2 all the way through — pick a partner you trust under pressure.",
  },
  {
    q: "Do I need experience?",
    a: "No. Half the bracket is first-timers. The group stage is the warm-up; the rules are simple enough to learn in one round.",
  },
  {
    q: "Where do the events take place?",
    a: "Rotating venues across Berlin — Kreuzberg, Neukölln, Friedrichshain. The exact address goes out to registered teams 48 hours before.",
  },
  {
    q: "Can I come as a spectator?",
    a: "Yes. Spectator entry is free until the venue hits capacity. Bring noise.",
  },
  {
    q: "Are drinks included?",
    a: "Game cups are on us. Everything else is on the bar. Pace yourself — the bracket is long.",
  },
  {
    q: "How do I register?",
    a: "Hit Register Team on any open event, name your team, and pay the table fee. Your spot is confirmed by email.",
  },
];
