import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonUfo = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M6,13L3,15L3.889,12.333L0,10L16,10L12.111,12.333L13,15L10,13L6,13ZM16,9L0,9L0,8L3,6C3,3.24 5.24,1 8,1C10.76,1 13,3.24 13,6L16,8L16,9Z' />
  </>
));
