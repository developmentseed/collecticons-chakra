import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowReply = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M16,11c-0,-2.209 -1.791,-4 -4,-4c-3.548,0 -8.172,0 -8.172,0l2.586,-2.586l-1.414,-1.414l-5,5l5,5l1.414,-1.414l-2.586,-2.586l8.172,0c0.53,-0 1.039,0.211 1.414,0.586c0.375,0.375 0.586,0.884 0.586,1.414c0,1.392 0,3 0,3l2,0l0,-3Z' />
  </>
));
