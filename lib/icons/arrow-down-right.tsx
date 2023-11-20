import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowDownRight = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M12,4L12,10.586L2.393,0.979L0.979,2.393L10.586,12L4,12L4,14L14,14L14,4L12,4Z' />
  </>
));
