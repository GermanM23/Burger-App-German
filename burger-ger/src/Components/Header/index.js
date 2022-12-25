import styled from "styled-components";
import Logo from "./Logo";
import Link from "./Links";

function Header() {
  return (
    <HeaderStyled>
      <Logo></Logo>
      <p>Blog name</p>
      <Link></Link>
    </HeaderStyled>
  );
}
const HeaderStyled = styled.div({
  backgroundColor: "#D9D9D9",
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "20px",
  paddingBottom: "20px",
  marginTop: "20px",
});

export default Header;
