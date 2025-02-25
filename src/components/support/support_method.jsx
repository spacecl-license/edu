import React from "react";
import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg";

export default function SupportMethod() {
  return (
    <Wrapper>
      <GroupWrapper>
        <TitleWrapper>
          <Title>
            연수생 취업 지원
          </Title>
          <SubTitle>
            맞춤형 교육으로 글로벌 취업의 첫걸음!
          </SubTitle>
        </TitleWrapper>

        <Groups>
          <Arrow1 src={arrow} />
          <Arrow2 src={arrow} />
          <Arrow3 src={arrow} />
          <Arrow4 src={arrow} />
          <Arrow5 src={arrow} />
          <Group>
            <Rectangle>
              <StepTitle>
                1:1 취업상담
              </StepTitle>
              <Step>
                개별 취업 희망 조사<br/>
                사전 채용기업 안내<br/>
                구체적인 진로 상담
              </Step>
            </Rectangle>
            <Rectangle>
              <StepTitle>
                이력서 작성
              </StepTitle>
              <Step>
                한글 / 일문이력서 작성<br/>
                IT/일본어 스킬시트 작성<br/>
                이력서 클리닉
              </Step>
            </Rectangle>
            <Rectangle>
              <StepTitle>
                모의 면접
              </StepTitle>
              <Step>
                사전 인터뷰 실습<br/>
                모의 면접 스피치
              </Step>
            </Rectangle>
          </Group>
          <Group>
          <Rectangle>
              <StepTitle>
                사후관리
              </StepTitle>
              <Step>
                취업자 현지 사후관리<br/>
                경력 / 이직 관리
              </Step>
            </Rectangle>
            <Rectangle>
              <StepTitle>
                출국 / 비자안내
              </StepTitle>
              <Step>
                합격자 개별 출국일정 안내<br/>
                취업비자 수속 안내
              </Step>
            </Rectangle>
            <Rectangle>
              <StepTitle>
                면접 진행
              </StepTitle>
              <Step>
                구인기업 설명회<br/>
                구인기업 면접 매칭<br/>
                희망 기업별 면접
              </Step>
            </Rectangle>  
          </Group>
        </Groups>
      </GroupWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const GroupWrapper = styled.div`
	width: 100%;
	height: 830px;
	background-color: #F8F9FA;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const Groups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
`;

const Group = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const Title = styled.span`
	color: #0A3177;
	text-overflow: ellipsis;
	font-size: 32px;
	font-family: Pretendard, sans-serif;
	font-weight: 600;
	line-height: 150%;
	text-align: center;
`;

const SubTitle = styled.span`
	color: #0A3177;
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Pretendard, sans-serif;
	font-weight: 400;
	line-height: 150%;
	text-align: center;
`;

const Rectangle = styled.div`
	width: 384px;
	height: 194px;
	background-color: white;
	border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(210, 215, 225);
  padding-top: 1rem;
`;

const Step = styled.span`
	color: rgb(59, 66, 79);
	font-size: 20px;
	font-family: Pretendard, sans-serif;
	font-weight: 400;
	text-align: center;
  display: flex;
  align-items: center;
  flex: 1;
`;

const StepTitle = styled.span`
	color: white;
	font-size: 1.25rem;
	font-family: Pretendard, sans-serif;
	font-weight: 600;
  width: 336px;
	height: 46px;
	background-color: #0A3177;
	border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow1 = styled.img`
	width: 68px;
	height: 68px;
	position: absolute;
	left: 360px;
	top: 70px;
`;

const Arrow2 = styled.img`
	width: 68px;
	height: 68px;
	position: absolute;
	left: 765px;
	top: 70px;
`;

const Arrow3 = styled.img`
	width: 68px;
	height: 68px;
	position: absolute;
	left: 970px;
	top: 170px;
	transform: rotate(90deg);
`;

const Arrow4 = styled.img`
	width: 68px;
	height: 68px;
	position: absolute;
	left: 765px;
	top: 290px;
	transform: rotate(-180deg);
`;

const Arrow5 = styled.img`
	width: 68px;
	height: 68px;
	position: absolute;
  transform: rotate(-180deg);
	left: 360px;
	top: 290px;
`;