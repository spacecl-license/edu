import styled from 'styled-components';
import track2 from '../../assets/images/track2.png';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import track1Background from '../../assets/images/track1_background.svg';
import OpenModalMobile from '../modal_mobile';

export default function Track2CardMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Wrapper>
      <ImageWrapper>
        <KMoveItWrap>
          <KMoveIt>K-Move 일본 IT기업 취업 국비 무료 교육</KMoveIt>
        </KMoveItWrap>

        {/* 트랙 Ⅰ, Ⅱ */}
        <LinkWrap>
          {/* <Link to="/track">
            <KmoveTrack1>
              K-Move 트랙 Ⅰ
            </KmoveTrack1>
          </Link> */}
          <Link to="/track">
            <KmoveTrack2>K-Move 트랙 Ⅱ</KmoveTrack2>
          </Link>
        </LinkWrap>

        {/* 카드 */}
        <ProgramWrap>
          <TrackIntroTitle>연수 프로그램 소개</TrackIntroTitle>
          <div>
            <Card>
              <Image src={track2} alt="track2" />
              <CardTextWrapper>
                <TitleSide>
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
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                </Explain> */}
                <ApplyButton onClick={onOpen}>지원하기</ApplyButton>
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
                  2025년 6월 27일 (목) ~ 2025년 12월 31일 (화)
                  <br />
                  (총 6개월, 1016시간)
                </PeriodText>
              </div>
              <div>
                <Period>연수장소</Period>
                <PeriodText>아시아경제 교육센터 (충무로역)</PeriodText>
              </div>
              <div>
                <Period>연수시간</Period>
                <PeriodText>09:30~18:30 (월~금)</PeriodText>
              </div>
              <div>
                <Period>연수비용</Period>
                <PeriodText>국비지원 100% 무료과정</PeriodText>
              </div>
              <div>
                <Period>연수인원</Period>
                <PeriodText>20명</PeriodText>
              </div>
            </Title>

            <OpenModalMobile isOpen={isOpen} onClose={onClose} />
          </ProgramExplain>
        </ProgramWrap>
      </ImageWrapper>
    </Wrapper>
  );
}

const Black = styled.div`
  width: 100%;
  height: 243px;
  background-color: black;
  opacity: 0.5;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0px 0px 10px 10px;
`;

const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 1100px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 690px;
  background-image: url(${track1Background}?${Date.now()});
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
  align-items: flex-start;
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

const CardTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5rem;
  padding: 2.5rem;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const TitleSide = styled.div`
  display: flex;
  align-items: center;
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
  font-size: 0.75rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
`;

const TrackIntroTitle = styled.span`
  color: rgb(59, 66, 79);
  font-size: 1.1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 150%;
  text-align: left;
  width: 312px;
`;

const Period = styled.span`
  color: rgb(60, 60, 60);
  text-overflow: ellipsis;
  font-size: 0.85rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 150%;
  text-align: left;
`;

const PeriodText = styled.span`
  color: rgb(60, 60, 60);
  text-overflow: ellipsis;
  font-size: 0.75rem;
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

const CardText = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
`;

const KMove = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  text-align: left;
`;

const TrackText1 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 0.85rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
`;

const TrackText2 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
`;

const TrackText3 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 0.85rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
`;

const TrackText4 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
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
  background-color: rgba(97, 97, 97, 0.8);
  box-sizing: border-box;
  padding: 2px;
`;

const TrackDate = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;

const Line = styled.div`
  width: 312px;
  height: 0px;
  border-top: solid 1px lightGray;
  display: flex;
  justify-content: center;
`;

const ApplyButton = styled.div`
  width: 100%;
  /* height: 64px; */
  background-color: #0a3177;
  border-radius: 6px;
  color: white;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  &:hover {
    background-color: #0050e0;
    cursor: pointer;
  }
  border: 1px solid #fdfefa;
`;

const KmoveTrack1 = styled.span`
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

const KmoveTrack2 = styled.span`
  width: 146px;
  height: 48px;
  background-color: rgb(38, 116, 255);
  color: white;
  font-size: 0.85rem;
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
