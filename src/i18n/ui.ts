// Central translation dictionary for all UI strings.
// German (de) is the default locale; English (en) is secondary.

export const languages = {
  de: "Deutsch",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "de";

export const ui = {
  de: {
    // --- Nav ---
    "nav.events": "Events",
    "nav.how": "So geht's",
    "nav.rules": "Regeln",
    "nav.hall": "Hall of Fame",
    "nav.faq": "FAQ",
    "nav.cta": "Team anmelden",
    "nav.home.aria": "Red Cup League Berlin — Startseite",

    // --- Hero ---
    "hero.eyebrow": "Season 02 · 24 Teams · Ein Pokal",
    "hero.subtitle":
      "College-Cup-Energie trifft auf dunkles Berliner Nachtleben. Melde dein Team an, tritt in die Bracket ein und spiel um den Ruhm.",
    "hero.cta.events": "Events ansehen",
    "hero.cta.signup": "Team anmelden",
    "hero.scroll": "Scrolle für den Wurf",
    "hero.svg.aria":
      "Die Kugel des Berliner Fernsehturms verwandelt sich in einen Beer-Pong-Ball und landet im roten Becher.",

    // hero keywords
    "hero.kw.1": "Rack\u00a0'em",
    "hero.kw.2": "Bounce\u00a0×2",
    "hero.kw.3": "Swish",
    "hero.kw.4": "Keine\u00a0Gnade",
    "hero.kw.5": "Los\u00a0geht's",

    // --- Upcoming Events ---
    "events.eyebrow": "Spielplan",
    "events.title.line1": "Kommende",
    "events.title.line2": "Events",
    "events.intro":
      "Die nächsten Würfe stehen schon bereit. Schnapp dir deinen Teampartner und sichere euch einen Platz, bevor die Bracket voll ist.",

    // --- Event Card ---
    "event.night": "Nacht",
    "event.when": "Wann",
    "event.where": "Wo",
    "event.format": "Format",
    "event.teams": "Teams",

    // --- How It Works ---
    "how.eyebrow": "Das Format",
    "how.title.line1": "Vom",
    "how.title.line2": "Turm",
    "how.title.line3": "zum Becher",

    // --- Rules ---
    "rules.eyebrow": "Hausregeln",
    "rules.title.line1": "Keine Ausreden.",
    "rules.title.line2": "Keine Gnade.",
    "rules.title.line3": "Nur Becher.",
    "rules.lede":
      "Einfach genug, um nach Mitternacht zu spielen. Streng genug, um jede Diskussion am Tisch zu klären.",
    "rules.stamp": "Offiziell · RCL Berlin",

    // --- Leaderboard ---
    "leaderboard.eyebrow": "Season-Ranking",
    "leaderboard.title.line1": "Hall of",
    "leaderboard.title.line2": "Fame",
    "leaderboard.intro":
      "Die Teams, die den Tisch beherrscht haben. Die Rangliste wird nach jedem Berlin Cup Night aktualisiert.",
    "leaderboard.col.team": "Team",
    "leaderboard.col.hits": "Treffer",
    "leaderboard.col.cups": "Pokale",
    "leaderboard.col.streak": "Serie",
    "leaderboard.aria": "Season-Ranking",

    // --- Gallery ---
    "gallery.eyebrow": "Rückblick",
    "gallery.title.line1": "Nächte, die",
    "gallery.title.line2": "ein Foto",
    "gallery.title.line3": "verdient haben",

    // --- Signup CTA ---
    "signup.eyebrow": "In die Bracket eintreten",
    "signup.title.line1": "Bring deinen Teampartner.",
    "signup.title.line2": "Mach deinen",
    "signup.title.line3": "Wurf",
    "signup.lede":
      "Die nächste Red Cup League Berlin Nacht steht bevor. Benenne dein Team, sichere dir deinen Platz und spiel um den Pokal.",
    "signup.label": "Teamname",
    "signup.placeholder": "z.B. Späti Kings",
    "signup.submit": "Platz sichern",
    "signup.status.with_team":
      'Platz reserviert für „{team}". Wir bestätigen den Veranstaltungsort per E-Mail.',
    "signup.status.without_team":
      "Platz reserviert. Wir bestätigen den Veranstaltungsort per E-Mail.",
    "signup.alt": "oder alle kommenden Events ansehen →",

    // --- FAQ ---
    "faq.eyebrow": "Bevor du spielst",
    "faq.title.line1": "Fragen",
    "faq.title.line2": "aus der Reihe",
    "faq.note":
      "Noch unsicher? Komm am Spielabend vorbei — der Tisch beantwortet alles.",

    // --- Footer ---
    "footer.tag": "Berliner Nächte. College-Regeln. Ein Champion.",
    "footer.cta": "Team anmelden",
    "footer.col.league": "Liga",
    "footer.col.follow": "Folgen",
    "footer.events": "Events",
    "footer.how": "So geht's",
    "footer.rules": "Regeln",
    "footer.hall": "Hall of Fame",
    "footer.faq": "FAQ",
    "footer.fine": "Trinke verantwortungsvoll. Der Becher wartet.",

    // --- Skip link ---
    "skip": "Zu den Events springen",
  },

  en: {
    // --- Nav ---
    "nav.events": "Events",
    "nav.how": "How it works",
    "nav.rules": "Rules",
    "nav.hall": "Hall of Fame",
    "nav.faq": "FAQ",
    "nav.cta": "Register Team",
    "nav.home.aria": "Red Cup League Berlin — home",

    // --- Hero ---
    "hero.eyebrow": "Season 02 · 24 Teams · One Cup",
    "hero.subtitle":
      "College cup energy meets dark Berlin nightlife. Register your team, enter the bracket, and play for glory.",
    "hero.cta.events": "View Events",
    "hero.cta.signup": "Register Team",
    "hero.scroll": "Scroll to take the shot",
    "hero.svg.aria":
      "The Berlin TV Tower sphere transforms into a beer pong ball and lands in a red cup.",

    // hero keywords
    "hero.kw.1": "Rack\u00a0'em",
    "hero.kw.2": "Bounce\u00a0×2",
    "hero.kw.3": "Swish",
    "hero.kw.4": "No\u00a0mercy",
    "hero.kw.5": "Game\u00a0on",

    // --- Upcoming Events ---
    "events.eyebrow": "Fixtures",
    "events.title.line1": "Upcoming",
    "events.title.line2": "Events",
    "events.intro":
      "The next shots are already lined up. Grab your teammate and secure your spot before the bracket fills.",

    // --- Event Card ---
    "event.night": "Night",
    "event.when": "When",
    "event.where": "Where",
    "event.format": "Format",
    "event.teams": "Teams",

    // --- How It Works ---
    "how.eyebrow": "The Format",
    "how.title.line1": "From the",
    "how.title.line2": "tower",
    "how.title.line3": "to the cup",

    // --- Rules ---
    "rules.eyebrow": "House Rules",
    "rules.title.line1": "No excuses.",
    "rules.title.line2": "No mercy.",
    "rules.title.line3": "Just cups.",
    "rules.lede":
      "Simple enough to play after midnight. Strict enough to settle every argument at the table.",
    "rules.stamp": "Official · RCL Berlin",

    // --- Leaderboard ---
    "leaderboard.eyebrow": "Season Ranking",
    "leaderboard.title.line1": "Hall of",
    "leaderboard.title.line2": "Fame",
    "leaderboard.intro":
      "The teams that owned the table. Standings update after every Berlin Cup Night.",
    "leaderboard.col.team": "Team",
    "leaderboard.col.hits": "Hits",
    "leaderboard.col.cups": "Cups",
    "leaderboard.col.streak": "Streak",
    "leaderboard.aria": "Season ranking",

    // --- Gallery ---
    "gallery.eyebrow": "Recap",
    "gallery.title.line1": "Nights that",
    "gallery.title.line2": "earned a",
    "gallery.title.line3": "photo",

    // --- Signup CTA ---
    "signup.eyebrow": "Enter the Bracket",
    "signup.title.line1": "Bring your teammate.",
    "signup.title.line2": "Take your",
    "signup.title.line3": "shot",
    "signup.lede":
      "The next Red Cup League Berlin night is coming up. Name your team, lock your spot, and play for the cup.",
    "signup.label": "Team name",
    "signup.placeholder": "e.g. Späti Kings",
    "signup.submit": "Claim your spot",
    "signup.status.with_team":
      'Spot held for "{team}". We\'ll confirm the venue by email.',
    "signup.status.without_team":
      "Spot held. We'll confirm the venue by email.",
    "signup.alt": "or view all upcoming events →",

    // --- FAQ ---
    "faq.eyebrow": "Before you play",
    "faq.title.line1": "Questions",
    "faq.title.line2": "from the line",
    "faq.note":
      "Still unsure? Catch us on the night — the table answers everything.",

    // --- Footer ---
    "footer.tag": "Berlin nights. College rules. One champion.",
    "footer.cta": "Register Team",
    "footer.col.league": "League",
    "footer.col.follow": "Follow",
    "footer.events": "Events",
    "footer.how": "How it works",
    "footer.rules": "Rules",
    "footer.hall": "Hall of Fame",
    "footer.faq": "FAQ",
    "footer.fine": "Drink responsibly. The cup waits.",

    // --- Skip link ---
    "skip": "Skip to events",
  },
} as const;
