import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChartBars = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M16,14L16,16L0,16L0,14L16,14ZM11,5L11,13L9,13L9,5L11,5ZM15,1L15,13L13,13L13,1L15,1ZM3,9L3,13L1,13L1,9L3,9ZM7,3L7,13L5,13L5,3L7,3Z' />
  </>
));
