import React from 'react';
import styled from 'styled-components';
import { SPECIAL_LINEUP_SECTIONS } from '../../constants/specialLineupSections';

const SECTIONS = SPECIAL_LINEUP_SECTIONS;

export default function SpecialLineup() {
  return (
    <Wrapper>
      {SECTIONS.map((s) => (
        <React.Fragment key={s.key}>
          <SpecialTitle>
            <Img src={s.icon} alt="" />
            {s.label}
          </SpecialTitle>
          <SpecialText>{s.body}</SpecialText>
        </React.Fragment>
      ))}
    </Wrapper>
  );
}

export function SpecialLineupDesktop() {
  return (
    <DesktopOuter>
      <DesktopTable role="table">
        {SECTIONS.map((s, i) => (
          <TableRow key={s.key} $isLast={i === SECTIONS.length - 1}>
            <LabelCell>{s.label}</LabelCell>
            <ContentCell>{s.body}</ContentCell>
          </TableRow>
        ))}
      </DesktopTable>
    </DesktopOuter>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;

const DesktopOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
  padding: 0 1.5rem;
`;

const DesktopTable = styled.div`
  width: 100%;
  max-width: 1200px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: minmax(180px, 22%) minmax(0, 1fr);
  border-bottom: ${(p) => (p.$isLast ? 'none' : '1px solid #e2e5ea')};

  @media (max-width: 900px) {
    grid-template-columns: minmax(140px, 28%) minmax(0, 1fr);
  }
`;

const LabelCell = styled.div`
  background-color: #0a3177;
  color: #ffffff;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.35rem 1rem;
  line-height: 1.4;
`;

const ContentCell = styled.div`
  background-color: #f8f9fa;
  color: #3b424f;
  font-family: Pretendard, sans-serif;
  padding: 1.35rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  > div {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.55;
    text-align: left;
  }

  > div span {
    font-size: 0.9rem;
  }
`;

const SpecialTitle = styled.span`
  color: #0a3177;
  font-size: 0.95rem;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  width: 312px;
  margin-bottom: 1rem;
  font-weight: 700;
  margin-top: 1.5rem;
  height: 100%;
`;

const SpecialText = styled.div`
  width: 312px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #3b424f;
  font-family: Pretendard, sans-serif;
  padding: 32px 3px 32px 12px;
  gap: 0.7rem;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);

  > div {
    font-size: 0.75rem;
    > span {
      font-size: 0.65rem;
    }
  }
`;

const Img = styled.img`
  width: 1.2rem;
  height: fit-content;
  margin-bottom: 0.2rem;
`;
