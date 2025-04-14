import React from 'react';
import styled from 'styled-components';
import footerLogo from '../assets/images/footerLogo.svg';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterLogo src={footerLogo} alt="footer logo" />
      <FooterTextArea>
        <FooterTextWrap>
          <FooterText>(주)스페이스씨엘 &nbsp;&nbsp;&nbsp;|</FooterText>
          <FooterText>
            서울특별시 금천구 가산동 60-26 가산퍼블릭 제B동 2015호 2016호
            (주)스페이스씨엘
          </FooterText>
        </FooterTextWrap>
        <FooterTextWrap>
          <FooterText>사업자 등록번호 : 343-81-02656</FooterText>
          <FooterText>대표 : 박희원</FooterText>
        </FooterTextWrap>
        <FooterTextWrap>
          <Frame6>
            <FooterText>Tel</FooterText>
            <FooterText>02-6958-8204</FooterText>
          </Frame6>
          <Frame6>
            <FooterText>E-mail</FooterText>
            <FooterText>spacecl.track@gmail.com</FooterText>
          </Frame6>
        </FooterTextWrap>
      </FooterTextArea>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgb(60, 60, 60);
  display: flex;
  align-items: center;
  gap: 10rem;
  padding-left: 22.5rem;
  margin-top: 5rem;
`;

const FooterLogo = styled.img`
  width: 72px;
  height: 92px;
`;

const FooterTextArea = styled.div`
  width: 700px;
  height: 84px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex: none;
  gap: 6px;
  box-sizing: border-box;
`;

const FooterTextWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 16px;
  box-sizing: border-box;
`;

const FooterText = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 300;
  line-height: 150%;
  text-align: left;
`;

const Frame6 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  flex: none;
  gap: 10px;
  box-sizing: border-box;
`;
