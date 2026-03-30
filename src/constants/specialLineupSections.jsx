import React from 'react';
import training from '../assets/images/training_techniques.png';
import etc from '../assets/images/etc.png';
import costSupport from '../assets/images/cost_support.png';
import employmentBenefits from '../assets/images/employment_benefits.png';

//* 모바일·데스크톱 동일 문구 — 카피 수정 시 이 파일만 보면 됨
export const SPECIAL_LINEUP_SECTIONS = [
  {
    key: 'cost',
    label: '비용지원',
    icon: costSupport,
    body: (
      <>
        <div>
          전 연수과정 100% 국비지원과정
          <br />
          (자부담금 없음)
        </div>
        <div>
          연수생 숙박비 지원 (월 최대 20만) : 지원요건 충족 개별안내
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
      </>
    ),
  },
  {
    key: 'employment',
    label: '취업특전',
    icon: employmentBenefits,
    body: (
      <>
        <div>수료예정자 협약기업 채용설명회 및 면접을 통한 우선채용 전형</div>
        <div>사전 채용설명회를 통한 개별 취업처 매칭기회 부여</div>
        <div>개별 인터뷰실습, 모의면접 컨설팅</div>
        <div>상시 온라인 면접(ZOOM, 구글미트), 교육센터 방문면접 진행</div>
      </>
    ),
  },
  {
    key: 'training',
    label: '훈련기술자원',
    icon: training,
    body: (
      <>
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
      </>
    ),
  },
  {
    key: 'etc',
    label: '기타',
    icon: etc,
    body: (
      <>
        <div>
          취업 근속기간에 따른 해외정착지원금
          <br />
          지급<span>(총 500만원)</span>
          <br />
          <span>(1개월 250만원, 6개월 100만원, 12개월 150만원)</span>
        </div>
        <div>
          (※ 2026년 가구원 전체 건강보험료 합산액 <span>(215,000)</span>
          이하만 신청가능)
        </div>
        <div>
          (만 34세 이하인자(26년 기준 1991.1.1 이후 출생자, 군복무자 연장가능)
        </div>
        <div>강의실 사용 지원 : 야간 및 주말 오픈</div>
        <div>학습 및 진로상담을 위한 상시 상담채널 운용</div>
      </>
    ),
  },
];
