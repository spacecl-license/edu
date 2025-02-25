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

export default function Track1Time() {
  return (
    <Wrapper>
      <Line />
      <Group>
        <Wrap>
          <EduTime1>IT Programming : 450~500h</EduTime1>
          <BoxWrap>
            <Box>
              <Image src={trackTime1} />
              <EduTimeText>
                ⦁ JAVA Programming
                <br />
                ⦁ 네트워크 클래스
                <br />
                ⦁ DataBase, RDBMS, MySQL
                <br />
                ⦁ JavaScript, jQuery
                <br />⦁ 라이브러리 실습 및 활용 세미 프로젝트(시각화 구현)
              </EduTimeText>
            </Box>

            <Box>
              <Image src={trackTime2} />
              <EduTimeText>
                ⦁ Spring Boot <br />⦁ AWS 클라우드 아키텍처
                <br />⦁ Docker, Elastic <br />⦁ React / Vue.js
              </EduTimeText>
            </Box>

            <Box>
              <Image src={trackTime3} />
              <EduTimeText>
                ⦁ 파이널 실무 프로젝트 <br />⦁ IT•SW 포트폴리오 제작 <br />⦁
                산업융합 WEB/APP 모델링 <br />⦁ 프로젝트 발표(Demo-Day)
              </EduTimeText>
            </Box>
          </BoxWrap>
        </Wrap>

        <Wrap>
          <EduTime1>일본어 : 450~500h</EduTime1>
          <BoxWrap>
            <Box>
              <Image src={trackTime4} />
              <EduTimeText>
                ⦁ 일본어 입문Lv <br />⦁ 일본어 기초어휘 및 문형표현 <br />⦁
                초급(어휘, 독해, 청해, 작문) <br />⦁ 초급 응용회화
              </EduTimeText>
            </Box>

            <Box>
              <Image src={trackTime5} />
              <EduTimeText>
                ⦁ JLPT N2 특화교과
                <br />
                ⦁ 중급(어휘, 독해, 청해, 작문)
                <br />⦁ 중급 문형, 문법, 응용회화
              </EduTimeText>
            </Box>

            <Box>
              <Image src={trackTime6} />
              <EduTimeText>
                ⦁ 비즈니스 회화, 고급작문
                <br />
                ⦁ IT 실전 실용 회화 <br />⦁ 일문 이력서, 자기소개서 클리닉
                <br />⦁ 일본어 실전 모의면접
              </EduTimeText>
            </Box>
          </BoxWrap>
        </Wrap>

        <Wrap>
          <EduTime1>교양/특강</EduTime1>
          <BoxWrap>
            <Box>
              <Image src={trackTime7} />
              <MiniTitle>직무특강</MiniTitle>
              <EduTimeText>
                ⦁ 일본 IT취업 직무특강 <br />⦁ IT•SW 직무 주요이슈 및 트랜드
                <br />⦁ 일본 기업 인재상 / 채용조건 <br />⦁ 일본 기업 사업이해
                및 조직구조
              </EduTimeText>
            </Box>

            <Box>
              <Image src={trackTime8} />
              <MiniTitle>교양/일본문화</MiniTitle>
              <EduTimeText>
                ⦁ 안전교육, 노동 및 사회법규 <br />⦁ 일본 기업문화 및 예절관리
                <br />⦁ 일본 사회, 경제적 특징
              </EduTimeText>
            </Box>

            <Box>
              <Image src={trackTime9} />
              <MiniTitle>취업특강</MiniTitle>
              <EduTimeText>
                일본 IT기업 면접교육 <br />⦁ 일본 구인기업 채용 설명회 <br />⦁
                일본 구인기업 알선 매칭 <br />⦁ 고용계약 및 비자취득 등
                취업프로세스
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
  height: 100px;
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
