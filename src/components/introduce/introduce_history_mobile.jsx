import React from 'react';
import styled from 'styled-components';
import introBackground from '../../assets/images/intro_background.svg';
import { SITE_COPY } from '../../constants/siteCopy';

const { historyTitle, historyEntries } = SITE_COPY.introduce;

export default function IntroduceHistoryMobile() {
  return (
    <Wrapper>
      <HistoryWrapper>
        <History>{historyTitle}</History>

        <ScrollX>
          {historyEntries.map((entry) => (
            <HistoryFrame key={entry.year}>
              <Ellipse62 />
              <div>
                <HistoryYears>{entry.year}</HistoryYears>
                <HistoryText>
                  {entry.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < entry.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </HistoryText>
              </div>
            </HistoryFrame>
          ))}
        </ScrollX>
      </HistoryWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const ScrollX = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  height: 552px;
  display: flex;
  gap: 5rem;
  padding: 0 10%;

  /* Chrome, Safari, Opera */
  &::-webkit-scrollbar {
    width: 5px; /* 스크롤바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(38, 116, 255); /* 스크롤바 색상 */
  }

  /* Firefox */
  scrollbar-width: thin; /* 스크롤바 너비 */
  scrollbar-color: rgb(38, 116, 255); /* 스크롤바 색상, 배경 색상 */

  /* Internet Explorer, Edge */
  &::-ms-overflow-style {
    display: none; /* IE, Edge에서는 스크롤바 스타일링을 지원하지 않습니다. */
  }

  & > * {
    width: 500px; /* 자식 요소의 너비를 줄입니다 */
  }
`;

const HistoryWrapper = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${introBackground}?${Date.now()});
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  gap: 1.88rem;
  padding-top: 4rem;
`;

const History = styled.span`
  color: rgb(38, 116, 255);
  text-overflow: ellipsis;
  font-size: 1.5rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 150%;
  text-align: left;
  padding-left: 10%;
`;

const HistoryFrame = styled.div`
  width: 750px;
  height: 300px;
  display: flex;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.12rem;
  }
`;

const Ellipse62 = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 24px / 24px;
  margin-top: 8px;
`;

const HistoryYears = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
`;

const HistoryText = styled.span`
  width: 500px;
  height: 300px;
  color: white;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
`;
