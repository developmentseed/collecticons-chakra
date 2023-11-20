import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonSwapHorizontal = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M0,11h11.2l-2.6,2.6L10,15l6-6H0V11z M4.8,5l2.6-2.6L6,1L0,7h16V5H4.8z' />
  </>
));
