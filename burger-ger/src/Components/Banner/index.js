import styled from "styled-components";
import { TextStyled } from "../index";

function Banner() {
  return (
    <BannerStyled>
      <TextStyled>Full-width banner image</TextStyled>
    </BannerStyled>
  );
}
const BannerStyled = styled.div({
  backgroundColor: "#D9D9D9",
  marginTop: "20px",
  padding: "50px 0 50px 0",
});

export default Banner;
