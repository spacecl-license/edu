import React from 'react';
import styled from 'styled-components';
import trackTime1 from '../../assets/images/trackTime1.png';
import trackTime2 from '../../assets/images/trackTime2.png';
import trackTime3 from '../../assets/images/trackTime3.png';
import trackTime4 from '../../assets/images/trackTime4.png';
import trackTime5 from '../../assets/images/trackTime5.png';
import trackTime6 from '../../assets/images/trackTime6.png';
import trackTime7 from '../../assets/images/trackTime7.png';
import trackTime8 from '../../assets/images/trackTime8.png';
import trackTime9 from '../../assets/images/trackTime9.png';

export default function Track2Time() {
  return (
    <Wrapper>
      <Line />
      <Group>
        <Wrap>
          <EduTime1>IT Programming : 488h</EduTime1>
          <BoxWrap>
            <Box>
              <Image src={trackTime1} />
              <EduTimeText>
                ⦁ JAVA, Python 프로그래밍
                <br />
                ⦁ DB구현, FE(HTML/CSS), jQuery
                <br />
                ⦁ 라이브러 실습 및 활용
                <br />⦁ 세미 프로젝트(시각화 구현)
              </EduTimeText>
              <TimeBox>256h</TimeBox>
            </Box>

            <Box>
              <Image src={trackTime2} />
              <EduTimeText>
                ⦁ 클라우드 배포 서비스 활용
                <br />
                ⦁ AWS, Vue.js, Script, JDBC
                <br />⦁ 스프링 Boot
                <br />
                <br />
              </EduTimeText>
              <TimeBox>164h</TimeBox>
            </Box>

            <Box>
              <Image src={trackTime3} />
              <EduTimeText>
                ⦁ 파이널 실무 프로젝트
                <br />
                ⦁ 산업융합 WEB/APP 모델링
                <br />⦁ 프로젝트 발표(Demo-Day)
                <br />
                <br />
              </EduTimeText>
              <TimeBox>68h</TimeBox>
            </Box>
          </BoxWrap>
        </Wrap>

        <Wrap>
          <EduTime1>일본어 : 514h</EduTime1>
          <BoxWrap>
            <Box>
              <Image src={trackTime4} />
              <EduTimeText>
                ⦁ 일본어 기초어휘 및 문형표현
                <br />
                ⦁ 초급(어휘, 독해, 청해, 작문)
                <br />⦁ 초급 응용회화
              </EduTimeText>
              <TimeBox>166h</TimeBox>
            </Box>

            <Box>
              <Image src={trackTime5} />
              <EduTimeText>
                ⦁ JLPT N2 취득 특화교과
                <br />
                ⦁ 중급(어휘, 독해, 청해, 작문)
                <br />⦁ 중급 문형, 문법, 응용회화
              </EduTimeText>
              <TimeBox>188h</TimeBox>
            </Box>

            <Box>
              <Image src={trackTime6} />
              <EduTimeText>
                ⦁ 비즈니스 회화, 고급작문
                <br />
                ⦁ IT 실전 실용 회화
                <br />⦁ 일본어 실전 모의면접
              </EduTimeText>
              <TimeBox>154h</TimeBox>
            </Box>
          </BoxWrap>
        </Wrap>

        <Wrap>
          <EduTime1>교양필수 : 14h</EduTime1>
          <BoxWrap>
            <Box>
              <Image src={trackTime7} />
              <MiniTitle>필수교양</MiniTitle>
              <EduTimeText>
                성희롱예방, 안전교육, 법규(노동 및 사회),
                <br />
                마약·도박중독 예방교육
              </EduTimeText>
            </Box>

            <Box>
              <Image src={trackTime8} />
              <MiniTitle>직무특강</MiniTitle>
              <EduTimeText>
                일본 기업 문화 및 예절
                <br />
                IT·SW 직무 주요이슈 및 트랜드
              </EduTimeText>
            </Box>

            <Box>
              <Image src={trackTime9} />
              <MiniTitle>취업특강</MiniTitle>
              <EduTimeText>
                일본 IT기업 면접교육 / 이력서, 자기소개서
                <br />
                클리닉 인터뷰실습
              </EduTimeText>
            </Box>
          </BoxWrap>
        </Wrap>
      </Group>
    </Wrapper>
  );
}

const Line = styled.div`
  width: 1200px;
  height: 2px;
  background-color: #d2d7e1;
`;

const Image = styled.img`
  width: 384px;
  height: 168px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BoxWrap = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MiniTitle = styled.span`
  color: rgb(59, 66, 79);
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
`;

const EduTime1 = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 32px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  line-height: 150%;
  text-align: left;
`;

const EduTimeText = styled.span`
  color: rgb(59, 66, 79);
  font-size: 1.13rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
`;

const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  width: 53px;
  height: 30px;
  background-color: #eef1f3;
  padding: 3px 29px;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  bottom: 20px;
`;
