import React from "react";
import { Button } from "../ButtonElement";

import {
  DiscoverContainer,
  DiscoverWrapper,
  DiscoverRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./DiscoverElements";

const Discover = ({
  lightBg,
  lightText,
  id,
  imgStart,
  topLine,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <DiscoverContainer ligthBg={lightBg} id={id}>
        <DiscoverWrapper>
          <DiscoverRow imgStart={imgStart}>
            <Column2>
              <ImgWrap>
                <Img src={img.default} alt={alt} />
              </ImgWrap>
            </Column2>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrap>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
          </DiscoverRow>
        </DiscoverWrapper>
      </DiscoverContainer>
    </>
  );
};

export default Discover;
