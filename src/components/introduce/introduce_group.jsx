import React from "react";
import styled from "styled-components";
import organization1 from "../../assets/images/organization1.svg";
import organization2 from "../../assets/images/organization2.svg";

export default function IntroduceGroup() {
  return (
    <Wrapper>
      <OrganiWrap>
        <TitleWrapper>
          <Title>
            조직도
          </Title>
          <Line/>
        </TitleWrapper>
        <Organization src={organization1} />
      </OrganiWrap>

      <BoxWrapper>
        <Box1>
          <OrganiWrapper>
            <BlueCircle>
              교육기획
            </BlueCircle>
            <CircleLine>
              기술수요<br/>
              기업협약<br/>
              역량진단
            </CircleLine>
            <CircleLine>
              과정기획<br/>
              과정설계
            </CircleLine>
            <CircleLine>
              과정평가<br/>
              개선관리
            </CircleLine>
          </OrganiWrapper>

          <OrganiWrapper style={{ width: '588px', height: '369px', flexDirection: 'column'}}>
            <div>
              <BlueCircle>
                교육운영
              </BlueCircle>
              <CircleLine>
                모집홍보<br/>
                상담관리
              </CircleLine>
              <CircleLine>
                운영관리<br/>
                행정관리
              </CircleLine>
              <CircleLine>
                학습관리<br/>
                평가관리
              </CircleLine>
            </div>
            <div>
              <BlueCircle>
                취업지원
              </BlueCircle>
              <CircleLine>
                진로상담<br/>
                취업특강
              </CircleLine>
              <CircleLine>
                기업발굴<br/>
                취업지원
              </CircleLine>
              <CircleLine>
                이직지원<br/>
                사후관리
              </CircleLine>
            </div>
          </OrganiWrapper>

          <OrganiWrapper>
            <BlueCircle>
              교ㆍ강사
            </BlueCircle>
            <CircleLine>
              교수매체<br/>
              과정설계
            </CircleLine>
            <CircleLine>
              평가관리<br/>
              보강관리
            </CircleLine>
            <CircleLine>
              프로젝트<br/>
              기술멘토
            </CircleLine>
          </OrganiWrapper>
        </Box1>
        
        <Box2>
          <OrgText2>
            조직도
          </OrgText2>
          <Organization2 src={organization2} />
        </Box2>
      </BoxWrapper>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

const OrganiWrap = styled.div`
	width: 100%;
	height: 814px;
	background-color: rgb(248, 249, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 7rem;
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 30px 0px rgba(82, 101, 149, 0.1);
  border-radius: 24px;
`;

const OrganiWrapper = styled.div`
	width: 588px;
	height: 200px;
	box-shadow: 0px 4px 30px 0px rgba(82, 101, 149, 0.1);
	background-color: #E5ECFF;
	border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
  }
`;

const Organization = styled.img`
`;

const Title = styled.span`
	color: rgb(60, 60, 60);
	font-size: 2rem;
	font-family: Pretendard, sans-serif;
	font-weight: 600;
	text-align: center;
`;

const Organization2 = styled.img`
	width: 533px;
	height: 626px;
`;

const OrgText2 = styled.span`
	color: white;
	font-size: 18px;
	font-family: Pretendard, sans-serif;
	font-weight: 600;
  background-color: #0A3177;
  height: 64px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlueCircle = styled.span`
  width: 130px;
	height: 130px;
	color: white;
	font-size: 1rem;
	font-family: Pretendard, sans-serif;
	font-weight: 500;
	background-color: #0A3177;
	border-radius: 130px / 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleLine = styled.span`
  width: 130px;
	height: 130px;
	background-color: white;
	border-radius: 130px / 130px;
  border: solid 1px rgb(38, 116, 255);
	color: rgb(38, 116, 255);
	font-size: 1rem;
	font-family: Pretendard, sans-serif;
	font-weight: 500;
	text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
	width: 59px;
	height: 0px;
	border-top: solid 1px rgb(60, 60, 60);
	transform: rotate(0deg);
`;