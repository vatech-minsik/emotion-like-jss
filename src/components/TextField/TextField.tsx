import React from "react";
import { Theme, css } from "@emotion/react";
import makeStyles from "../../styles";

interface Props {
  value?: string | number | undefined;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  variant?: string;
}

// const styles = {
//   RootContainer: css({
//     position: "relative",
//   }),
//   inputField: css({
//     fontSize: 15,
//     height: 30,
//     borderRadius: 3,
//     border: "1px solid black",
//   }),
//   inputLabel: css({
//     position: "absolute",
//     top: "calc(50% - 10px)",
//     left: 2.6,
//     fontSize: 15,
//   }),
// };

const useStyles = makeStyles((theme: Theme) => ({
  RootContainer: {
    position: "relative",
  },
  inputField: {
    fontSize: 15,
    height: 30,
    borderRadius: 3,
    border: "1px solid black",
    "&:hover": {
      color: "red",
    },
  },
  inputLabel: {
    position: "absolute",
    top: "calc(50% - 10px)",
    left: 2.64,
    fontSize: 15,
    color: theme.palette.primary.main,
    backgroundColor: (props: any) =>
      props.variant === "contained" ? "none" : "transparent",
  },
}));

const TextField: React.FC<Props> = (props) => {
  const { value, onChange, ...others } = props;

  const classes = useStyles(props);

  console.log(classes);

  return (
    <div css={css(classes.RootContainer)}>
      <label>
        <input
          css={css(classes.inputField)}
          value={value}
          onChange={onChange}
          {...others}
        />
        <span css={css(classes.inputLabel)}>Hello</span>
      </label>
    </div>
  );
};

export default TextField;
