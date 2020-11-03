import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import { AnagramForm } from "./components/AnagramForm";
import { Anagrams } from "./components/Anagrams";

function App() {
  const [anagrams, setAnagrams] = useState([]);

  useEffect(() => {
    fetch("/popular").then((response) =>
      response.json().then((data) => {
        setAnagrams(data.anagrams);
      })
    );
  }, []);

  return (
    <Container style={{ marginTop: 40 }}>
      <AnagramForm
        onNewAnagram={(anagram) =>
          fetch("/popular").then((response) =>
            response.json().then((data) => {
              setAnagrams(data.anagrams);
            })
          )
        }
      />
      <Anagrams anagrams={anagrams} />
    </Container>
  );
}

export default App;
