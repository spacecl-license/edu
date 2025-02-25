import React from 'react';
import styled from 'styled-components';
import trackIntro1 from '../../assets/images/trackIntro1.svg';
import trackIntro2 from '../../assets/images/trackIntro2.svg';
import trackIntro3 from '../../assets/images/trackIntro3.svg';

export default function Track2Intro() {
  return (
    <Wrapper>
      <Line />
      <Group>
        <Title>이론</Title>
        <Image src={trackIntro1} />
        <Explain>
          접근성이 쉽고 IT 비전공자 및
          <br />
          초보자도 쉽게 배울 수 있는
          <br />
          프로그래밍 언어와 DB를 시작으로
          <br />
          스크립트 라이브러리 실습을
          <br />
          구체적으로 연계하여 활용도 높은
          <br />
          기술 구현.
        </Explain>
      </Group>
      <Group>
        <Title>실습</Title>
        <Image src={trackIntro2} style={{ marginBottom: '4rem' }} />
        <Explain>
          Vue.js, AWS클라우드, 스프링
          <br />
          Boot등 웹개발 핵심 기술을 활용한
          <br />
          실습 모델링
          <br />→ 완성도 높은 WEB/APP 모델링
        </Explain>
      </Group>
      <Group>
        <Title>일본어</Title>
        <Image src={trackIntro3} style={{ marginBottom: '3rem' }} />
        <Explain>
          체계적인 일본어 학습 진행
          <br />
          (입문~중급이상 레벨)
          <br />
          일본취업을 위한 JLPT N2 취득을
          <br />
          위한 교과목 별도 편성
          <br />
          비즈니스회화, 모의면접등 일본어
          <br />
          역량 집중관리
        </Explain>
      </Group>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 64px;
  position: relative;
`;

const Line = styled.div`
  width: 770px;
  height: 2px;
  background-color: rgb(59, 66, 79);
  position: absolute;
  top: 132px;
  z-index: -1;
`;

const Title = styled.span`
  color: rgb(59, 66, 79);
  font-size: 2rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  margin-bottom: 1.13rem;
`;

const Group = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Explain = styled.span`
  color: rgb(59, 66, 79);
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: center;
`;

const Image = styled.img`
  margin-bottom: 2.25rem;
`;
