// Data-driven content for Red Cup League Berlin.
// Edit here to update the site without touching layout.
// All user-facing strings support de/en via locale-aware getters.

import type { Lang } from "../i18n/ui";

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

const eventsData: Record<Lang, RcEvent[]> = {
  en: [
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
  ],
  de: [
    {
      night: "04",
      title: "Berlin Cup Night",
      weekday: "Freitag",
      date: "19. Jul",
      time: "20:00",
      location: "Kreuzberg",
      format: "16 Teams · 2v2",
      teams: "16 / 24",
      status: "open",
      statusLabel: "Anmeldung offen",
      cta: "Team anmelden",
    },
    {
      night: "05",
      title: "Späti Pong Special",
      weekday: "Samstag",
      date: "03. Aug",
      time: "21:00",
      location: "Neukölln",
      format: "Knockout · 2v2",
      teams: "08 / 32",
      status: "open",
      statusLabel: "Anmeldung offen",
      cta: "Team anmelden",
    },
    {
      night: "06",
      title: "Champions Table",
      weekday: "Samstag",
      date: "30. Aug",
      time: "22:00",
      location: "Friedrichshain",
      format: "Top 8 · Einladung",
      teams: "08 / 08",
      status: "invite",
      statusLabel: "Nur mit Einladung",
      cta: "Rangliste",
    },
  ],
};

export function getEvents(lang: Lang): RcEvent[] {
  return eventsData[lang];
}

export interface HowStep {
  n: string;
  title: string;
  body: string;
}

const howItWorksData: Record<Lang, HowStep[]> = {
  en: [
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
  ],
  de: [
    {
      n: "01",
      title: "Melde dein Team an",
      body: "Schnapp dir einen Teampartner, wähl einen Namen, den man rufen will, und sichere dir deinen Platz, bevor die Bracket voll ist.",
    },
    {
      n: "02",
      title: "Tritt in die Bracket ein",
      body: "Spiel die Gruppenphase, dann die K.O.-Runden. Gewinn deinen Tisch oder geh mit leeren Händen.",
    },
    {
      n: "03",
      title: "Gewinn den Pokal",
      body: "Hol dir den Titel, das Foto und einen festen Platz in der Berliner Hall of Fame.",
    },
  ],
};

export function getHowItWorks(lang: Lang): HowStep[] {
  return howItWorksData[lang];
}

const rulesData: Record<Lang, string[]> = {
  en: [
    "2 vs 2. No subs mid-game.",
    "10 cups per team, racked in a pyramid.",
    "Bounce shots count double — but can be swatted.",
    "Re-racks only by announcement, once per game.",
    "Sudden death decides a draw: 3 cups, one shot each.",
    "House rules apply on the night. The table is law.",
  ],
  de: [
    "2 gegen 2. Kein Wechsel während des Spiels.",
    "10 Becher pro Team, aufgestellt als Pyramide.",
    "Bounce-Würfe zählen doppelt — können aber abgewehrt werden.",
    "Re-Racks nur auf Ansage, einmal pro Spiel.",
    "Bei Gleichstand entscheidet Sudden Death: 3 Becher, je ein Wurf.",
    "Es gelten die Hausregeln des Abends. Der Tisch ist Gesetz.",
  ],
};

export function getRules(lang: Lang): string[] {
  return rulesData[lang];
}

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

// Leaderboard data is language-independent (team names & stats)
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

const faqsData: Record<Lang, Faq[]> = {
  en: [
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
  ],
  de: [
    {
      q: "Wie viele Spieler pro Team?",
      a: "Zwei. Es ist durchgehend 2v2 — wähl einen Partner, dem du unter Druck vertraust.",
    },
    {
      q: "Brauche ich Erfahrung?",
      a: "Nein. Die Hälfte der Bracket sind Neulinge. Die Gruppenphase ist das Aufwärmen; die Regeln lernt man in einer Runde.",
    },
    {
      q: "Wo finden die Events statt?",
      a: "Wechselnde Locations in Berlin — Kreuzberg, Neukölln, Friedrichshain. Die genaue Adresse wird 48 Stunden vorher an angemeldete Teams verschickt.",
    },
    {
      q: "Kann ich als Zuschauer kommen?",
      a: "Ja. Der Eintritt für Zuschauer ist frei, bis die Location voll ist. Bring Stimmung mit.",
    },
    {
      q: "Sind Getränke inklusive?",
      a: "Die Spielbecher gehen auf uns. Alles andere gibt's an der Bar. Teile dir die Kräfte ein — die Bracket ist lang.",
    },
    {
      q: "Wie melde ich mich an?",
      a: "Klick auf Team anmelden bei einem offenen Event, gib deinen Teamnamen ein und bezahle die Tischgebühr. Dein Platz wird per E-Mail bestätigt.",
    },
  ],
};

export function getFaqs(lang: Lang): Faq[] {
  return faqsData[lang];
}

// Gallery recaps — translate captions
export interface GalleryRecap {
  tag: string;
  score: string;
  winner: string;
  tone: string;
  span: string;
}

const galleryData: Record<Lang, GalleryRecap[]> = {
  en: [
    { tag: "Night 01 · Kreuzberg", score: "21–18", winner: "Späti Kings", tone: "red", span: "tall" },
    { tag: "Night 02 · Neukölln", score: "Final", winner: "Sudden death", tone: "blue", span: "" },
    { tag: "Bounce of the night", score: "x2", winner: "Mitte Snipers", tone: "warm", span: "" },
    { tag: "Night 03 · F'hain", score: "24 Teams", winner: "Sold out", tone: "dark", span: "wide" },
    { tag: "Crowd shot", score: "01:14", winner: "After the final", tone: "blue", span: "" },
  ],
  de: [
    { tag: "Nacht 01 · Kreuzberg", score: "21–18", winner: "Späti Kings", tone: "red", span: "tall" },
    { tag: "Nacht 02 · Neukölln", score: "Finale", winner: "Sudden Death", tone: "blue", span: "" },
    { tag: "Bounce des Abends", score: "x2", winner: "Mitte Snipers", tone: "warm", span: "" },
    { tag: "Nacht 03 · F'hain", score: "24 Teams", winner: "Ausverkauft", tone: "dark", span: "wide" },
    { tag: "Publikum", score: "01:14", winner: "Nach dem Finale", tone: "blue", span: "" },
  ],
};

export function getGalleryRecaps(lang: Lang): GalleryRecap[] {
  return galleryData[lang];
}
