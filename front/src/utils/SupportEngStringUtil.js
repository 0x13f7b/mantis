/**
 * @flow strict
 * @format
 */

const first = require('./first');
const firstx = require('./firstx');

const SupportEngStringUtil = {
  capitalizeFirstLetterInWords(text: string): string {
    return text
      .trim()
      .split(/\s+/)
      .map(
        (word: string): string =>
          firstx(word.toUpperCase()) + word.substring(1),
      )
      .join(' ');
  },
  convertSpaceCaseToSnakeCase(text: string): string {
    return text.replace(/\b[A-Z]+(\s)+\b/gi, (_: string): string => '_');
  },
  convertSpaceCaseToTitleCase(text: string): string {
    return text
      .split(' ')
      .map(
        (letter: string): string =>
          (first(letter.toUpperCase()) || '') +
          letter.substring(1).toLowerCase(),
      )
      .join(' ');
  },
  convertCamelCaseToTitleCase(text: string): string {
    return text
      .replace(/(^[a-z])/, (string: string): string => string.toUpperCase())
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([a-z])/g, ' $1$2')
      .replace(/ +/g, ' ');
  },
  convertCamelCaseToUnderScore(text: string): string {
    return text.replace(/([A-Z])/g, ($1): string => `_${$1.toLowerCase()}`);
  },
  convertSnakeCaseToSpaceCase(text: string): string {
    return text.split('_').join(' ');
  },
  convertSnakeCaseToTitleCase(text: string): string {
    return SupportEngStringUtil.convertSpaceCaseToTitleCase(
      SupportEngStringUtil.convertSnakeCaseToSpaceCase(text),
    );
  },
  convertUnderscoreToUpperSpaceCase(text: string): string {
    return text
      .split('_')
      .map(
        (letter: string): string =>
          firstx(letter.toUpperCase()) + letter.substring(1).toLowerCase(),
      )
      .join(' ');
  },
  stripNonNumeric(text: string): string {
    return text.replace(/[^0-9]/g, '');
  },
  stripNumeric(text: string): string {
    return text.replace(/[0-9]/g, '');
  },
  trimOnLengthAndEllipsis(
    text: string,
    maxLength: number,
    subStringLength: number = maxLength - 1,
  ): string {
    return text.length < maxLength
      ? text
      : text.substr(0, subStringLength) + '...';
  },
};

export default SupportEngStringUtil;
