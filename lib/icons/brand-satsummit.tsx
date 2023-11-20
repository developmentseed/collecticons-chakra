import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonBrandSatsummit = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M11,5L9,7V4L8,3L7,4v3L5,5H0v6h5l2-2v4h2V9l2,2h5V5H11z M2,10H1V6h1V10z M4,10H3V6h1V10z M13,10h-1V6h1V10z M15,10h-1V6h1 V10z' />
  </>
));
