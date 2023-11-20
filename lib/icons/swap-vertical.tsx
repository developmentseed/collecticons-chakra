import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonSwapVertical = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M5,16L5,4.8L2.4,7.4L1,6L7,0L7,16L5,16ZM11,11.2L13.6,8.6L15,10L9,16L9,0L11,0L11,11.2Z' />
  </>
));
