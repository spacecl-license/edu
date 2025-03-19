import React from 'react';
import styled from 'styled-components';
import track1 from '../../assets/images/track1.png';
import track2 from '../../assets/images/track2.png';
import { Link } from 'react-router-dom';
import vector from '../../assets/images/vector.svg';

export default function MainTrackMobile() {
  return (
    <TrackWrapper>
      <TrackCardWrapper>
        <Card>
          <Image src={track1} alt="track1" />
          <CardTextWrapper>
            <TitleSide>
              {/* <KMove>일본어 클래스(3월)</KMove> */}
              <CardText>
                K-Move(Track)
                <br />
                2025년 일본취업 IT•SW•ICT 과정
              </CardText>
            </TitleSide>
          </CardTextWrapper>
          <TrackJapanese>
            <JapaneseTitle>수강생 모집 중</JapaneseTitle>
            <JapaneseText>일본어 초급 CLASS 4월, 6월 오픈</JapaneseText>
          </TrackJapanese>
          <Link to="/track">
            <Detail>
              상세보기
              <img src={vector} alt="vector icon" />
            </Detail>
          </Link>
        </Card>
      </TrackCardWrapper>
    </TrackWrapper>
  );
}

const Detail = styled.div`
  width: 75%;
  height: 31px;
  font-size: 1rem;
  font-weight: 600;
  background: #bad8e6;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: '#0A3177';
`;

const TrackWrapper = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;

const CardTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10rem;
  padding: 50px 10px 22px 38px;
  position: absolute;
`;

const TitleSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Explain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;

  > div {
    display: flex;
    gap: 3rem;
  }
`;

const TrackCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  width: 312px;
  height: 462px;
  position: relative;
`;

const Image = styled.img`
  width: 312px;
  height: 462px;
  object-fit: cover;
  position: absolute;
  border-radius: 10px;
`;

const KMove = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.5rem;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  text-align: left;
`;

const CardText = styled.span`
  color: white;
  text-overflow: ellipsis;
  /* font-size: 1.12rem; */
  font-size: 1.5rem;
  font-family: Pretendard, sans-serif;
  /* font-weight: 400; */
  font-weight: 700;
  line-height: 150%;
  text-align: left;
  white-space: nowrap;
`;

const TrackDate = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
  white-space: nowrap;
`;

const TrackText1 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
`;

const TrackText2 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
`;

const TrackText3 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
`;

const TrackText4 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
`;

const TrackDateWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border-radius: 9999px;
  background-color: rgba(97, 97, 97, 0.8);
  box-sizing: border-box;
  padding: 2px 15px;
`;

const TrackJapanese = styled.span`
  background-color: #6b6fc3;
  padding: 16px 20px;
  border-radius: 10px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6px;
  left: 38px;
  bottom: 150px;
`;

const JapaneseTitle = styled.div`
  color: #ffbfd9;
  font-size: 20px;
  line-height: 34px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: center;
`;

const JapaneseText = styled.span`
  color: white;
  font-size: 14px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 27px;
`;

const KMoveSub = styled.span`
  color: white;
  font-size: 1.5rem;
  font-family: Pretendard, sans-serif;
  font-weight: 300;
  text-align: left;
  line-height: 31px;
`;
