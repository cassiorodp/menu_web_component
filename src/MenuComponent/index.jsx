import gsap, { Power2 } from 'gsap';
import { useEffect, useRef, useState } from 'preact/hooks';
import GlobalStyle from './GlobalStyles';
import {
  ArrowButton,
  EmailFooter,
  FooterWrapper,
  HarmonyLogo,
  Heading,
  Resume,
  Wrapper,
} from './index.styles';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import HeadingWrapper from '../components/HeadingWrapper';

export const MenuComponent = (props) => {
  const wrapperRef = useRef(null);
  const arrowRef = useRef(null);
  const timeline = useRef(null);
  const [menuOpened, setMenuOpened] = useState(true);

  useEffect(() => {
    timeline.current = gsap
      .timeline({
        defaults: { duration: 0.6, ease: Power2.easeInOut },
      })
      .to(arrowRef.current, {
        rotation: -90,
      })
      .to(
        wrapperRef.current,
        {
          width: 245,
          height: 92,
        },
        '<'
      )
      .reversed(true);

    return timeline.current.kill();
  }, []);

  const openMenu = () => {
    setMenuOpened((menuOpened) => !menuOpened);
    timeline.current.reversed(!timeline.current.reversed());
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper ref={wrapperRef}>
        <div>
          <Heading>
            <div>
              <HarmonyLogo />
              <h1>Harmony Labs</h1>
            </div>
            <ArrowButton onClick={openMenu} ref={arrowRef}>
              <MdOutlineArrowBackIos size={20} />
            </ArrowButton>
          </Heading>
          <HeadingWrapper menuOpened={menuOpened} />
        </div>
        <FooterWrapper>
          <Resume upper>NewsLetter</Resume>
          <Resume fontSize="2.4rem">Subscribe for regular updates</Resume>
          <EmailFooter>
            Email Address
            <MdOutlineArrowBackIos
              style={{
                transform: 'rotate(180deg)',
              }}
              size={20}
            />
          </EmailFooter>
        </FooterWrapper>
      </Wrapper>
    </>
  );
};
