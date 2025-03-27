import styled from 'styled-components';
import track3 from '../../assets/images/track3.png';
import track4 from '../../assets/images/track4.png';
import track5 from '../../assets/images/track5.png';
import linear from '../../assets/images/linear.png';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import track1Background from '../../assets/images/track1_background.svg';
import OpenModalMobile from '../modal_mobile';

export default function Track1CardMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Wrapper>
      <KMoveItWrap>
        <KMoveIt>K-Move 일본 IT기업 취업 국비 무료 교육</KMoveIt>
      </KMoveItWrap>
      {/* 카드 */}
      {/* <ProgramWrap>
        <TrackIntroTitle>프로그램 소개</TrackIntroTitle>
        <div>
          <Card2>
            <CardTextWrapper2>
              <TitleSide>
                <KMove2>일본어 클래스(3월)</KMove2>
                <CardText2>
                  일본어 무료 클래스(초급)
                  <br />
                  2025년 K-Move 연수과정 연계
                </CardText2>
              </TitleSide>
            </CardTextWrapper2>
            <Image2 src={track3} alt="track1" />
          </Card2>
        </div>

        <ProgramExplain>
          <LineWrapper>
            <Line />
          </LineWrapper>
          <Title>
            <div>
              <Period>연수기간</Period>
              <PeriodText>
                2025년 3월 10일 - 2025년 3월 21일
                <br /> (월,수,금)
              </PeriodText>
            </div>
            <div>
              <Period>연수장소</Period>
              <PeriodText>
                스페이스씨엘 본사 교육장 <br /> (가산디지털단지역 도보 5분 내)
              </PeriodText>
            </div>
            <div>
              <Period>연수비용</Period>
              <PeriodText>100% 무료</PeriodText>
            </div>
          </Title>
          <ApplyButton onClick={onOpen}>지원하기</ApplyButton>
          <OpenModalMobile isOpen={isOpen} onClose={onClose} />
        </ProgramExplain>
      </ProgramWrap> */}

      <ProgramWrap>
        <TrackIntroTitle>프로그램 소개</TrackIntroTitle>
        <div>
          <Card>
            <Image src={track4} alt="track1" />
            <CardTextWrapper>
              <TitleSide>
                <KMove>
                  일본취업반 K-Move <br /> 트랙 Ⅱ
                </KMove>
                <CardText>
                  2025년 일본취업 클라우드 기반
                  <br />
                  풀스택 웹개발자 양성과정
                </CardText>
              </TitleSide>
            </CardTextWrapper>
          </Card>
        </div>

        <ProgramExplain>
          <LineWrapper>
            <Line />
          </LineWrapper>
          <Title>
            <div>
              <Period>연수기간</Period>
              <PeriodText>
                2025년 4월 1일 - 2025년 10월 16일
                <br /> (총 29주, 1016시간 )
              </PeriodText>
            </div>
            <div>
              <Period>연수장소</Period>
              <PeriodText>
                한국소프트웨어 인재개발원 <br /> (가산디지털단지역 도보 5분 내)
              </PeriodText>
            </div>
            <div>
              <Period>연수비용</Period>
              <PeriodText>100% 국비지원 무료교육</PeriodText>
            </div>
            <div>
              <Period>연수인원</Period>
              <PeriodText>20명 선착순 지원</PeriodText>
            </div>
          </Title>
          <ApplyButton onClick={onOpen}>지원하기</ApplyButton>
          <OpenModalMobile isOpen={isOpen} onClose={onClose} />
        </ProgramExplain>
      </ProgramWrap>
      <ProgramWrap>
        <TrackIntroTitle>프로그램 소개</TrackIntroTitle>
        <div>
          <Card>
            <Image src={track5} alt="track1" />
            <Image src={linear} alt="track1" />
            <CardTextWrapper>
              <TitleSide>
                <KMove2>
                  일본취업반 K-Move <br /> 트랙 Ⅰ
                </KMove2>
                <CardText2>
                  2025년 일본취업 산업융합
                  <br />
                  IT•SW 전문가 양성과정
                </CardText2>
              </TitleSide>
            </CardTextWrapper>
          </Card>
        </div>

        <ProgramExplain>
          <LineWrapper>
            <Line />
          </LineWrapper>
          <Title>
            <div>
              <Period>연수기간</Period>
              <PeriodText>
                2025년 6월 3일 - 2025년 11월 27일 <br /> (총 26주, 928시간)
              </PeriodText>
            </div>
            <div>
              <Period>연수장소</Period>
              <PeriodText>
                한국소프트웨어 인재개발원 <br /> (가산디지털단지역 도보 5분 내)
              </PeriodText>
            </div>
            <div>
              <Period>연수비용</Period>
              <PeriodText>100% 국비지원 무료교육</PeriodText>
            </div>
            <div>
              <Period>연수인원</Period>
              <PeriodText>15명 선착순 지원</PeriodText>
            </div>
          </Title>
          <ApplyButton onClick={onOpen}>지원하기</ApplyButton>
          <OpenModalMobile isOpen={isOpen} onClose={onClose} />
        </ProgramExplain>
      </ProgramWrap>
    </Wrapper>
  );
}

