import React from "react";
import styled from "styled-components";
import footerLogo from "../assets/images/footerLogo.svg";

export default function FooterMobile() {
  return (
      <FooterWrapper>
        <FooterLogo src={footerLogo} alt="footer logo"/>
        <FooterTextArea>
          <FooterTextWrap>
            <FooterText>
              (주)스페이스씨엘
            </FooterText>
          </FooterTextWrap>
          <FooterTextWrap>
            <FooterText>
              서울시 금천구 가산동 459-14 <br/>
              현대타워가산 DK 512호, 513호
            </FooterText>
          </FooterTextWrap>
          <FooterTextWrap>
            <FooterText>
              사업자 등록번호 : 343-81-02656
            </FooterText>
            <FooterText>
              대표 : 박희원
            </FooterText>
          </FooterTextWrap>
          <FooterTextWrap>
            <Frame6>
              <FooterText>
                Tel
              </FooterText>
              <FooterText>
                02-6958-8204
              </FooterText>
            </Frame6>
            <Frame6>
              <FooterText>
                E-mail
              </FooterText>
              <FooterText>
                spacecl.track@gmail.com
              </FooterText>
            </Frame6>
          </FooterTextWrap>
        </FooterTextArea>
      </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
	width: 100%;
	height: 288px;
	display: flex;
	justify-content: center;
	gap: 2rem;
	background-color: rgb(60, 60, 60);
	padding: 2rem 1rem 1rem 1rem;
  margin-top: 3rem;
`;

const FooterLogo = styled.img`
	width: 72px;
	height: 92px;
`;

const FooterTextArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 230px;
	height: 84px;
`;

const FooterTextWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const FooterText = styled.span`
	color: white;
	font-size: 0.9rem;
	font-family: Pretendard, sans-serif;
	font-weight: 300;
	line-height: 150%;
	text-align: left;
`;

const Frame6 = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: 10px;
	box-sizing: border-box;
`;