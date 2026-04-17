import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning m-5">
      - - - - -<p>{props.meaning.partOfSpeech}</p>
      <div>
        <strong>Definition: </strong>
        <h5>{props.meaning.definition}</h5>
        {props.meaning.example && (
          <p>
            <strong>Example: </strong>
            <em>"{props.meaning.example}"</em>
          </p>
        )}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
