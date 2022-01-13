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

const useStyles = makeStyles((theme: Theme) => ({
  rootContainer: {
    position: "relative",
  },
  inputField: {
    fontSize: 15,
    height: 30,
    borderRadius: 3,
    border: (props: any) =>
      props.variant === "contained" ? "1px solid black" : "3px solid blue",
    "&:hover": {
      color: (props: any) => (props.variant === "contained" ? "red" : "blue"),
    },
  },
  inputLabel: {
    position: "absolute",
    top: "calc(50% - 10px)",
    left: 2.8,
    fontSize: 15,
    color: theme.palette.primary.main,
    backgroundColor: (props: any) =>
      props.variant === "contained" ? "none" : "transparent",
  },
}));

const TextField: React.FC<Props> = (props) => {
  const { value, onChange, ...others } = props;

  const classes = useStyles(props);

  return (
    <div css={css(classes.rootContainer)}>
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
