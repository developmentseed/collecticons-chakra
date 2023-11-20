import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonBook = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M5,12h9V0H4C2.9,0,2,0.9,2,2v12c0,1.1,0.9,2,2,2h10v-2H5c-0.6,0-1-0.4-1-1S4.4,12,5,12z M5,2h7v2H5V2z' />
  </>
));
