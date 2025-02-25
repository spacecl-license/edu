import React from "react";
import styled from "styled-components";
import company1 from "../../../assets/images/company1.svg";
import company2 from "../../../assets/images/company2.svg";
import company3 from "../../../assets/images/company3.svg";
import company4 from "../../../assets/images/company4.svg";
import company5 from "../../../assets/images/company5.svg";
import company6 from "../../../assets/images/company6.svg";
import company7 from "../../../assets/images/company7.svg";
import company8 from "../../../assets/images/company8.svg";
import company9 from "../../../assets/images/company9.svg";
import company10 from "../../../assets/images/company10.svg";
import company11 from "../../../assets/images/company11.svg";
import company12 from "../../../assets/images/company12.svg";
import company13 from "../../../assets/images/company13.svg";
import company14 from "../../../assets/images/company14.svg";

export default function SupportCooperateMobile() {
  return (
    <Wrapper>
      <Cooperate>
        <TitleWrapper>
          <Company>
            협력기업
          </Company>
          <Partnership>
            PARTNERSHIP
          </Partnership>
        </TitleWrapper>
        <CompanyImages>
          <Image src={company1} alt="company1"/>
          <Image src={company2} alt="company2"/>
          <Image src={company3} alt="company3"/>
          <Image src={company4} alt="company4"/>
          <Image src={company5} alt="company5"/>
          <Image src={company6} alt="company6"/>
          <Image src={company7} alt="company7"/>
          <Image src={company8} alt="compan8"/>
          <Image src={company9} alt="company9"/>
          <Image src={company10} alt="company10"/>
          <Image src={company11} alt="company11"/>
          <Image src={company12} alt="company12"/>
          <Image src={company13} alt="company13"/>
          <Image src={company14} alt="company14"/>
        </CompanyImages>
      </Cooperate>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 4rem;
`;

const Cooperate = styled.div`
	width: 100%;
	height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
	width: 59px;
	height: 0px;
	border-top: solid 1px rgb(60, 60, 60);
	transform: rotate(0deg);
  margin-top: 2rem;
`;

const CompanyImages = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 52px;
  overflow: hidden;
  margin-top: 4rem;
`;

const Image = styled.img`
  height: 40px;
	object-fit: cover;
`;

const Company = styled.span`
	color: rgb(34, 34, 34);
	text-overflow: ellipsis;
	font-size: 1.25rem;
	font-family: Pretendard, sans-serif;
	font-weight: 600;
	line-height: 150%;
	text-align: center;
`;

const Partnership = styled.span`
	color: rgb(210, 215, 225);
	text-overflow: ellipsis;
	font-size: 1rem;
	font-family: Pretendard, sans-serif;
	font-weight: 400;
	line-height: 150%;
	text-align: center;
`;
