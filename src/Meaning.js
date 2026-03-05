import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p>{props.meaning.partOfSpeech}</p>
      <h5>{props.meaning.definition}</h5>

      {props.meaning.example && <em>"{props.meaning.example}"</em>}
    </div>
  );
}
