import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

export const AnagramForm = ({ onNewAnagram }) => {
  const [stringA, setStringA] = useState("");
  const [stringB, setStringB] = useState("");

  return (
    <Form>
      <Form.Field>
        <Input
          placeholder="enter first string value"
          value={stringA}
          onChange={(e) => setStringA(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="enter second string value"
          value={stringB}
          onChange={(e) => setStringB(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Button
          onClick={async () => {
            const anagram = { stringA, stringB };
            const response = await fetch("/anagrams", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(anagram),
            });
            if (response.ok) {
              console.log(response);
              alert(
                "The strings are anagrams and have been added to the database"
              );
              onNewAnagram(anagram);
            } else {
              console.log(response);
              alert(
                "The strings are not anagrams. Also, please make sure the strings only contain a-z letters"
              );
            }
          }}
        >
          check and submit
        </Button>
      </Form.Field>
    </Form>
  );
};
