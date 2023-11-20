import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowUpLeft = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M4,12L4,5.414L13.607,15.021L15.021,13.607L5.414,4L12,4L12,2L2,2L2,12L4,12Z' />
  </>
));
