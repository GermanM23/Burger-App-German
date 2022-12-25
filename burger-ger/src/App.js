import React from "react";
import "./index.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Blog from "./Components/Blog";
import News from "./Components/News";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <Banner />
      <MainWrap>
        <Blog />
        <News />
      </MainWrap>
    </Container>
  );
}

const Container = styled.div({
  width: "100%",
  maxWidth: "1177px",
  marginLeft: "auto",
  marginRight: "auto",
});

const MainWrap = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

export default App;
