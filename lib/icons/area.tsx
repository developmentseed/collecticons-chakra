import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArea = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M4,12L4,13L12,13L12,12L13,12L13,4L12,4L12,3L4,3L4,4L3,4L3,12L4,12ZM7,7L9,7L9,9L7,9L7,7ZM16,12L16,16L12,16L12,15L4,15L4,16L0,16L0,12L1,12L1,4L0,4L0,0L4,0L4,1L12,1L12,0L16,0L16,4L15,4L15,12L16,12Z' />
  </>
));
