import React from "react";
import "./App.css";

import JSXImage from "./assets/jsx-src.png";

function App() {
  const name = "Hello react";
  const myStyle = {
    color: "blue",
  };
  const products = ["product1", "product2", "product3", "product4"];

  return (
    //  How Babel convert the code
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
    /**
     * JSX code
     */
    <div className="App">
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
      {/* impaired tags are closed */}
      <br />

      {/* importing images */}
      <img src="jsx.png" alt="" style={{ width: "30%" }} />
      <br />
      <br />
      <br />
      <img src={JSXImage} alt="" style={{ width: "30%" }} />
      {/* ----------------------------- */}
      {/* event in JS */}
      <p onClick={() => alert("hello")} className="test-paragraph">
        Hello paragraph
      </p>
      {/* condition in JSX */}
      <h2>{true ? "Hi" : "Bye"}</h2>
      {/* operator in JSX */}
      {true && (
        <button>This button will appear when the condition is true</button>
      )}
      {/* Loop over an array in JSX */}
      {products.map((el) => (
        // function always return 1 element wrapped in a div
        <div>
          <h2>{el}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            delectus ut dolore sed praesentium sunt perferendis saepe.
            Doloremque, et libero! Ad nobis, culpa iste placeat totam deserunt
            cupiditate omnis modi.
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
