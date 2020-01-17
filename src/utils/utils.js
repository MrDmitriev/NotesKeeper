import {path} from "ramda";
import {Localization} from '../constants/constants.js';

export const getLabel = (lang, label) => {
  return path([lang, label], Localization);
};


