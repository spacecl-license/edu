import React from 'react';
import styled from 'styled-components';
import trackIntro1 from '../../assets/images/trackIntro1.svg';
import trackIntro2 from '../../assets/images/trackIntro2.svg';
import trackIntro3 from '../../assets/images/trackIntro3.svg';

export default function Track1IntroMobile() {
  return (
    <Wrapper>
      <Group>
        <Title>이론</Title>
        <Image src={trackIntro1} />
        <Explain></Explain>
      </Group>
      <Group>
        <Title>실습</Title>
        <Image src={trackIntro2} />
        <Explain></Explain>
      </Group>
      <Group>
        <Title>일본어</Title>
        <Image src={trackIntro3} />
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
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
`;

const Title = styled.span`
  color: rgb(59, 66, 79);
  font-size: 1.5rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  margin-bottom: 1.13rem;
`;

const Image = styled.img`
  margin-bottom: 2.25rem;
`;

const Group = styled.div`
  width: 312px;
  height: 424px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 10px;
`;

const Explain = styled.span`
  color: rgb(59, 66, 79);
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;
