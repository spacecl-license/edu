import React from 'react';
import styled from 'styled-components';
import introBackground from '../../assets/images/intro_background.svg';

export default function IntroduceHistory() {
  return (
    <Wrapper>
      <HistoryWrapper>
        {/* <IntroBackground src={introBackground} alt="background"/> */}
        <History>History</History>

        <ScrollX>
          <HistoryFrame>
            <Ellipse62 />
            <div>
              <HistoryYears>2024 ~ 현재</HistoryYears>
              <HistoryText>
                K-Move 일본취업 산업융합 소프트웨어 전문가 양성과정(트랙Ⅰ) 승인
                및 운영 <br />
                K-Move 일본취업 클라우드 기반 풀스택 웹개발자 양성과정(트랙Ⅱ)
                승인 및 운영 <br />
                ANEX, TON SOFT등 기업인사 혁신자문위원회 구성
                <br />
                G밸리 소프트웨어 데모 시연회 공동주관(큐비트온)
                <br />
                연수과정-스페이스씨엘 프로젝트 멘토 협업툴 개발/적용
              </HistoryText>
            </div>
          </HistoryFrame>
          <HistoryFrame>
            <Ellipse62 />
            <div>
              <HistoryYears>2023</HistoryYears>
              <HistoryText>
                코이카-페루 온라인 창업교육 플랫폼 유지보수
                <br />
                국가 민방위 재난 안전 교육원 ASEAN 교육 운영 플랫폼 구축
                <br />
                아시아경제 교육센터 MOU 체결
                <br />
                한국소프트웨어 아이엔씨 인재개발원 MOU 체결
                <br />
                ANEX, TON SOFT, 브라이트 스타, CMS등 일본 우수기업등과 채용협약
              </HistoryText>
            </div>
          </HistoryFrame>
          <HistoryFrame>
            <Ellipse62 />
            <div>
              <HistoryYears>2022</HistoryYears>
              <HistoryText>
                ‘주식회사 스페이스 씨엘’ IT 개발 법인 회사 설립
                <br />
                학생 창업 유망팀 300 페스티벌 온라인 시스템 운영지원
                <br />
                KDB 청년 창업 지원사업 홈페이지 유지보수
                <br />
                JA-삼성 창업 놀이터 교육운영 플랫폼 유지보수
                <br />
                NFT 대량미팅 등록 및 코인 결제 서비스 구축
              </HistoryText>
            </div>
          </HistoryFrame>
          <HistoryFrame>
            <Ellipse62 />
            <div>
              <HistoryYears>2021</HistoryYears>
              <HistoryText>
                스타트업 둥지 3차년도 홈페이지 운영 유지보수
                <br />
                학생 창업 유망팀 300 페스티벌 온라인 시스템 구축 용역
                <br />
                자동 매매 시스템 개발
                <br />
                SK 출입관리 시스템 개발
                <br />
                전시 예약, 결제 동의 업무를 위한 시스템 개발 (일본 도쿄 국립
                예술단)
              </HistoryText>
            </div>
          </HistoryFrame>
          <HistoryFrame>
            <Ellipse62 />
            <div>
              <HistoryYears>2020</HistoryYears>
              <HistoryText>
                스타트업 둥지 온라인 시스템 구축
                <br />
                탈중앙화 블록체인 Wallet 서비스 개발
                <br />
                블록체인 코인 관리 시스템 개발
                <br />
                자동 매매 시스템 개발
              </HistoryText>
            </div>
          </HistoryFrame>
          <HistoryFrame>
            <Ellipse62 />
            <div>
              <HistoryYears>2019</HistoryYears>
              <HistoryText>
                창업교육 플랫폼 유지보수
                <br />
                창업 허브 스타트업 플러스 기능개선 용역
                <br />
                자금 세탁 방지 시스템(AML) 구축 사업지원
                <br />
                AP몰 통합사원 프론트 / 백엔드 개발
                <br />
                그룹웨어 및 이랜드 리테일 ECS 시스템 리뉴얼
                <br />
                거래소 관련 안드로이드, IOS 앱 개발
              </HistoryText>
            </div>
          </HistoryFrame>
          <HistoryFrame>
            <Ellipse62 />
            <div>
              <HistoryYears>2018</HistoryYears>
              <HistoryText>
                산학협력 선도대학 육성사업 종합성과관리 시스템 유지보수
                <br />
                LINC+종합성과 관리 시스템 유지보수사업
                <br />
                KDB 청년 창업 지원사업 홈페이지 및 평가 시스템 개편
                <br />
                온라인 창업교육 플랫폼 유지보수
                <br />
                잠재적 청년 창업가 발굴 육성 프로그램 사업페이지 구축
                <br />
                주거 / 사무 통합형 창업 지원사업 플랫폼 구축
                <br />
                잠재적 청년 창업가 발굴 육성 프로그램 사업 플랫폼 구축
                <br />
                AI 기반 챗봇 톡 상담 시스템 구축 및 운영지원
              </HistoryText>
            </div>
          </HistoryFrame>
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
  padding: 0 20%;

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
  font-size: 32px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 150%;
  text-align: left;
  padding-left: 20%;
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
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 24px / 24px;
  margin-top: 8px;
`;

const HistoryYears = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 24px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
`;

const HistoryText = styled.span`
  color: white;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
`;
