import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }
  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "f56ddo443f56b76637t0be5d36d0503a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    //documentation: https://www.shecodes.io/learn/apis/images
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Type your word here..."
          autoFocus={true}
        />
        <button type="submit">Search</button>
      </form>
      <Photos photos={photos} />
      <Results results={results} />
    </div>
  );
}
