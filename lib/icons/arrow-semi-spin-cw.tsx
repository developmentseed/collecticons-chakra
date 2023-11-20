import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowSemiSpinCw = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M14,0v2.709C12.534,1.047,10.391,0,8,0C3.581,0,0,3.581,0,8s3.581,8,8,8v-2c-1.603,0-3.109-0.625-4.244-1.756 C2.625,11.109,2,9.603,2,8s0.625-3.109,1.756-4.244C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756 C12.322,3.834,12.4,3.916,12.472,4H10v2h6V0H14z' />
  </>
));
