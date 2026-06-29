// Announcements data for the info banner.
// Each entry has a de/en variant with text, linkLabel, and linkUrl.

import type { Lang } from "../i18n/ui";

export interface Announcement {
  text: string;
  linkLabel: string;
  linkUrl: string;
}

interface AnnouncementEntry {
  id: string;
  de: Announcement;
  en: Announcement;
}

const announcements: AnnouncementEntry[] = [
  {
    id: "season-02-launch",
    de: {
      text: "🏆 Season 02 startet am 19. Juli — 24 Teams, ein Pokal!",
      linkLabel: "Jetzt anmelden",
      linkUrl: "#signup",
    },
    en: {
      text: "🏆 Season 02 kicks off July 19th — 24 teams, one cup!",
      linkLabel: "Sign up now",
      linkUrl: "#signup",
    },
  },
  {
    id: "night-04-slots",
    de: {
      text: "🔥 Night 04 — Nur noch 8 Plätze frei in Kreuzberg!",
      linkLabel: "Platz sichern",
      linkUrl: "#events",
    },
    en: {
      text: "🔥 Night 04 — Only 8 spots left in Kreuzberg!",
      linkLabel: "Grab your spot",
      linkUrl: "#events",
    },
  },
  {
    id: "champions-invite",
    de: {
      text: "⭐ Champions Table — Top 8 spielen am 30. August um den Titel",
      linkLabel: "Rangliste ansehen",
      linkUrl: "#hall",
    },
    en: {
      text: "⭐ Champions Table — Top 8 battle for the title August 30th",
      linkLabel: "View rankings",
      linkUrl: "#hall",
    },
  },
];

export function getAnnouncements(lang: Lang): Announcement[] {
  return announcements.map((entry) => entry[lang]);
}
