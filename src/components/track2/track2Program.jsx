import React from 'react';
import styled from 'styled-components';
import bestIcon from '../../assets/images/bestIcon.svg';
import trackIcon1 from '../../assets/images/trackIcon1.svg';
import trackIcon2 from '../../assets/images/trackIcon2.svg';
import trackIcon3 from '../../assets/images/trackIcon3.svg';
import { SITE_COPY } from '../../constants/siteCopy';

const PF = SITE_COPY.programFeatures.track2;
const icons = [trackIcon1, trackIcon2, trackIcon3];

function BrJoinedLines({ lines }) {
  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

export default function Track2Program() {
  return (
    <Wrapper>
      <Group1>
        <div>
          <Program>{SITE_COPY.programFeatures.sectionTitle}</Program>
          <ProgramText>
            {PF.introDesktop.map((line, i) => (
              <React.Fragment key={i}>
                ⦁ {line}
                <br />
              </React.Fragment>
            ))}
          </ProgramText>
        </div>
      </Group1>
      <Group2>
        {PF.cards.map((card, idx) => {
          const lines =
            card.linesDesktop ??
            card.lines ??
            [];
          return (
            <ProgramCard key={card.title}>
              <BestIconGroup>
                <BestIcon src={bestIcon} alt="image" />
                <BestIcon src={bestIcon} alt="image" />
              </BestIconGroup>
              <ProgramCardTitle>{card.title}</ProgramCardTitle>
              <Image src={icons[idx]} alt="image" />
              <ProgramCardBox>{card.box}</ProgramCardBox>
              <ProgramCardText>
                <BrJoinedLines lines={lines} />
              </ProgramCardText>
            </ProgramCard>
          );
        })}
      </Group2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  position: relative;
`;

const Group1 = styled.div`
  width: 100%;
  height: 730px;
  background-color: rgb(248, 249, 250);
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 100px;
  }
`;

const Group2 = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
`;

const ProgramCard = styled.div`
  width: 384px;
  height: 650px;
  box-shadow: 0px 4px 30px 0px rgba(82, 101, 149, 0.1);
  background-color: white;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
`;

const Program = styled.span`
  color: rgb(34, 34, 34);
  font-size: 2rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
`;

const ProgramText = styled.span`
  color: rgb(59, 66, 79);
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
  line-height: 200%;
`;

const BestIconGroup = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  left: 80%;
  top: 5%;
`;

const BestIcon = styled.img`
  width: 15px;
  height: 22px;
  object-fit: cover;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-top: 3rem;
`;

const ProgramCardText = styled.span`
  color: rgb(59, 66, 79);
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  width: 304px;
  margin-top: 2rem;
`;

const ProgramCardTitle = styled.span`
  color: rgb(10, 49, 119);
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 150%;
  text-align: center;
  margin-top: 4rem;
`;

const ProgramCardBox = styled.span`
  color: white;
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border-radius: 8px;
  width: 336px;
  height: 46px;
  background-color: #0a3177;
  box-sizing: border-box;
  padding: 8px 8px;
  margin-top: 2rem;
`;
