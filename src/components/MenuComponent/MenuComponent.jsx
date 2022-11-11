import { css } from 'goober';

let wrapper = (props) => {
  return css({
    position: 'fixed',
    top: props.ydisplacement,
    left: props.xdisplacement,
    backgroundColor: props.backgroundcolor,
  });
};

export const MenuComponent = (props) => {
  return <button className={wrapper(props)}>MENU</button>;
};
