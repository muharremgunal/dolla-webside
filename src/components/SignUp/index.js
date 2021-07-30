import React from "react";
import { Button } from "../ButtonElement";

import {
  SignUpContainer,
  SignUpWrapper,
  SignUpRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  JoinLine,
  Heading,
  SubTitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./SignElements";

const SignUp = ({
  joinLine,
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
      <SignUpContainer ligthBg={lightBg} id={id}>
        <SignUpWrapper>
          <SignUpRow imgStart={imgStart}>
            <Column2>
              <ImgWrap>
                <Img src={img.default} alt={alt} />
              </ImgWrap>
            </Column2>
            <Column1>
              <TextWrapper>
                <JoinLine>{joinLine}</JoinLine>
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
          </SignUpRow>
        </SignUpWrapper>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
