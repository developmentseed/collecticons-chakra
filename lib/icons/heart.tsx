import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonHeart = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M11.75,1C10.126,1,8.716,1.911,8,3.249C7.284,1.911,5.874,1,4.25,1C1.903,1,0,2.903,0,5.25C0,11,8,15,8,15s8-4,8-9.75 C16,2.903,14.097,1,11.75,1z' />
  </>
));
