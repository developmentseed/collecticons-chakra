import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowUpRight = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M4,4L10.586,4L0.979,13.607L2.393,15.021L12,5.414L12,12L14,12L14,2L4,2L4,4Z' />
  </>
));
