import { useTheme } from "@emotion/react";

const makeStyles = (styles) => (props) => {
  const theme = useTheme();
  const stylesWithTheme = styles(theme);

  const constructStyles = (styleObject) => {
    let constructedStyle = styleObject;
    const styleEntries = Object.entries(styleObject);

    for (const [key, value] of styleEntries) {
      if (typeof value === "object") {
        const styleValue = constructStyles(value);
        constructedStyle = { ...styleObject, [key]: styleValue };
      } else if (typeof value === "function") {
        constructedStyle = { ...styleObject, [key]: value(props) };
      }
    }

    return constructedStyle;
  };

  const completedStyle = constructStyles(stylesWithTheme);
  return completedStyle;
};

export default makeStyles;
