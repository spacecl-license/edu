import { styled } from 'styled-components';
import banner1 from '../assets/images/banner1.svg';
import banner2 from '../assets/images/banner2.svg';
import banner3 from '../assets/images/banner3.svg';
import banner4 from '../assets/images/banner4.svg';
import { Link } from 'react-router-dom';

export default function FloatingBannerMobile() {
  const kakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('cc070c6c13d3847a59320562ae6d84bb');
      }
    }

    window.Kakao.Channel.chat({
      channelPublicId: '_xnYuNG',
    });
  };

  return (
    <Wrapper>
      <Banner>
        <BannerText
          onClick={() => (document.location.href = 'tel:0269588204')}
          style={{
            background: '#2674FF',
            color: 'white',
            flexDirection: 'column',
          }}
        >
          <div>대표문의</div>
          <div
            style={{ fontSize: '0.6rem', fontWeight: '600', lineHeight: '8px' }}
          >
            <span style={{ fontSize: '0.4rem' }}>(02)</span>6958
          </div>
          <div
            style={{ fontSize: '0.6rem', fontWeight: '600', lineHeight: '8px' }}
          >
            8204
          </div>
        </BannerText>
        <Link to="/">
          <BannerText>
            <img
              src={banner1}
              alt="banner"
              style={{ width: '14px', height: '14px' }}
            />
            <div>HOME</div>
          </BannerText>
        </Link>
        <Link to="/track1">
          <BannerText>
            <img
              src={banner2}
              alt="banner"
              style={{ width: '14px', height: '14px' }}
            />
            <div>교육과정</div>
          </BannerText>
        </Link>
        <Link to="/consulting">
          <BannerText>
            <img
              src={banner3}
              alt="banner"
              style={{ width: '14px', height: '14px' }}
            />
            <div>수강신청</div>
          </BannerText>
        </Link>
        <BannerText onClick={kakao} style={{ borderBottom: 'none' }}>
          <img
            src={banner4}
            alt="banner"
            style={{ width: '14px', height: '14px' }}
          />
          <div>카톡상담</div>
        </BannerText>
      </Banner>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 40%;
  right: 0;
  z-index: 100;
  border: 1px solid lightgray;
`;

const Banner = styled.div`
  width: 40px;
  height: 200px;
  background-color: #ffffff;
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-bottom: 1px solid lightgray;
  gap: 3px;
  cursor: pointer;

  > div {
    font-size: 0.5rem;
    font-family: Pretendard, sans-serif;
`;
