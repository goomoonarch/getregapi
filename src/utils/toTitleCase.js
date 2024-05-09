export const toTitleCase = (str) => {
  if (str) {
    const exceptions = ["EPS", "IPS", "ESE", "SAS", "S.A.S.", "E.S.E", "S.A.", "D.C."];
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => {
        const isException = exceptions.some((ex) => ex.toLowerCase() === word.toLowerCase());
        if (isException) {
          return word.toUpperCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      })
      .join(" ");
  }
};