const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.25rem;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 2150px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  background-image: url(${track1Background}?${Date.now()});
  height: 690px;
`;

const LinkWrap = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 35px;
  justify-content: center;
`;

const ProgramWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 1rem;

  > div {
    display: flex;
    justify-content: center;
  }
`;

const ProgramExplain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

const KMoveItWrap = styled.div`
  width: 100%;
  height: 44px;
  background-color: rgb(10, 49, 119);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 312px;
  height: 462px;
  object-fit: cover;
  position: absolute;
  border-radius: 10px;
`;

const Image2 = styled.img`
  width: 312px;
  object-fit: cover;
  border-radius: 10px;
`;

const CardTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  padding: 2.5rem;
  position: absolute;
  z-index: 1;
`;

const CardTextWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  padding: 2.5rem;
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

const KMoveIt = styled.span`
  color: white;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
`;

const TrackIntroTitle = styled.span`
  color: rgb(59, 66, 79);
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 150%;
  text-align: left;
  width: 312px;
`;

const Period = styled.span`
  color: rgb(60, 60, 60);
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 150%;
  text-align: left;
`;

const PeriodText = styled.span`
  color: rgb(60, 60, 60);
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
`;

const Card = styled.div`
  width: 312px;
  height: 462px;
  position: relative;
`;

const Card2 = styled.div`
  width: 312px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #92979f;
`;

const CardText = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.12rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
`;

const CardText2 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 1.12rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
`;

const KMove = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.5rem;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  text-align: left;
`;

const KMove2 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 1.5rem;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  text-align: left;
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

const Line = styled.div`
  width: 312px;
  height: 0px;
  border-top: solid 1px lightGray;
  display: flex;
  justify-content: center;
`;

const ApplyButton = styled.button`
  width: 312px;
  height: 64px;
  background-color: #0a3177;
  border-radius: 6px;
  color: white;
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    background-color: #c4c4c4;
    cursor: not-allowed;
  }

  /* &:hover {
    background-color: #0050e0;
    cursor: pointer;
  } */
`;

const KmoveTrack1 = styled.span`
  width: 146px;
  height: 48px;
  background-color: rgb(38, 116, 255);
  color: white;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: left;
  padding: 16px 16px;
  border-radius: 27px;

  &:hover {
    background-color: #0050e0;
    cursor: pointer;
  }
`;

const KmoveTrack2 = styled.span`
  width: 146px;
  height: 48px;
  background-color: rgb(192, 192, 192);
  color: white;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: left;
  padding: 16px 16px;
  border-radius: 27px;

  &:hover {
    background-color: #0050e0;
    cursor: pointer;
  }
`;

const TrackJapanese = styled.span`
  background-color: #6b6fc3;
  padding: 16px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
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
