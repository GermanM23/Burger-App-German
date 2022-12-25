import styled from "styled-components";
import { TextStyled } from "../index";
import BlogElement from "./BlogElements";

function Blog() {
  return (
    <BlogStyled>
      <TextStyled>Blog</TextStyled>
      <BlogElement />
      <BlogElement />
      <BlogElement />
      <BlogElement />
    </BlogStyled>
  );
}
const BlogStyled = styled.div({
  backgroundColor: "#D9D9D9",
  marginTop: "20px",
  padding: "20px",
  maxWidth: "810px",
  width: "60%",
});

export default Blog;
