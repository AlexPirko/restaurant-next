export type AboutHero = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export type AboutStory = {
  title: string;
  description: string[];
  image: string;
};

export type PhilosophyItem = {
  title: string;
  description: string;
  image?: string;
};

export type Chef = {
  name: string;
  role: string;
  quote: string;
  description: string;
  image: string;
};

export type Experience = {
  title: string;
  description: string;
  image: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type AboutCTA = {
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
};
