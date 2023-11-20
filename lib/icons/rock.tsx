import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonRock = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M6.516,2.612L9.325,3.55l0.734,2.934l0.188,0.75l0.644,0.428l2.238,1.494L13.734,14H2.441l0.331-1.65l1.125-0.562 l0.875-0.438l0.191-0.959L6.516,2.612 M5,0L3,10l-2,1l-1,5h16l-1-8l-3-2l-1-4L5,0L5,0z' />
  </>
));
