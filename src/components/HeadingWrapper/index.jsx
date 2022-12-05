import gsap from 'gsap';
import { useEffect, useRef } from 'preact/hooks';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { learnWrapper, resumeWrapper, summaryWrapper } from './index.styles';

function HeadingWrapper(props) {
  const ref = useRef(null);
  useEffect(() => {
    if (!props.menuOpened) {
      gsap.to(ref.current, {
        opacity: 0,
      });
    } else {
      gsap.to(ref.current, {
        opacity: 1,
      });
    }
  }, [props.menuOpened]);

  return (
    <div ref={ref}>
      <div className={summaryWrapper}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Approach</li>
          <li>Work</li>
          <li>News</li>
        </ul>
      </div>
      <p className={resumeWrapper}>
        Harmony Labs is a media research studio that combines the power of data,
        science, and creativity to research and reshape our relationship with
        media.
      </p>
      <div className={learnWrapper}>
        Learn More
        <MdOutlineArrowBackIos
          style={{
            transform: 'rotate(180deg)',
          }}
          size={20}
        />
      </div>
    </div>
  );
}

export default HeadingWrapper;
