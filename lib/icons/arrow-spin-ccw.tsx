import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowSpinCcw = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M0,0l0,6h6V4H3.528C3.6,3.916,3.678,3.834,3.756,3.756C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756 C13.375,4.891,14,6.397,14,8s-0.625,3.109-1.756,4.244C11.109,13.375,9.603,14,8,14s-3.112-0.622-4.244-1.756S2,9.603,2,8H0 c0,4.419,3.581,8,8,8s8-3.581,8-8s-3.581-8-8-8C5.609,0,3.466,1.047,2,2.709V0L0,0z' />
  </>
));
