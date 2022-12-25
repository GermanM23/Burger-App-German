import styled from "styled-components";

function Link() {
  return (
    <LinksWrapper>
      <LinkStyled></LinkStyled>
      <LinkStyled></LinkStyled>
      <LinkStyled></LinkStyled>
      <LinkStyled></LinkStyled>
      <LinkStyled></LinkStyled>
    </LinksWrapper>
  );
}
const LinksWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
});
const LinkStyled = styled.div({
  backgroundColor: "#E7EFD6",
  padding: "20px 30px 20px 30px",
  maxWidth: "36px",
  marginRight: "20px",
});

export default Link;
