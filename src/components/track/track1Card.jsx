import styled from 'styled-components';
import track3 from '../../assets/images/track3.png';
import track4 from '../../assets/images/track4.png';
import track5 from '../../assets/images/track5.png';
import linear from '../../assets/images/linear.png';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import OpenModal from '../modal';
import track1Background from '../../assets/images/track1_background.svg';

export default function Track1Card() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Wrapper>
      <KMoveItWrap>
        <KMoveIt>K-Move 일본 IT기업 취업 국비 무료 교육</KMoveIt>
      </KMoveItWrap>

      {/* 카드 */}
      <ProgramWrap>
        <div>
          <TrackIntroTitle>프로그램 소개</TrackIntroTitle>
          <div>
            <Card2>
              <CardTextWrapper2>
                <TitleSide2>
                  <KMove2>일본어 클래스(3월)</KMove2>
                  <CardText2>
                    일본어 무료 클래스(초급)
                    <br />
                    2025년 K-Move 연수과정 연계
                  </CardText2>
                </TitleSide2>
              </CardTextWrapper2>
              <Image2 src={track3} alt="track1" />
            </Card2>

            <ProgramExplain>
              <Line />
              <div>
                <Title>
                  <Period>연수기간</Period>
                  <Period>연수장소</Period>
                  <Period>연수비용</Period>
                </Title>

                <TextSide>
                  <PeriodText>
                    2025년 3월 10일 - 2025년 3월 21일 (월,수,금)
                  </PeriodText>
                  <PeriodText>
                    스페이스씨엘 본사 교육장(가산디지털단지역 도보 5분 내)
                  </PeriodText>
                  <PeriodText>100% 무료 </PeriodText>
                </TextSide>
              </div>
              <ApplyButton onClick={onOpen}>지원하기</ApplyButton>
              <OpenModal isOpen={isOpen} onClose={onClose} />
            </ProgramExplain>
          </div>
        </div>
      </ProgramWrap>
      <ProgramWrap>
        <div>
          <TrackIntroTitle>프로그램 소개</TrackIntroTitle>
          <div>
            <Card>
              <Image src={track4} alt="track1" />
              <CardTextWrapper>
                <TitleSide>
                  <KMove>일본취업반 K-Move 트랙 Ⅱ </KMove>
                  <CardText>
                    2025년 일본취업 클라우드 기반
                    <br />
                    풀스택 웹개발자 양성과정
                  </CardText>
                </TitleSide>
              </CardTextWrapper>
            </Card>

            <ProgramExplain>
              <Line />
              <div>
                <Title>
                  <Period>연수기간</Period>
                  <Period>연수장소</Period>
                  <Period>연수비용</Period>
                  <Period>연수인원</Period>
                </Title>

                <TextSide>
                  <PeriodText>
                    2025년 4월 1일 - 2025년 10월 16일 (총 29주, 1016시간 )
                  </PeriodText>
                  <PeriodText>
                    한국소프트웨어 인재개발원(가산디지털단지역 도보 5분 내)
                  </PeriodText>
                  <PeriodText>100% 국비지원 무료교육</PeriodText>
                  <PeriodText>20명 선착순 지원</PeriodText>
                </TextSide>
              </div>
              <ApplyButton onClick={onOpen}>지원하기</ApplyButton>
              <OpenModal isOpen={isOpen} onClose={onClose} />
            </ProgramExplain>
          </div>
        </div>
      </ProgramWrap>
      <ProgramWrap>
        <div>
          <TrackIntroTitle>프로그램 소개</TrackIntroTitle>
          <div>
            <Card>
              <Image src={track5} alt="track1" />
              <Linear src={linear} alt="linear" />
              <CardTextWrapper>
                <TitleSide>
                  <KMove2>일본취업반 K-Move 트랙 Ⅰ </KMove2>
                  <CardText2>
                    2025년 일본취업 산업융합
                    <br />
                    IT•SW 전문가 양성과정
                  </CardText2>
                </TitleSide>
              </CardTextWrapper>
            </Card>

            <ProgramExplain>
              <Line />
              <div>
                <Title>
                  <Period>연수기간</Period>
                  <Period>연수장소</Period>
                  <Period>연수비용</Period>
                  <Period>연수인원</Period>
                </Title>

                <TextSide>
                  <PeriodText>
                    2025년 6월 3일 - 2025년 11월 27일 (총 26주, 928시간)
                  </PeriodText>
                  <PeriodText>
                    한국소프트웨어 인재개발원(가산디지털단지역 도보 5분 내)
                  </PeriodText>
                  <PeriodText>100% 국비지원 무료교육</PeriodText>
                  <PeriodText>20명 선착순 지원</PeriodText>
                </TextSide>
              </div>
              <ApplyButton onClick={onOpen}>지원하기</ApplyButton>
              <OpenModal isOpen={isOpen} onClose={onClose} />
            </ProgramExplain>
          </div>
        </div>
      </ProgramWrap>
    </Wrapper>
  );
}

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TrackJapanese = styled.span`
  background-color: #6b6fc3;
  padding: 16px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: fit-content;
`;

const JapaneseTitle = styled.div`
  color: #ffbfd9;
  font-size: 16px;
  line-height: 24px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: center;
`;

const JapaneseText = styled.span`
  color: white;
  font-size: 13px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 19.5px;
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
`;

const Wrapper = styled.div`
  width: 100%;
  background-image: url(${track1Background}?${Date.now()});
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 230px;
`;

const ProgramWrap = styled.div`
  width: 100%;
  margin-top: 5rem;
  gap: 2rem;
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    > div {
      display: flex;
      gap: 2rem;
    }
  }
`;

const ProgramExplain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  > div {
    display: flex;
    gap: 2rem;
  }
`;

const KMoveItWrap = styled.div`
  width: 100%;
  height: 56px;
  background-color: rgb(10, 49, 119);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 588px;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 10px;
`;

const Linear = styled.img`
  width: 588px;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 10px;
`;

const Image2 = styled.img`
  height: 100%;
  object-fit: cover;
  width: 280px;
  height: 260px;
  border-radius: 10px;
`;

const CardTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  padding: 40px;
  /* position: absolute; */
  width: 588px;
`;

const CardTextWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  padding: 40px;
  /* position: absolute; */
  width: 588px;
`;
const TitleSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TitleSide2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Explain = styled.div`
  width: 470px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const KMoveIt = styled.span`
  color: white;
  font-size: 1.5rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
`;

const TrackIntroTitle = styled.span`
  color: rgb(59, 66, 79);
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 150%;
  text-align: left;
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
  width: 600px;
  position: relative;
`;

const Card2 = styled.div`
  width: 600px;
  display: flex;
  position: relative;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #92979f;
`;

const CardText = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
  z-index: 1;
`;

const CardText2 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
  white-space: nowrap;
  z-index: 1;
`;

const KMove = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 30px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  text-align: left;
  z-index: 1;
`;

const KMove2 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 30px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  text-align: left;
  z-index: 1;
`;

const Line = styled.div`
  width: 548px;
  height: 0px;
  border-top: solid 2px rgb(60, 60, 60);
`;

const ApplyButton = styled.button`
  width: 548px;
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
