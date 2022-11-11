import { css } from 'goober';
import gsap from 'gsap';
import { useRef } from 'preact/hooks';

let mainWrapper = (props) => {
  return css({
    position: 'fixed',
    top: props.ydisplacement,
    left: props.xdisplacement,
    backgroundColor: props.backgroundcolor,
  });
};

let buttonWrapper = (props) => {
  return css({
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: props.backgroundcolor,
    zIndex: 1,
  });
};

let divWrapper = css`
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(0);
  transform-origin: top left;
  z-index: 2;
`;

export const MenuComponent = (props) => {
  const divRef = useRef(null);

  const openMenu = () => {
    gsap.to(divRef.current, {
      scale: 1,
    });
  };

  return (
    <div className={mainWrapper(props)}>
      <div ref={divRef} className={divWrapper} />
      <button onClick={openMenu} className={buttonWrapper(props)}>
        MENU
      </button>
    </div>
  );
};
