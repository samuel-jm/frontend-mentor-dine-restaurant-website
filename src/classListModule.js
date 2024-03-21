const classListModule = (() => {
  function makeUniqueSet(selector, includeBaseElement = true) {
    const element = document.querySelector(selector);
    const subElements = element.querySelectorAll("*");

    return new Set(
      Array.of(
        includeBaseElement ? [...element.classList] : [],
        [...subElements].map((subElement) => [...subElement.classList]).flat(),
      )
        .flat()
        .sort()
        .filter((value, index, array) => value !== array[index + 1]),
    );
  }

  function makeSetsUnique(superSet, subSets) {
    const uniqueSuperset = new Set(superSet);
    const uniqueSubsets = [];
    for (let i = 0; i < subSets.length; i++) {
      uniqueSubsets.push(new Set(subSets[i]));
    }

    superSet.forEach((item) => {
      const duplicateClasses = subSets.reduce((acc, curr) => {
        return acc + (curr.has(item) ? 1 : 0);
      }, 0);

      if (duplicateClasses > 1) {
        uniqueSubsets.forEach((set) => set.delete(item));
      } else if (duplicateClasses === 1) {
        uniqueSuperset.delete(item);
      }
    });
    return { uniqueSuperset, uniqueSubsets };
  }
  return { makeSetsUnique, makeUniqueSet };
})();

export default classListModule;
