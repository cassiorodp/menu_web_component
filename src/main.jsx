import register from 'preact-custom-element';
import { MenuComponent } from './MenuComponent';

register(
  MenuComponent,
  'menu-component',
  ['backgroundcolor', 'xdisplacement', 'ydisplacement'],
  {
    shadow: false,
  }
);

export const Preview = () => (
  <menu-component
    backgroundcolor="#dd0404"
    xdisplacement="1%"
    ydisplacement="1%"
  />
);
