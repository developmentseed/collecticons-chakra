import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPageLabel = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M14.706,4.206l-3.912-3.912C10.606,0.106,10.353,0,10.088,0H1v8H0v4h10V8H3V2h7v3h3v9H3v-1H1v3h14V4.916 C15,4.65,14.894,4.394,14.706,4.206z' />
  </>
));
