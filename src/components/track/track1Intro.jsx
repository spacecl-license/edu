import React from 'react';
import styled from 'styled-components';
import trackIntro1 from '../../assets/images/trackIntro1.svg';
import trackIntro2 from '../../assets/images/trackIntro2.svg';
import trackIntro3 from '../../assets/images/trackIntro3.svg';

export default function Track1Intro() {
  return (
    <Wrapper>
      <Line />
      <Group>
        <Title>이론</Title>
        <Image src={trackIntro1} />
        <Explain></Explain>
      </Group>
      <Group>
        <Title>실습</Title>
        <Image src={trackIntro2} style={{ marginBottom: '4rem' }} />
        <Explain></Explain>
      </Group>
      <Group>
        <Title>일본어</Title>
        <Image src={trackIntro3} style={{ marginBottom: '3rem' }} />
        <Explain>
          일본취업을 위한 JLPT N2 취득교과를
          <br />
          별도로 반영
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
  width: 312px;
`;

const Image = styled.img`
  margin-bottom: 2.25rem;
`;
