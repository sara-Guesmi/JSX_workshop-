import React from "react";
import "./App.css";

import JSXImage from "./assets/jsx-src.png";

function App() {
  const name = "Hello react";
  const myStyle = {
    color: "blue",
  };

  return (
    /**
     * JSX code
     */
    <div className="App">
      <p onClick={() => alert("hello")} className="test-paragraph">
        Hello paragraph
      </p>

      {/* use expression to view data */}
      <p style={{ color: "red", margin: "0 30%", backgroundColor: "black" }}>
        {name}
      </p>
      <p style={myStyle}>{2 * 5}</p>

      {/* Closing tags */}
      <hr style={{ width: "50%" }} />

      {/* Warning without the "alt" prop of "img" tag */}
      <img
        className="react-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        alt="logo react"
      />
      <br />

      {/* importing images */}
      <img src="jsx.png" alt="" style={{ width: "30%" }} />
      <br />
      <br />
      <br />
      <img src={JSXImage} alt="" style={{ width: "30%" }} />
    </div>

    /**
     * JSX Code => JS code
     */
    // <div className= "App">
    //   <p className= "test-paragraph">Hello paragraph</p>
    // </div>

    // JS code
    // React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement(
    //     'p',
    //     { className: "test-paragraph" },
    //   ),
    //   "Hello paragraph"
    // )
  );
}

export default App;
