export const capitalizeWord = (word) => {
  return word
    .trim()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase().concat(w.slice(1)))
    .join(" ");
};
