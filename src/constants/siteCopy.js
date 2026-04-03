/**
 * 자주 수정되는 카피 단일 소스
 * 모바일·데스크톱 문구가 다르면 mobile / desktop 키로 분리
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 색인 (아래 객체 키 → 화면·파일)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * programIntro     → /track 트랙 Ⅰ·Ⅱ 카드 (track1Card.jsx, track1Card_mobile.jsx)
 * traineeBenefits→ 「연수생 특전」회색 바 제목 (track1.jsx, track2.jsx)
 *                  ※ 특전 본문(비용지원 등)은 constants/specialLineupSections.jsx
 * introduce        → 소개 페이지 연혁 (introduce_history.jsx, introduce_history_mobile.jsx)
 * forms            → 지원하기/상담 폼의 연수과정 선택 (form.jsx, form_mobile.jsx,
 *                    consulting/consultingForm.jsx, consultingForm_mobile.jsx)
 * programFeatures  → 「프로그램 특징」 (/track track1Program·track2Program + _mobile)
 * footer           → 푸터 (footer.jsx, footer_mobile.jsx)
 * hq               → 본사 찾아오는 길 (track/track1_location.jsx, track1_location_mobile.jsx)
 * directions       → 메인 「찾아오시는 길」교육장 (main/location.jsx, location_mobile.jsx)
 * mainTrack        → 메인 중단 트랙 카드 문구 (main/mainTrack.jsx, mainTrack_mobile.jsx)
 * mainSlider       → 메인 히어로 슬라이더 (mainslider.jsx, mainslider_mobile.jsx)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

export const SITE_COPY = {
  // ─── /track — 프로그램 소개 카드 (상단 파란 바 + 트랙 Ⅱ·Ⅰ 카드) ───
  // track1Card.jsx · track1Card_mobile.jsx
  programIntro: {
    banner: 'K-Move 일본 IT기업 취업 국비 무료 교육',
    sectionTitle: '프로그램 소개',
    fieldLabels: {
      period: '연수기간',
      place: '연수장소',
      cost: '연수비용',
      capacity: '연수인원',
    },
    applyOpen: '지원하기', // 지원하기 버튼 라벨
    applyClosed: '모집마감', // 모집마감 버튼 라벨
    /** 트랙 Ⅱ 카드 (목록 위쪽 카드) */
    track2: {
      titleDesktop: '일본취업반 K-Move 트랙 Ⅱ ',
      titleMobileLines: ['일본취업반 K-Move ', '트랙 Ⅱ'],
      subtitleLine1: '2026년 일본취업 AI·클라우드 활용',
      subtitleLine2: '풀스택 개발자 양성과정',
      periodDesktop:
        '2026년 6월 30일  - 2026년 12월 30일 (총 27주, 964시간)',
      periodMobileLine1: '2026년 6월 30일  - 2026년 12월 30일',
      periodMobileLine2: '(총 27주, 964시간)',
      placeDesktop:
        '한국소프트웨어인재개발원(가산디지털단지역 8번출구 도보 5분 내)',
      placeMobileLines: [
        '한국소프트웨어인재개발원',
        '(가산디지털단지역 8번출구 도보 5분 내)',
      ],
      cost: '100% 국비지원 무료교육',
      capacity: '정원 20명 선착순 선발',
      recruitingOpen: true, // false면 버튼이 모집마감(비활성)
    },
    /** 트랙 Ⅰ 카드 (목록 아래쪽 카드) */
    track1: {
      titleDesktop: '일본취업반 K-Move 트랙 Ⅰ ',
      titleMobileLines: ['일본취업반 K-Move ', '트랙 Ⅰ'],
      subtitleLine1: '2025년 일본취업 산업융합',
      subtitleLine2: 'IT•SW 전문가 양성과정',
      periodDesktop: '2025년 6월 3일 - 2025년 11월 27일 (총 26주, 928시간)',
      periodMobileLine1: '2025년 6월 3일 - 2025년 11월 27일',
      periodMobileLine2: '(총 26주, 928시간)',
      placeDesktop:
        '한국소프트웨어 인재개발원(가산디지털단지역 도보 5분 내)',
      placeMobileLines: [
        '한국소프트웨어 인재개발원',
        '(가산디지털단지역 도보 5분 내)',
      ],
      cost: '100% 국비지원 무료교육',
      capacity: '15명 선착순 지원',
      recruitingOpen: false,
    },
  },

  // ─── 「연수생 특전」회색 가로 바 제목만 (특전 본문은 specialLineupSections.jsx) ───
  // track1.jsx · track2.jsx (Desktop/Mobile 각각)
  traineeBenefits: {
    barTitle: '연수생 특전',
  },

  // ─── 소개(Introduce) 페이지 — History 연혁 타임라인 ───
  // introduce_history.jsx · introduce_history_mobile.jsx
  introduce: {
    historyTitle: 'History',
    historyEntries: [
      {
        year: '2025 ~ 현재',
        lines: [
          'K-Move 일본취업 IT·SW 전문가 양성과정(트랙Ⅰ)승인 및 운영',
          'K-Move 일본취업 클라우드 기반 풀스택 웹개발자 양성과정(트랙Ⅱ)승인 및 운영',
          'dataX, BREXA, MINOSYS, NOVOS, GIS, AOBA등 일본 우수 IT기업 채용협약 확대',
          'SW개발본부 인턴십제도 도입 및 LMS 데모버전 툴 상용화',
        ],
      },
      {
        year: '2024',
        lines: [
          'K-Move 일본취업 산업융합 소프트웨어 전문가 양성과정(트랙Ⅰ) 승인 및 운영',
          'K-Move 일본취업 클라우드 기반 풀스택 웹개발자 양성과정(트랙Ⅱ) 승인 및 운영',
          'ANEX, TON SOFT등 기업인사 혁신자문위원회 구성',
          'G밸리 소프트웨어 데모 시연회 공동주관(큐비트온)',
          '연수과정-스페이스씨엘 프로젝트 멘토 협업툴 개발/적용',
        ],
      },
      {
        year: '2023',
        lines: [
          '코이카-페루 온라인 창업교육 플랫폼 유지보수',
          '국가 민방위 재난 안전 교육원 ASEAN 교육 운영 플랫폼 구축',
          '아시아경제 교육센터 MOU 체결',
          '한국소프트웨어 아이엔씨 인재개발원 MOU 체결',
          'ANEX, TON SOFT, 브라이트 스타, CMS등 일본 우수기업등과 채용협약',
        ],
      },
      {
        year: '2022',
        lines: [
          '‘주식회사 스페이스 씨엘’ IT 개발 법인 회사 설립',
          '학생 창업 유망팀 300 페스티벌 온라인 시스템 운영지원',
          'KDB 청년 창업 지원사업 홈페이지 유지보수',
          'JA-삼성 창업 놀이터 교육운영 플랫폼 유지보수',
          'NFT 대량미팅 등록 및 코인 결제 서비스 구축',
        ],
      },
      {
        year: '2021',
        lines: [
          '스타트업 둥지 3차년도 홈페이지 운영 유지보수',
          '학생 창업 유망팀 300 페스티벌 온라인 시스템 구축 용역',
          '자동 매매 시스템 개발',
          'SK 출입관리 시스템 개발',
          '전시 예약, 결제 동의 업무를 위한 시스템 개발 (일본 도쿄 국립 예술단)',
        ],
      },
      {
        year: '2020',
        lines: [
          '스타트업 둥지 온라인 시스템 구축',
          '탈중앙화 블록체인 Wallet 서비스 개발',
          '블록체인 코인 관리 시스템 개발',
          '자동 매매 시스템 개발',
        ],
      },
      {
        year: '2019',
        lines: [
          '창업교육 플랫폼 유지보수',
          '창업 허브 스타트업 플러스 기능개선 용역',
          '자금 세탁 방지 시스템(AML) 구축 사업지원',
          'AP몰 통합사원 프론트 / 백엔드 개발',
          '그룹웨어 및 이랜드 리테일 ECS 시스템 리뉴얼',
          '거래소 관련 안드로이드, IOS 앱 개발',
        ],
      },
      {
        year: '2018',
        lines: [
          '산학협력 선도대학 육성사업 종합성과관리 시스템 유지보수',
          'LINC+종합성과 관리 시스템 유지보수사업',
          'KDB 청년 창업 지원사업 홈페이지 및 평가 시스템 개편',
          '온라인 창업교육 플랫폼 유지보수',
          '잠재적 청년 창업가 발굴 육성 프로그램 사업페이지 구축',
          '주거 / 사무 통합형 창업 지원사업 플랫폼 구축',
          '잠재적 청년 창업가 발굴 육성 프로그램 사업 플랫폼 구축',
          'AI 기반 챗봇 톡 상담 시스템 구축 및 운영지원',
        ],
      },
    ],
  },

  // ─── 지원/상담 폼 — 「지원하는 연수과정」 라벨·셀렉트 옵션 ───
  // form.jsx · form_mobile.jsx · consulting/consultingForm.jsx · consultingForm_mobile.jsx
  forms: {
    courseFieldLabel: '지원하는 연수과정은 무엇입니까?',
    courseOptions: [
      {
        value:
          '2026년 일본취업 AI·클라우드 활용 풀스택 개발자 양성과정(6월 30일 개강)',
        label:
          '2026년 일본취업 AI·클라우드 활용 풀스택 개발자 양성과정(6월 30일 개강)',
      },
    ],
  },

  // ─── /track·track2 「프로그램 특징」 섹션(인트로 불릿 + 3열 카드) ───
  // track1Program.jsx · track1Program_mobile.jsx · track2/track2Program.jsx · track2Program_mobile.jsx
  programFeatures: {
    sectionTitle: '프로그램 특징',
    /** K-Move /track 페이지 (트랙 Ⅰ·Ⅱ 공통 과정 소개에 사용) */
    track1: {
      introDesktop: [
        'IT 프로그래밍과 일본어의 다중 역량이 요구되는 교육특성에 맞는 특화과정으로 편성',
        'ICT 기술 기반의 다양한 산업현장에서 활용되는 소프트웨어 통합 확산기술 접목',
        '신입 WEB 개발에 특화된 개발환경 & 적용기술 학습',
        '일본 현지기업의 요구사항이 절대적으로 높은 일본어 활용능력 반영(실무응용, 비즈니스 일어)',
        '취업 및 비자발급에 필요한 JLPT N2 취득교과를 별도로 편성하여 자격증 취득 지원',
        '각 과정별 목표달성을 위한 최적화된 연수시간 설계',
        'IT/일본어 입문자, 비전공자를 위한 맞춤형 교재 선정',
        '채용 협약기업 20개사 이상 직접 취업연계',
      ],
      introMobile: [
        'IT 프로그래밍과 일본어의 다중 역량이\n요구되는 교육특성에 맞는 특화과정으로 편성',
        'ICT 기술 기반의 다양한 산업현장에서\n활용되는 소프트웨어 통합 확산기술 접목',
        '신입 WEB 개발에 특화된 \n개발환경 & 적용기술 학습',
        '일본 현지기업의 요구사항이 절대적으로\n높은 일본어 활용능력 반영(실무응용, 비즈니스 일어)',
        '취업 및 비자발급에 필요한 JLPT N2\n취득교과를 별도로 편성하여 자격증 취득 지원',
        '각 과정별 목표달성을 위한 최적화된\n연수시간 설계',
        'IT/일본어 입문자, 비전공자를 위한\n맞춤형 교재 선정',
        '채용 협약기업 20개사 이상 직접 취업연계',
      ],
      cards: [
        {
          title: '연수내용',
          box: '교육 집중지원',
          lines: [
            '· 전공/비전공 불문 참여가능',
            '· IT 프로그래밍 실습집중 코스',
            '· 일어회화 초급~고급 강의',
            '· 비즈니스 실용회화 강의',
            '· 전반적인 일어 문법, 작문 강의',
            '· 스터디반 팀별 운용',
          ],
        },
        {
          title: '다양한 취업 역량강화 프로그램',
          box: '다양한 취업 역량강화 프로그램',
          lines: [
            '· 일본기업 방문 특강, 채용설명회',
            '· 협약기업 온오프라인 면접',
            '· 기업실무 문서스킬 특강',
            '· IT 실무 멘토링 트레이딩',
            '· 이력서클리닉(현업 전문가 초빙)',
            '· 모의면접 진행(전담강사)',
            '· 협약기업 추천제, 우선채용 전형',
          ],
        },
        {
          title: '협약기업 채용 및 비자발급',
          box: '협약기업 채용 및 비자발급',
          linesDesktop: [
            '· 협약기업 다이렉트 매칭',
            '· 고용계약 지원 및 조건협의',
            '· 비자발급등 입사지원',
            '· 이직상담 및 이직지원',
            '· 사후관리, 상시 상담지원',
            '· 일본 IT 우수협약기업 20여개사↑',
            '\u00A0\u00A0직접채용',
          ],
          linesMobile: [
            '· 협약기업 다이렉트 매칭',
            '· 고용계약 지원 및 조건협의',
            '· 비자발급등 입사지원',
            '· 이직상담 및 이직지원',
            '· 사후관리, 상시 상담지원',
            '· 일본 IT 우수협약기업 ',
            '\u00A0\u00A020여개사↑ 직접채용',
          ],
        },
      ],
    },
    /** track2 전용 페이지 프로그램 특징(문구가 track1과 다름) */
    track2: {
      introDesktop: [
        'IT 프로그래밍과 일본어의 다중 역량이 요구되는 교육특성에 맞는 특화과정으로 편성',
        'ICT 기술 기반의 다양한 산업현장에서 활용되는 소프트웨어 통합 확산기술 접목',
        '높은 수준의 WEB 개발에 특화된 개발환경 적용기술 학습',
        '일본 현지기업의 요구사항이 절대적으로 높은 일본어 활용능력 반영(실무응용, 비즈니스 일어)',
        '취업 및 비자발급에 필요한 JLPT N2 취득교과를 별도로 편성하여 자격증 취득 지원',
        '각 과정별 목표달성을 위한 최적화된 연수시간 설계',
        'IT/일본어 입문자, 비전공자를 위한 맞춤형 교재 선정',
        '채용 협약기업 15개사 이상 직접 취업연계',
      ],
      introMobile: [
        'IT 프로그래밍과 일본어의 다중 역량이\n요구되는 교육특성에 맞는 특화과정으로 편성',
        'ICT 기술 기반의 다양한 산업현장에서\n활용되는 소프트웨어 통합 확산기술 접목',
        '높은 수준의 WEB 개발에 특화된\n개발환경 적용기술 학습',
        '일본 현지기업의 요구사항이 절대적으로\n높은 일본어 활용능력 반영(실무응용, 비즈니스 일어)',
        '취업 및 비자발급에 필요한 JLPT N2\n취득교과를 별도로 편성하여 자격증 취득 지원',
        '각 과정별 목표달성을 위한 최적화된\n연수시간 설계',
        'IT/일본어 입문자, 비전공자를 위한\n맞춤형 교재 선정',
        '채용 협약기업 15개사 이상 직접 취업연계',
      ],
      cards: [
        {
          title: '연수내용',
          box: '교육 집중지원',
          linesDesktop: [
            '전공/비전공 불문 참여가능',
            'IT 프로그래밍 실습집중 코스',
            '일어회화 초급~고급 강의',
            '비즈니스 실용회화 강의',
            '전반적인 일어 문법, 작문 강의',
            '스터디반 팀별 운용',
          ],
          linesMobile: null,
        },
        {
          title: '다양한 취업 역량강화 프로그램',
          box: '다양한 취업 역량강화 프로그램',
          linesDesktop: [
            '일본기업 교육센터 방문 특강',
            '이력서클리닉(현업 전문가 진행)',
            '기업실무 문서스킬 강의',
            '수료 전 협약기업',
            '회사설명회, 채용설명회 진행',
            '모의면접(일본지사 담당자)',
            '면접전형(협약기업 우선채용)',
          ],
          linesMobile: null,
        },
        {
          title: '협약기업 채용 및 비자발급',
          box: '협약기업 채용 및 비자발급',
          linesDesktop: [
            'ANEX등 15여개사↑ 협약기업',
            '고용계약 지원 및 조건협의',
            '비자발급등 입사지원',
            '일본지사(도쿄소재) 담당자를',
            '통한 사후관리(1년)',
            '이직상담 및 이직지원',
            '사후관리 SNS를 통한 상담지원',
          ],
          linesMobile: [
            'ANEX등 15여개사↑ 협약기업',
            '고용계약 지원 및 조건협의',
            '비자발급등 입사지원',
            '일본지사(도쿄소재) 담당자를 통한',
            '사후관리(1년)',
            '이직상담 및 이직지원',
            '사후관리 SNS를 통한 상담지원',
          ],
        },
      ],
    },
  },

  // ─── 전역 푸터 ───
  // footer.jsx (desktop) · footer_mobile.jsx
  footer: {
    desktop: {
      companyLead: '(주)스페이스씨엘에듀',
      addressLine:
        '서울특별시 금천구 가산디지털2로 123, 월드메르디앙2차 1306호',
      bizRegLabel: '사업자 등록번호 :',
      bizReg: '495-81-03640',
      ceoLabel: '대표 :',
      ceo: '이형도',
      telLabel: 'Tel',
      tel: '02-6958-8204',
      emailLabel: 'E-mail',
      email: 'spacecl.track@gmail.com',
    },
    mobile: {
      companyLine: '(주)스페이스씨엘',
      addressLine1: '서울특별시 금천구 가산디지털2로 123',
      addressLine2: '월드메르디앙2차 1306호',
      bizRegLabel: '사업자 등록번호 :',
      bizReg: '495-81-03640',
      ceoLabel: '대표 :',
      ceo: '이형도',
      telLabel: 'Tel',
      tel: '02-6958-8204',
      emailLabel: 'E-mail',
      email: 'spacecl.track@gmail.com',
    },
  },

  // ─── 본사 오시는 길 (가산퍼블릭 맵 영역) ───
  // track/track1_location.jsx · track/track1_location_mobile.jsx
  hq: {
    pageTitle: '(본사) 주식회사 스페이스씨엘',
    subtitles: { en: 'LOCATION' },
    labels: { address: '주소', phone: '전화', subway: '지하철' },
    desktop: {
      address:
        '서울특별시 금천구 가산동 60-26 가산퍼블릭 제 B동 2015호 2016호 (주)스페이스씨엘',
      phone: '02-6958-8204',
      subway: '1호선 또는 7호선 가산디지털단지역 6번 출구 도보 5분',
    },
    mobile: {
      address:
        '서울특별시 금천구 가산동 60-26 가산퍼블릭 제 B동 2015호 2016호',
      phone: '02-6958-8204',
      subway: '가산디지털단지역 8번 출구 도보 5분 이내',
    },
  },

  // ─── 메인 페이지 「찾아오시는 길」— 교육장(월드메르디앙 등) ───
  // main/location.jsx · main/location_mobile.jsx
  directions: {
    title: '찾아오시는 길',
    subtitle: 'LOCATION',
    labels: { address: '주소', phone: '전화', subway: '지하철' },
    desktop: {
      address:
        '서울특별시 금천구 가산디지털2로 123, 월드메르디앙2차 4층 415호',
      phone: '02) 6958-8204',
      subway: '가산디지털단지역 8번 출구 도보 5분 이내',
    },
    mobile: {
      address:
        '서울특별시 금천구 가산디지털2로 123, 월드메르디앙2차 4층 415호',
      phone: '02-6958-8204',
      subway: '가산디지털단지역 8번 출구 도보 5분 이내',
    },
  },

  // ─── 메인 페이지 중단 — 큰 트랙 이미지 카드 텍스트 ───
  // main/mainTrack.jsx · main/mainTrack_mobile.jsx
  mainTrack: {
    /** 카드 본문 2줄(<br /> 앞뒤). 데스크톱/모바일 따로 두면 줄바꿈·표기 다르게 가능 */
    cardText: {
      desktop: {
        line1: 'K-Move(Track)',
        line2: '2026년 일본취업 IT•SW•ICT 과정',
      },
      mobile: {
        line1: 'K-Move(TRACK Ⅱ)',
        line2: '2026년 일본취업 IT·SW·ICT 과정',
      },
    },
  },

  // ─── 메인 최상단 히어로 슬라이더 ───
  // mainslider.jsx · mainslider_mobile.jsx
  // slides: 노출 순서만 바꿔도 1·3번만 쓰기 등 가능 / image=배경 에셋, kind=문구 템플릿
  mainSlider: {
    slides: [
      { id: 'slide-1', image: 'slide1', kind: 'recruiting' },
      { id: 'slide-3', image: 'slide3', kind: 'trend' },
    ],
    /** kind: recruiting 인 슬라이드에 사용 */
    recruiting: {
      bigText: '일본취업 연수과정 연수생 모집 중',
      smallText:
        '2026년 K-Move 일본취업 AI·클라우드 활용 풀스택 개발자 양성과정(모집중)',
    },
    /** kind: trend 인 슬라이드 — 데스크톱은 bigTextDesktop, 모바일은 bigTextMobileLines */
    trend: {
      bigTextDesktop:
        '국내, 일본 최신 트렌드에 맞춘 IT 핵심 기술을 반영한 연수과정',
      bigTextMobileLines: [
        '국내, 일본 최신 트렌드에 맞춘',
        'IT 핵심 기술을 반영한 연수과정',
      ],
      smallLine1: '기업형 글로벌 아카데미 스페이스씨엘',
      smallLine2: '맞춤형 교육으로 글로벌 취업의 첫걸음!',
    },
    /** 슬라이드 우측(데스크톱) / 하단(모바일) 일본어 패널 */
    japanesePanel: {
      title: 'K-Move스쿨 일본취업반',
      bullets: [
        '· IT Programming+일본어',
        '· 채용약정기업 추천매칭',
        '· 전액 무료 / 교육생 모집중',
      ],
    },
    /** 모바일만: 모집 슬라이드 small 아래 강조 span */
    mobileOnly: {
      recruitingBadge: '연수생 모집중',
    },
  },
};

export default SITE_COPY;
