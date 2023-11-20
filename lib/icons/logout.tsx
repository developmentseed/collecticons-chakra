import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonLogout = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M14,14l0,-12l-6,0l0,-2l8,0l0,16l-8,0l0,-2l6,0Zm-9.002,-0.998l-4.998,-5.002l5,-5l1.416,1.416l-2.588,2.584l8.172,0l0,2l-8.172,0l2.586,2.586l-1.416,1.416Z' />
  </>
));
