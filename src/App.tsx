import React from "react";
import { TextField } from "./components";

const App: React.FC = () => {
  const [value, setValue] = React.useState("");
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        // value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        variant="contained"
      />
    </div>
  );
};

export default App;
