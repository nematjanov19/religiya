import "./App.scss";
import { QuestionReligiya } from "../src/data/data";
import { useState } from "react";

function App() {
  return (
    <section>
      <div className="vopros">
        {QuestionReligiya.map((e, i) => (
          <>
            <div className="flex">
              <div>
              <h5>{e.question}</h5>
              <span key={i}>
                <p>{e.answers.positive}</p>
              </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default App;
