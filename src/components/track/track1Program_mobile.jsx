import styled from 'styled-components';
import bestIcon from '../../assets/images/bestIcon.svg';
import trackIcon1 from '../../assets/images/trackIcon1.svg';
import trackIcon2 from '../../assets/images/trackIcon2.svg';
import trackIcon3 from '../../assets/images/trackIcon3.svg';

export default function Track1ProgramMobile() {
  return (
    <Wrapper>
      <Group1>
        <div>
          <Program>프로그램 특징</Program>
          <div>
            <span>
              <div style={{ lineHeight: '30px' }}>⦁</div>
              <ProgramText>
                IT 프로그래밍과 일본어의 다중 역량이
                <br />
                요구되는 교육특성에 맞는 특화과정으로 편성
              </ProgramText>
            </span>
            <span>
              <div style={{ lineHeight: '30px' }}>⦁</div>
              <ProgramText>
                ICT 기술 기반의 다양한 산업현장에서
                <br />
                활용되는 소프트웨어 통합 확산기술 접목
              </ProgramText>
            </span>
            <span>
              <div style={{ lineHeight: '30px' }}>⦁</div>
              <ProgramText>
                높은 수준의 WEB 개발에 특화된
                <br />
                개발환경 적용기술 학습
              </ProgramText>
            </span>
            <span>
              <div style={{ lineHeight: '30px' }}>⦁</div>
              <ProgramText>
                일본 현지기업의 요구사항이 절대적으로
                <br />
                높은 일본어 활용능력 반영(실무응용, 비즈니스 일어)
              </ProgramText>
            </span>
            <span>
              <div style={{ lineHeight: '30px' }}>⦁</div>
              <ProgramText>
                취업 및 비자발급에 필요한 JLPT N2
                <br />
                취득교과를 별도로 편성하여 자격증 취득 지원
              </ProgramText>
            </span>
            <span>
              <div style={{ lineHeight: '30px' }}>⦁</div>
              <ProgramText>
                각 과정별 목표달성을 위한 최적화된
                <br />
                연수시간 설계
              </ProgramText>
            </span>
            <span>
              <div style={{ lineHeight: '30px' }}>⦁</div>
              <ProgramText>
                IT/일본어 입문자, 비전공자를 위한
                <br />
                맞춤형 교재 선정
              </ProgramText>
            </span>
            <span>
              <div style={{ lineHeight: '30px' }}>⦁</div>
              <ProgramText>채용 협약기업 15개사 이상 직접 취업연계</ProgramText>
            </span>
          </div>
        </div>
      </Group1>
      <Group2>
        <ProgramCard>
          <BestIconGroup>
            <BestIcon src={bestIcon} alt="image" />
            <BestIcon src={bestIcon} alt="image" />
          </BestIconGroup>
          <ProgramCardTitle>연수내용</ProgramCardTitle>
          <Image src={trackIcon1} alt="image" />
          <ProgramCardBox>교육 집중지원</ProgramCardBox>
          <ProgramCardText>
            · 전공/비전공 불문 참여가능
            <br />
            · IT 프로그래밍 실습집중 코스
            <br />
            · 일어회화 초급~고급 강의
            <br />
            · 비즈니스 실용회화 강의
            <br />
            · 전반적인 일어 문법, 작문 강의
            <br />
            · 스터디반 팀별 운용
            <br />
            · 학습 미진자 및 저성과자 별도
            <br />· 보충수업 지원(IT, 일본어)
          </ProgramCardText>
        </ProgramCard>

        <ProgramCard>
          <BestIconGroup>
            <BestIcon src={bestIcon} alt="image" />
            <BestIcon src={bestIcon} alt="image" />
          </BestIconGroup>
          <ProgramCardTitle>다양한 취업 역량강화 프로그램</ProgramCardTitle>
          <Image src={trackIcon2} alt="image" />
          <ProgramCardBox>다양한 취업 역량강화 프로그램</ProgramCardBox>
          <ProgramCardText>
            · 일본기업 방문 특강, 채용설명회
            <br />
            · 협약기업 온오프라인 면접
            <br />
            · 기업실무 문서스킬 특강
            <br />
            · IT 실무 멘토링 트레이딩
            <br />
            · 이력서클리닉(현업 전문가 초빙)
            <br />
            · 모의면접(일본지사 및 전담강사)
            <br />· 협약기업 추천제, 우선채용 전형
          </ProgramCardText>
        </ProgramCard>

        <ProgramCard>
          <BestIconGroup>
            <BestIcon src={bestIcon} alt="image" />
            <BestIcon src={bestIcon} alt="image" />
          </BestIconGroup>
          <ProgramCardTitle>협약기업 채용 및 비자발급</ProgramCardTitle>
          <Image src={trackIcon3} alt="image" />
          <ProgramCardBox>협약기업 채용 및 비자발급</ProgramCardBox>
          <ProgramCardText>
            · TonSoft, ANEX등 15여개사 ↑직접채용
            <br />
            · 협약기업 다이렉트 매칭
            <br />
            · 고용계약 지원 및 조건협의
            <br />
            · 비자발급등 입사지원
            <br />
            · 일본지사(도쿄소재) 담당자를 통한 사후관리
            <br />
            · 이직상담 및 이직지원
            <br />· 사후관리, 상시 상담지원
          </ProgramCardText>
        </ProgramCard>
      </Group2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const Group1 = styled.div`
  width: 100%;
  height: 750px;
  background-color: rgb(248, 249, 250);
  display: flex;
  justify-content: center;
  padding: 0 20px;

  > div {
    width: 400px;
    height: 480px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 100px;

    > div {
      > span {
        display: flex;
        gap: 0.7rem;
      }
    }
  }
`;

const Group2 = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const ProgramCard = styled.div`
  width: 312px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
`;

const Program = styled.span`
  color: rgb(34, 34, 34);
  font-size: 1.5rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
`;

const ProgramText = styled.span`
  color: rgb(59, 66, 79);
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
  line-height: 190%;
`;

const BestIconGroup = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  left: 80%;
  top: 5%;
`;

const BestIcon = styled.img`
  width: 15px;
  height: 22px;
  object-fit: cover;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-top: 3rem;
`;

const ProgramCardText = styled.span`
  color: rgb(59, 66, 79);
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  width: 264px;
  margin-top: 2rem;
`;

const ProgramCardTitle = styled.span`
  color: rgb(10, 49, 119);
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 150%;
  text-align: center;
  margin-top: 4rem;
`;

const ProgramCardBox = styled.span`
  color: white;
  font-size: 1.1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border-radius: 8px;
  width: 264px;
  height: 46px;
  background-color: #0a3177;
  box-sizing: border-box;
  margin-top: 2rem;
`;
