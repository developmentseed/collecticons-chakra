import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPi = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='pi'
      d='M4,4L6,4L6,14L4,14L4,4ZM14,14L12,14C11.47,14 10.961,13.789 10.586,13.414C10.211,13.039 10,12.53 10,12C10,9.082 10,4 10,4L12,4C12,4 12,9.749 12,11.5C12,11.633 12.053,11.76 12.146,11.854C12.24,11.947 12.367,12 12.5,12C13.092,12 14,12 14,12L14,14ZM2,2L14,2L14,4L2,4L2,2Z'
    />
  </>
));
