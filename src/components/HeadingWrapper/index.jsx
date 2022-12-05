import gsap from 'gsap';
import { useEffect, useRef } from 'preact/hooks';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { LearnWrapper, Resume, Summary } from './index.styles';

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
      <Summary>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Approach</li>
          <li>Work</li>
          <li>News</li>
        </ul>
      </Summary>
      <Resume>
        Harmony Labs is a media research studio that combines the power of data,
        science, and creativity to research and reshape our relationship with
        media.
      </Resume>
      <LearnWrapper>
        Learn More
        <MdOutlineArrowBackIos
          style={{
            transform: 'rotate(180deg)',
          }}
          size={20}
        />
      </LearnWrapper>
    </div>
  );
}

export default HeadingWrapper;
