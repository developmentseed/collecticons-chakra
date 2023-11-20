import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowLoop = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M6,4H3.528c0.075-0.081,0.15-0.162,0.228-0.244C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756 C13.375,4.891,14,6.397,14,8h2c0-4.419-3.581-8-8-8C5.609,0,3.466,1.047,2,2.709V0H0v6h6V4z M10,12h2.472 c-0.075,0.081-0.15,0.163-0.228,0.244C11.109,13.375,9.603,14,8,14s-3.109-0.625-4.244-1.756C2.625,11.109,2,9.603,2,8H0 c0,4.419,3.581,8,8,8c2.391,0,4.534-1.047,6-2.709V16h2v-6h-6V12z' />
  </>
));
