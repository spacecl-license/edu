import React from 'react';
import Consulting from './components/consulting/consulting';
import Header from './components/header';
import Introduce from './components/introduce/introduce';
import Main from './components/main/main';
import Support from './components/support/support';
import Track1 from './components/track/track1';
// import Track2 from './components/track2/track2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Desktop, Mobile } from './components/responsive';
import HeaderMobile from './components/header_mobile';
// import TagManager from 'react-gtm-module';
import Footer from './components/footer';
import FooterMobile from './components/footer_mobile';
import RouteChangeTracker from './utils/routeChangeTracker';
import FloatingBanner from './components/floating_banner';
import FloatingBannerMobile from './components/floating_banner_mobile';
import ScrollToTop from './components/scroll_to_top';
import Inquiry from './components/inquiry/inquiry';

function App() {
  // const tagManagerArgs = {
  //   gtmId: 'GTM-P8WHG7T8'
  // }

  // useEffect(() => {
  //   TagManager.initialize(tagManagerArgs);
  //  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <ScrollToTop />
        {/* 구글 애널리틱스 */}
        <RouteChangeTracker />
        {/* header */}
        <Desktop>
          <Header />
        </Desktop>
        <Mobile>
          <HeaderMobile />
        </Mobile>

        <Desktop>
          <FloatingBanner />
        </Desktop>
        <Mobile>
          <FloatingBannerMobile />
        </Mobile>

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/track/*" element={<Track1 />}></Route>
          <Route path="/track2/*" element={<Track1 />}></Route>
          <Route path="/support/*" element={<Support />}></Route>
          <Route path="/consulting/*" element={<Consulting />}></Route>
          <Route path="/introduce/*" element={<Introduce />}></Route>
          <Route path="/inquiry/*" element={<Inquiry />}></Route>
        </Routes>
        {/* footer */}
        <Desktop>
          <Footer />
        </Desktop>
        <Mobile>
          <FooterMobile />
        </Mobile>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
