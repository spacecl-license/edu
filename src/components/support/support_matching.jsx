import React from 'react';
import styled from 'styled-components';
import backImage2 from '../../assets/images/backImage2.png';
import backImage3 from '../../assets/images/backImage3.png';
import backImage4 from '../../assets/images/backImage4.png';
import StepIcon1 from '../../assets/images/step-icon1.png';
import StepIcon2 from '../../assets/images/step-icon2.png';
import StepIcon3 from '../../assets/images/step-icon3.png';
import StepIcon4 from '../../assets/images/step-icon4.png';

export default function SupportMatching() {
  return (
    <Wrapper>
      <BackImage src={backImage2} left="0%" top="150%" />
      <BackImage src={backImage3} right="0%" top="190%" />
      <BackImage src={backImage4} left="85%" top="100%" />
      <BackImage src={backImage4} left="20%" top="190%" />
      <TitleWrapper>
        <Title>연수생-구인처 수요 매칭</Title>
        <CircleLine />
      </TitleWrapper>
      <GroupWrapper>
        <Group>
          <StepWrap>
            <StepTitle>01</StepTitle>
            <StepText>STEP</StepText>
          </StepWrap>
          <StepImage src={StepIcon1}></StepImage>
          <CircleTitle>연수생 역량관리</CircleTitle>
          <Divider />
          <CircleText>
            기업요구 역량 스킬업
            <br />
            연수생 진로 취업상담
            <br />
            기업면담, 구인요구분석
          </CircleText>
        </Group>
        <Group>
          <StepWrap>
            <StepTitle>02</StepTitle>
            <StepText>STEP</StepText>
          </StepWrap>
          <StepImage src={StepIcon2}></StepImage>
          <CircleTitle>취업매칭 (면접)</CircleTitle>
          <Divider />
          <CircleText>
            회사설명회, 정보안내
            <br />
            수요기업-연수생 매칭
            <br />
            면접진행, 집중 스케줄링
          </CircleText>
        </Group>
        <Group>
          <StepWrap>
            <StepTitle>03</StepTitle>
            <StepText>STEP</StepText>
          </StepWrap>
          <StepImage src={StepIcon3}></StepImage>
          <CircleTitle>결과관리</CircleTitle>
          <Divider />
          <CircleText>
            취업자/미취업자 관리
            <br />
            취업조건, 입직지원
            <br />
            결과 피드백
          </CircleText>
        </Group>
        <Group>
          <StepWrap>
            <StepTitle>04</StepTitle>
            <StepText>STEP</StepText>
          </StepWrap>
          <StepImage src={StepIcon4}></StepImage>
          <CircleTitle>성과관리</CircleTitle>
          <Divider />
          <CircleText>
            취업자 업무적응 지원
            <br />
            기업 네트워크 관리
            <br />
            취업자 사후관리
          </CircleText>
        </Group>
      </GroupWrapper>
    </Wrapper>
  );
}

const BackImage = styled.img`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  padding-top: 5rem;
  position: relative;
  height: 300px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const GroupWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 90%;
  z-index: 2;
`;

const Title = styled.span`
  color: rgb(34, 34, 34);
  font-size: 32px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: center;
`;

const Group = styled.div`
  width: 277px;
  height: 320px;
  background-color: #e6f4fa; /* 각 카드 배경색 */
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  position: relative;
  padding: 0px 40px;
  gap: 10px;
  padding-top: 30px;
`;

const StepWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: #2674ff; /* STEP 배경색 */
  position: absolute;
  top: -40px;
`;

const StepTitle = styled.div`
  color: #ffffff; /* 제목 텍스트 색상 */
  font-size: 30px;
  font-family: Pretendard, sans-serif;
  font-weight: 800;
  line-height: 30px;
  text-align: center;
`;

const StepText = styled.div`
  color: #ffffff; /* 제목 텍스트 색상 */
  font-size: 14px;
  font-family: Pretendard, sans-serif;
  font-weight: 800;
  line-height: 14px;
  text-align: center;
`;
const CircleTitle = styled.span`
  color: #1a3a5f; /* 제목 텍스트 색상 */
  font-size: 22px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  line-height: 33px;
  text-align: center;
`;

const StepImage = styled.img`
  width: 80px;
  height: 80px;
`;

const CircleText = styled.span`
  color: #333; /* 내용 텍스트 색상 */
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 27.2px;
  text-align: center;
  white-space: pre-line;
`;

const CircleLine = styled.div`
  width: 59px;
  height: 0px;
  border-top: solid 1px rgb(60, 60, 60);
  transform: rotate(0deg);
  transform-origin: top left;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff66;
`;
