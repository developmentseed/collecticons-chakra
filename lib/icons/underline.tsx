import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonUnderline = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M3,13l10,0l0,2l-10,0l0,-2Zm8,-12l2,0l0,6c0,2.76 -2.24,5 -5,5c-2.76,0 -5,-2.24 -5,-5l0,-6l2,0l-0,6c-0,1.656 1.344,3 3,3c1.656,0 3,-1.344 3,-3l0,-6Z' />
  </>
));
