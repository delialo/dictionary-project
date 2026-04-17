import React from "react";

export default function Phonetic(props) {
  if (!props.phonetic) {
    return null;
  }

  return (
    <div className="Phonetic">
      <span className="me-3">{props.phonetic}</span>
    </div>
  );
}
