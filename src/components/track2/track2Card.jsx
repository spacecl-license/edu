import styled from 'styled-components';
import track2 from '../../assets/images/track2.png';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import OpenModal from '../modal';
import track1Background from '../../assets/images/track1_background.svg';

export default function Track2Card() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Wrapper>
      <KMoveItWrap>
        <KMoveIt>K-Move 일본 IT기업 취업 국비 무료 교육</KMoveIt>
      </KMoveItWrap>

      {/* 트랙 Ⅰ, Ⅱ */}
      <LinkWrap>
        {/* <Link to="/track1">
          <KmoveTrack1>
            K-Move 트랙 Ⅰ
          </KmoveTrack1>
        </Link> */}
        <Link to="/track1">
          <KmoveTrack2>K-Move 트랙 Ⅱ</KmoveTrack2>
        </Link>
      </LinkWrap>

      {/* 카드 */}
      <ProgramWrap>
        <div>
          <TrackIntroTitle>연수 프로그램 소개</TrackIntroTitle>
          <div>
            <Card>
              <Image src={track2} alt="track2" />
              <CardTextWrapper>
                <TitleSide>
                  <KMove>K-Move 트랙 Ⅱ</KMove>
                  <CardText>
                    2025년 일본취업 클라우드 기반
                    <br />
                    풀스택 웹 개발자 양성과정
                  </CardText>
                  <TrackDateWrap>
                    <TrackDate>
                      6월 27일 개강 <br />
                      모집중
                    </TrackDate>
                  </TrackDateWrap>
                </TitleSide>
                {/* <Explain>
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
                </Explain> */}
              </CardTextWrapper>
            </Card>

            <ProgramExplain>
              <Line />
              <div>
                <Title>
                  <Period>연수기간</Period>
                  <Period>연수장소</Period>
                  <Period>연수시간</Period>
                  <Period>연수비용</Period>
                  <Period>연수인원</Period>
                </Title>

                <TextSide>
                  <PeriodText>
                    2025년 6월 27일 (목) ~ 2025년 12월 31일 (화) (6개월,
                    1016시간)
                  </PeriodText>
                  <PeriodText>아시아경제 교육센터 (충무로역)</PeriodText>
                  <PeriodText>09:30~18:30 (월~금)</PeriodText>
                  <PeriodText>국비지원 100% 무료과정</PeriodText>
                  <PeriodText>20명</PeriodText>
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

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 858px;
  background-image: url(${track1Background}?${Date.now()});
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
  width: 1200px;
`;

const ProgramWrap = styled.div`
  width: 100%;
  margin-top: 3rem;
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
  height: 382px;
  object-fit: cover;
  position: absolute;
  border-radius: 10px;
`;

const CardTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
  padding: 45px 48px 45px 48px;
  position: absolute;
`;

const TitleSide = styled.div`
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
  width: 588px;
  height: 341px;
  position: relative;
`;

const CardText = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.5rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
`;

const KMove = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 2rem;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  text-align: left;
`;

const TrackText1 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
`;

const TrackText2 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
`;

const TrackText3 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
`;

const TrackText4 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.25rem;
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
  border-radius: 30px;
  width: 180px;
  height: 31px;
  background-color: rgba(97, 97, 97, 0.8);
  box-sizing: border-box;
  position: absolute;
  top: 30px;
  left: 80%;
  width: 200px;
  height: 58px;
`;

const TrackDate = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.13rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;

const Line = styled.div`
  width: 548px;
  height: 0px;
  border-top: solid 2px rgb(60, 60, 60);
`;

const ApplyButton = styled.div`
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

  &:hover {
    background-color: #0050e0;
    cursor: pointer;
  }
`;

const KmoveTrack1 = styled.span`
  width: 173px;
  height: 54px;
  background-color: rgb(192, 192, 192);
  color: white;
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: left;
  padding: 12px 26px;
  border-radius: 27px;

  &:hover {
    background-color: #0050e0;
    cursor: pointer;
  }
`;

const KmoveTrack2 = styled.span`
  width: 173px;
  height: 54px;
  background-color: rgb(38, 116, 255);
  color: white;
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: left;
  padding: 12px 26px;
  border-radius: 27px;

  &:hover {
    background-color: #0050e0;
    cursor: pointer;
  }
`;
