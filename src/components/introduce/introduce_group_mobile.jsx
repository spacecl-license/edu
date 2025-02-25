import React from "react";
import styled from "styled-components";
import organization1 from "../../assets/images/organization_mobile.svg";
import organization2 from "../../assets/images/organization2_mobile.svg";

export default function IntroduceGroupMobile() {
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
            <div>
              <BlueCircle>
                교육기획
              </BlueCircle>
              <CircleLine>
                기술수요<br/>
                기업협약<br/>
                역량진단
              </CircleLine>
            </div>
            <div>
              <CircleLine>
                과정기획<br/>
                과정설계
              </CircleLine>
              <CircleLine>
                과정평가<br/>
                개선관리
              </CircleLine>
            </div>
          </OrganiWrapper>

          <OrganiWrapper style={{ width: '312px', height: '598px', gap: '1.5rem'}}>
            <DubbleBox>
              <div>
                <BlueCircle>
                  교육운영
                </BlueCircle>
                <CircleLine>
                  모집홍보<br/>
                  상담관리
                </CircleLine>
              </div>
              <div>
                <CircleLine>
                  운영관리<br/>
                  행정관리
                </CircleLine>
                <CircleLine>
                  학습관리<br/>
                  평가관리
                </CircleLine>
              </div>
            </DubbleBox>
            <DubbleBox>
              <div>
                <BlueCircle>
                  취업지원
                </BlueCircle>
                <CircleLine>
                  진로상담<br/>
                  취업특강
                </CircleLine>
              </div>
              <div>
                <CircleLine>
                  기업발굴<br/>
                  취업지원
                </CircleLine>
                <CircleLine>
                  이직지원<br/>
                  사후관리
                </CircleLine>
              </div>
            </DubbleBox>
          </OrganiWrapper>

          <OrganiWrapper>
            <div>
              <BlueCircle>
                교ㆍ강사
              </BlueCircle>
              <CircleLine>
                교수매체<br/>
                과정설계
              </CircleLine>
            </div>
            <div>
              <CircleLine>
                평가관리<br/>
                보강관리
              </CircleLine>
              <CircleLine>
                프로젝트<br/>
                기술멘토
              </CircleLine>
            </div>
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
	height: 1150px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 30px 0px rgba(82, 101, 149, 0.1);
  border-radius: 24px;
  width: 312px;
  height: 620px;
`;

const DubbleBox = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
  }
`;

const OrganiWrapper = styled.div`
	width: 312px;
	height: 312px;
	box-shadow: 0px 4px 30px 0px rgba(82, 101, 149, 0.1);
	background-color: #E5ECFF;
	border-radius: 40px;
  display: flex;
  flex-direction: column;
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
	font-size: 1rem;
	font-family: Pretendard, sans-serif;
	font-weight: 600;
  background-color: #0A3177;
  height: 40px;
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