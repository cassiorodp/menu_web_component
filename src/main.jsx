import register from 'preact-custom-element';
import { MenuComponent } from './components/MenuComponent/MenuComponent';

register(
  MenuComponent,
  'menu-component',
  ['backgroundcolor', 'xdisplacement', 'ydisplacement'],
  {
    shadow: true,
  }
);

export const Preview = () => (
  <menu-component
    backgroundcolor="#dd0404"
    xdisplacement="1%"
    ydisplacement="1%"
  />
);
