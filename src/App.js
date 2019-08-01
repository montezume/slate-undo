import React from "react";
import styled from "styled-components";
import Editor from "./Editor";

const Wrapper = styled.div`
  margin: 8px;
`;

function App() {
  return (
    <Wrapper>
      <Editor />
    </Wrapper>
  );
}

export default App;
