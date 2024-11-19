const titles = [
  "Quick Quilled Ponnies",
  "Quirky Queen Prawns",
  "Quintillion Quacky Pranks",
  "Questionable Quizzical Ponchos",
  "Queassy Quarrelsome Poodles",
];

export const useTitle = () => {
  const title = titles[Math.floor(Math.random() * titles.length)];

  return title;
};
