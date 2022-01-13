import { useTheme } from "@emotion/react";

const makeStyles = (styles: Function) => (props?: Object) => {
  const theme = useTheme();
  const stylesWithTheme = styles(theme);
  if (props) {
    // Props가 존재하면 해당 Props를 사용하는 object를 찾습니다.
    const constructStyles = (styleObject: Object) => {
      let constructedStyle = styleObject;
      const styleEntries = Object.entries(styleObject);

      for (const [key, value] of styleEntries) {
        if (typeof value === "object") {
          const styleValue = constructStyles(value);
          constructedStyle = { ...constructedStyle, [key]: styleValue };
        } else if (typeof value === "function") {
          constructedStyle = { ...constructedStyle, [key]: value(props) };
        }
      }

      return constructedStyle;
    };

    const completedStyle = constructStyles(stylesWithTheme);
    return completedStyle;
  }
  return stylesWithTheme;
};

export default makeStyles;
