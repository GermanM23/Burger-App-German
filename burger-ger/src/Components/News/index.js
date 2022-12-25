import styled from "styled-components";
import { TextStyled } from "../index";
import NewsElement from "./newselement";

function News() {
  return (
    <NewsStyled>
      <TextStyled>News</TextStyled>
      <NewsElement />
      <NewsElement />
      <NewsElement />
    </NewsStyled>
  );
}
const NewsStyled = styled.div({
  backgroundColor: "#D9D9D9",
  marginTop: "20px",
  padding: "20px",
  maxWidth: "300px",
  width: "30%",
});

export default News;
