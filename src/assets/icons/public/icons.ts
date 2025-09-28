export type IconsId =
  | "svg-arrow-right-from-bracket";

export type IconsKey =
  | "SvgArrowRightFromBracket";

export enum Icons {
  SvgArrowRightFromBracket = "svg-arrow-right-from-bracket",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.SvgArrowRightFromBracket]: "61697",
};
