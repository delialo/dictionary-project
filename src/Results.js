import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  return (
    <div className="Results">
      <h1 className="m-5 fw-bold">{props.results.word}</h1>
      <strong>Phonetics: </strong>
      {props.results.phonetic && <Phonetic phonetic={props.results.phonetic} />}

      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
