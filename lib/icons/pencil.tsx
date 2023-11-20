import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPencil = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M1,11v4h4l7-7L8,4L1,11z M11,1L9,3l4,4l2-2L11,1z' />
  </>
));
