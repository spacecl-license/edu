import React from 'react';
import styled from 'styled-components';
import track1 from '../../assets/images/track1.png';
import track2 from '../../assets/images/track2.png';
import mainTrackBackImage1 from '../../assets/images/mainTrackBackImage1.svg';
import mainTrackBackImage2 from '../../assets/images/mainTrackBackImage2.svg';
import { Link } from 'react-router-dom';
import vector from '../../assets/images/vector.svg';

export default function MainTrack() {
  return (
    <TrackWrapper>
      <TrackCardWrapper>
        <BackImage1 src={mainTrackBackImage1} />
        <BackImage2 src={mainTrackBackImage2} />
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
            <Link to="/track">
              <Detail>
                상세보기
                <img src={vector} alt="vector icon" />
              </Detail>
            </Link>
          </CardTextWrapper>
          <TrackJapanese>
            <JapaneseTitle>수강생 모집중</JapaneseTitle>
            <JapaneseText>K-Move 스쿨 6월 오픈</JapaneseText>
          </TrackJapanese>
        </Card>
        {/* <Card>
          <Image src={track2} alt="trakc2" />
          <CardTextWrapper>
            <TitleSide>
              <KMove>K-Move 트랙 Ⅱ</KMove>
              <CardText>
                2025년 일본취업 클라우드 기반
                <br />
                풀스택 웹 개발자 양성과정
              </CardText>
              <TrackDateWrap2>
                <TrackDate>
                  6월 27일 개강 <br />
                  모집중
                </TrackDate>
              </TrackDateWrap2>
            </TitleSide>
            <Explain>
              <TrackText1>
                IT직무<br/>
                일본어<br/>
                국비교육
              </TrackText1>
              <TrackText2>
                이력서 컨설팅<br/>
                면접 스피치<br/>
                지원
              </TrackText2>
              <TrackText3>
                기업설명회<br/>
                면접 등<br/>
                취업지원
              </TrackText3>
              <TrackText4>
                해외정착금<br/>
                500만원<br/>
                지원
              </TrackText4>
            </Explain>
          </CardTextWrapper>
          <Link to="/track">
            <Detail>상세보기</Detail>
          </Link>
        </Card> */}
      </TrackCardWrapper>
    </TrackWrapper>
  );
}

const TrackWrapper = styled.div`
  width: 100%;
`;

const BackImage1 = styled.img`
  position: absolute;
  top: 80px;
  left: 0;
`;

const BackImage2 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const CardTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 50px 0px 0px 100px;
  position: absolute;
`;

const TitleSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 350px;
`;

const Explain = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Detail = styled.div`
  font-weight: 500;
  color: '#0A3177';
  background: #bad8e6;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 7px 24px;
  width: fit-content;
  margin-top: 20px;
`;

const TrackCardWrapper = styled.div`
  width: 100%;
  height: 504px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
  padding: 0 15%;
`;

const Card = styled.div`
  width: 100%;
  height: 382px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  height: 382px;
  object-fit: cover;
  position: absolute;
`;

const KMove = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 2rem;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  text-align: left;
`;

const CardText = styled.span`
  color: white;
  /* font-size: 1.5rem; */
  font-size: 2rem;
  font-family: Pretendard, sans-serif;
  /* font-weight: 400; */
  font-weight: 700;
  line-height: 150%;
  white-space: nowrap;
  text-align: left;
`;

const TrackJapanese = styled.span`
  background-color: #6b6fc3;
  padding: 16px 20px;
  border-radius: 10px;
  position: absolute;
  right: 100px;
  top: 50px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const JapaneseTitle = styled.div`
  color: #ffbfd9;
  font-size: 24px;
  line-height: 34px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: center;
`;

const JapaneseText = styled.span`
  color: white;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 27px;
`;

const TrackDate = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  white-space: nowrap;
`;

const TrackText1 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
  width: 109px;
`;

const TrackText2 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
  width: 130px;
`;

const TrackText3 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
  width: 109px;
`;

const TrackText4 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
  width: 109px;
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
  padding: 2px 20px;
  width: 200px;
  height: 58px;
`;

const TrackDateWrap2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border-radius: 9999px;
  background-color: rgba(97, 97, 97, 0.8);
  box-sizing: border-box;
  padding: 2px 20px;
  position: absolute;
  top: 20px;
  left: 90%;
  width: 200px;
`;

const KMoveSub = styled.span`
  color: white;
  font-size: 26px;
  font-family: Pretendard, sans-serif;
  font-weight: 300;
  text-align: left;
  line-height: 31px;
`;
