import gsap, { Power2 } from 'gsap';
import { useEffect, useRef, useState } from 'preact/hooks';
import {
  arrowButtonWrapper,
  emailFooter,
  harmonyLogoWrapper,
  headingWrapper,
  mainWrapper,
  resumeWrapper,
  upperResume,
} from './index.styles';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import HeadingWrapper from '../components/HeadingWrapper';
import { glob } from 'goober';

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

  glob`
  html {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }
`;

  return (
    <>
      <div className={mainWrapper} ref={wrapperRef}>
        <div>
          <div className={headingWrapper}>
            <div>
              <div className={harmonyLogoWrapper} />
              <h1>Harmony Labs</h1>
            </div>
            <button
              className={arrowButtonWrapper}
              onClick={openMenu}
              ref={arrowRef}
            >
              <MdOutlineArrowBackIos size={20} />
            </button>
          </div>
          <HeadingWrapper menuOpened={menuOpened} />
        </div>
        <div>
          <p className={upperResume}>NewsLetter</p>
          <p className={resumeWrapper}>Subscribe for regular updates</p>
          <div className={emailFooter}>
            Email Address
            <MdOutlineArrowBackIos
              style={{
                transform: 'rotate(180deg)',
              }}
              size={20}
            />
          </div>
        </div>
      </div>
    </>
  );
};
