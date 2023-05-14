import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
import "../containers/CryptoModern/CountDown/timer.css";
import "common/assets/css/icon-example-page.css";
// swiper bundle styles
import "swiper/css/bundle";
import "common/assets/css/react-slick.css";
import "common/assets/css/rc-collapse.css";
import "rc-collapse/assets/index.css";
import { charityTheme } from "common/theme/charity";
import { ThemeProvider } from "styled-components";
import {
  CharityWrapper,
  ContentWrapper,
  GlobalStyle,
} from "containers/Charity/charity.style";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import DrawerSection from "containers/Charity/DrawerSection";
import Footer from "containers/Charity/Footer";
import ResetCSS from "common/assets/css/style";
import Navbar from "containers/Charity/Navbar";

export default function CustomApp({ Component, pageProps }) {
  console.log(Component);
  return (
    <ThemeProvider theme={charityTheme}>
      <Modal>
        <ResetCSS />
        <GlobalStyle />
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar/>
          </Sticky>
          <DrawerProvider>
            <DrawerSection />
          </DrawerProvider>
          <ContentWrapper>
            <Component {...pageProps} />
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
      </Modal>
    </ThemeProvider>
  );
}
