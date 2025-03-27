import styled from 'styled-components';
import training from '../../assets/images/training_techniques.png';
import etc from '../../assets/images/etc.png';
import costSupport from '../../assets/images/cost_support.png';
import employmentBenefits from '../../assets/images/employment_benefits.png';

export default function SpecialLineup() {
  return (
    <Wrapper>
      <SpecialTitle>
        <Img src={costSupport} alt="costSupport" />
        비용지원
      </SpecialTitle>
      <SpecialText>
        <div>
          전 연수과정 100% 국비지원과정
          <br />
          (자부담금 없음)
        </div>
        <div>연수장려금 지급(월 10~20만원)</div>
        <div>
          (연수기관-연수생 주소 간 편도거리 30Km 기준에 따라
          <br />
          연수개시 익월부터 10~20만원 지급)
        </div>
        <div>
          매달 훈련수당금 지급
          <br />
          (국민취업지원제도 활용, 연수장려금과 중복불가)
        </div>
        <div>1유형 : 최대 300만원(50만원 X 6개월)</div>
        <div>2유형 : 월 최대 28만 4천원(X 최장 6개월)</div>
        <div>
          자격증 검정료 : 정보처리기사, JLPT N2등 직무연계 시험료 지원(1회 한정)
        </div>
      </SpecialText>

      <SpecialTitle>
        <Img src={employmentBenefits} alt="employment" />
        취업특전
      </SpecialTitle>
      <SpecialText>
        <div>수료예정자 협약기업 채용설명회 및 면접을 통한 우선채용 전형</div>
        <div>사전 채용설명회를 통한 개별 취업처 매칭기회 부여</div>
        <div>개별 인터뷰실습, 모의면접 컨설팅</div>
        <div>상시 온라인 면접(ZOOM, 구글미트), 교육센터 방문면접 진행</div>
      </SpecialText>

      <SpecialTitle>
        <Img src={training} alt="training" />
        훈련기술자원
      </SpecialTitle>
      <SpecialText>
        <div>
          훈련용 클라우드
          <br />
          (AWS등 데이터 활용 클라우드)
        </div>
        <div>
          데이터셋, 트레이더등 필요한
          <br />
          현업 기술자원 제공
        </div>
        <div>운영기관 개발자 현업 특강지원</div>
      </SpecialText>

      <SpecialTitle>
        <Img src={etc} alt="etc" />
        기타
      </SpecialTitle>
      <SpecialText>
        <div>
          취업 근속기간에 따른 해외정착지원금
          <br />
          지급<span>(총 500만원)</span>
          <br />
          <span>(1개월 250만원, 6개월 100만원, 12개월 150만원)</span>
        </div>
        <div>
          (※ 2025년 가구원 전체 건강보험료 합산액 <span>(629,110)</span>
          <br />
          이하만 신청가능)
        </div>
        <div>강의실 사용 지원 : 야간 및 주말 오픈</div>
        <div>학습 및 진로상담을 위한 상시 상담채널 운용</div>
      </SpecialText>
    </Wrapper>
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
