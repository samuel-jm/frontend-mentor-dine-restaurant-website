import "./styles.scss";
import classListModule from "./classListModule";

const classes = classListModule.makeUniqueSet(".body", false);
const heroClasses = classListModule.makeUniqueSet(".hero");
const enjoyablePlaceClasses = classListModule.makeUniqueSet(".enjoyable-place");
const locallySourcedClasses = classListModule.makeUniqueSet(".locally-sourced");
const highlightsClasses = classListModule.makeUniqueSet(".highlights");
const familyGatheringClasses =
  classListModule.makeUniqueSet(".family-gathering");
const ctaClasses = classListModule.makeUniqueSet(".cta");
const footerClasses = classListModule.makeUniqueSet(".footer");

const subSets = [
  heroClasses,
  enjoyablePlaceClasses,
  locallySourcedClasses,
  highlightsClasses,
  familyGatheringClasses,
  ctaClasses,
  footerClasses,
];

const { uniqueSuperset, uniqueSubsets } = classListModule.makeSetsUnique(
  classes,
  subSets,
);

console.log(classes, uniqueSuperset);
uniqueSubsets.forEach((set) => {
  console.log(set);
});
