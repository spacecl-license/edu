import React from 'react';
import styled from 'styled-components';
import footerLogo from '../assets/images/footerLogo.svg';
import { SITE_COPY } from '../constants/siteCopy';

const F = SITE_COPY.footer.mobile;

export default function FooterMobile() {
  return (
    <FooterWrapper>
      <FooterLogo src={footerLogo} alt="footer logo" />
      <FooterTextArea>
        <FooterTextWrap>
          <FooterText>{F.companyLine}</FooterText>
        </FooterTextWrap>
        <FooterTextWrap>
          <FooterText>
            {F.addressLine1} <br /> {F.addressLine2}
          </FooterText>
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
