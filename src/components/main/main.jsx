import React from 'react';
import styled from 'styled-components';
import PortfolioSlider from '../portfolioslider';
import MainSlider from '../mainslider';
import MainTrack from './mainTrack';
import Location from './location';
import { Desktop, Mobile } from '../responsive';
import MainSliderMobile from '../mainslider_mobile';
import MainTrackMobile from './mainTrack_mobile';
import PortfolioSliderMobile from '../portfoliosliderMobile';
import LocationMobile from './location_mobile';
import Portfolio from '../../assets/images/portfolio.png';
import PortfolioMobile from '../../assets/images/portfolio-mobile.png';

export default function Main() {
  return (
    <RootWrapper>
      {/* 메인 슬라이더 */}
      <Desktop>
        <MainSlider />
      </Desktop>
      <Mobile>
        <MainSliderMobile />
      </Mobile>

      {/* 트랙 */}
      <Desktop>
        <MainTrack />
      </Desktop>
      <Mobile>
        <MainTrackMobile />
      </Mobile>

      {/* 포트폴리오 */}
      <Desktop>
        {/* <PortfolioSlider /> */ <img src={Portfolio} alt="" />}
      </Desktop>
      <Mobile>
        <PortfolioSliderMobile />
        {/* <div
          style={{
            width: '100%',
          }}
        >
          <img
            src={PortfolioMobile}
            alt=""
            style={{
              width: '100%',
            }}
          />
        </div> */}
      </Mobile>

      {/* 찾아오시는 길 */}
      <Desktop>
        <Location />
      </Desktop>
      <Mobile>
        <LocationMobile />
      </Mobile>
    </RootWrapper>
  );
}

const RootWrapper = styled.div`
  min-height: 100vh;
  background-color: white;
`;
