import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonKeyboard = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M16,4c-0,-1.105 -0.895,-2 -2,-2c-3.074,0 -8.926,0 -12,0c-1.105,0 -2,0.895 -2,2c0,2.22 0,5.78 0,8c0,1.105 0.895,2 2,2c3.074,0 8.926,0 12,0c1.105,-0 2,-0.895 2,-2c0,-2.22 0,-5.78 0,-8Zm-4,6l0,2l-8,0l0,-2l8,0Zm-8,-3l0,2l-2,0l0,-2l2,0Zm3,0l0,2l-2,0l0,-2l2,0Zm3,0l0,2l-2,0l0,-2l2,0Zm4,0l0,2l-3,0l0,-2l3,0Zm-10,-3l0,2l-2,0l0,-2l2,0Zm3,0l0,2l-2,0l0,-2l2,0Zm3,0l0,2l-2,0l0,-2l2,0Zm4,0l0,2l-3,0l0,-2l3,0Z' />
  </>
));
