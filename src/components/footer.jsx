import React from 'react';
import styled from 'styled-components';
import footerLogo from '../assets/images/footerLogo.svg';
import { SITE_COPY } from '../constants/siteCopy';

const F = SITE_COPY.footer.desktop;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterLogo src={footerLogo} alt="footer logo" />
      <FooterTextArea>
        <FooterTextWrap>
          <FooterText>
            {F.companyLead} &nbsp;&nbsp;&nbsp;|
          </FooterText>
          <FooterText>{F.addressLine}</FooterText>
        </FooterTextWrap>
        <FooterTextWrap>
          <FooterText>
            {F.bizRegLabel} {F.bizReg}
          </FooterText>
          <FooterText>
            {F.ceoLabel} {F.ceo}
          </FooterText>
        </FooterTextWrap>
        <FooterTextWrap>
          <Frame6>
            <FooterText>{F.telLabel}</FooterText>
            <FooterText>{F.tel}</FooterText>
          </Frame6>
          <Frame6>
            <FooterText>{F.emailLabel}</FooterText>
            <FooterText>{F.email}</FooterText>
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
