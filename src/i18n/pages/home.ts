import { defaultLang, type Language } from '../config';

type CTA = {
  label: string;
  href: string;
};

type HomeCopy = {
  hero: {
    label: string;
    title: string;
    description: string[];
    primary: CTA;
    secondary: CTA;
  };
  writing: {
    eyebrow: string;
    title: string;
    description: string;
    viewAllLabel: string;
    emptyLabel: string;
  };
  personal: {
    eyebrow: string;
    title: string;
    description: string;
    link: CTA;
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
    viewAllLabel: string;
  };
};

const homeCopy: Record<Language, HomeCopy> = {
  en: {
    hero: {
      label: "Hi, I’m Binliu.",
      title: "I build software, explore ideas, and write to understand them better.",
      description: [
        "I’m a software engineer living in the Netherlands. This is my corner of the internet for notes on software systems, engineering craft, life abroad, and the choices and questions that shape a life.",
        "Some ideas begin at work; others emerge from music, cities, conversations, or ordinary moments. Writing helps me connect them, clarify what I think, and share something useful along the way.",
      ],
      primary: { label: "Read the latest notes", href: "#writing" },
      secondary: { label: "More about me", href: "/about" },
    },
    writing: {
      eyebrow: "From the notebook",
      title: "Recent writing",
      description: "Notes on software, learning, and the parts of life that resist a tidy summary.",
      viewAllLabel: "View all writing",
      emptyLabel: "No notes published yet.",
    },
    personal: {
      eyebrow: "Beyond the keyboard",
      title: "There’s more to a life than the work.",
      description: "Living between China and the Netherlands has made me curious about how people build a sense of home, identity, and possibility in unfamiliar places. Outside work, I spend my time cooking, listening to music, exploring cities, and writing about choices, change, and life abroad—often beginning with small observations that lead to much larger questions.",
      link: { label: "Meet the person behind the work", href: "/about" },
    },
    work: {
      eyebrow: "Selected work",
      title: "A few things I’ve helped build",
      description: "A small selection of systems and tools shaped by real operational problems.",
      items: [
        {
          title: "Help Experience Orchestration",
          description: "An event-driven coordination layer that helps customer support journeys resolve routine issues automatically.",
        },
        {
          title: "JETMS Operational Platform",
          description: "A shared workspace that brought a fragmented collection of internal operational tools into one coherent system.",
        },
        {
          title: "MapYourCity",
          description: "A crowdsourcing platform for collecting and reviewing geospatial data used to improve on-trip map accuracy.",
        },
      ],
      viewAllLabel: "See selected projects",
    },
  },
};

export function getHomeCopy(lang: Language): HomeCopy {
  return homeCopy[lang] ?? homeCopy[defaultLang];
}
