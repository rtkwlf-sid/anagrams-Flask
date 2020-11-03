import React from "react";
import { List, Header } from "semantic-ui-react";

export const Anagrams = ({ anagrams }) => {
  return (
    <List ordered>
      <Header as="h1" textAlign="center">
        Most Popular Anagram Requests
      </Header>
      {anagrams.map((anagram) => {
        return (
          <List.Item key={anagram.stringA}>
            <Header as="h2">{anagram.stringA}</Header>
            <Header as="h4">{anagram.stringB}</Header>
          </List.Item>
        );
      })}
    </List>
  );
};
