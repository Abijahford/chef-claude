import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Instructions from "./components/Instructions.jsx";
export default function App() {
  const [resume, setResume] = React.useState(false);
  function getResume() {
    setResume((prevResume) => !prevResume);
  }
  return (
    <>
      {!resume && <Instructions getResume={getResume} />}
      <Header getResume={getResume} />
      <Main />
    </>
  );
}
