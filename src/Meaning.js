import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning m-5">
      - - - - -<p>{props.meaning.partOfSpeech}</p>
      <div>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definition}
        </p>
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
