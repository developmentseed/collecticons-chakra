import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonMobilePhone = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M11.5,0h-7C3.675,0,3,0.675,3,1.5v13C3,15.325,3.675,16,4.5,16h7c0.825,0,1.5-0.675,1.5-1.5v-13C13,0.675,12.325,0,11.5,0z M8,15c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S8.553,15,8,15z M12,12H4V2h8V12z' />
  </>
));
