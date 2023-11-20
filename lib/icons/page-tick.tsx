import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPageTick = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M14.706,4.206l-3.913-3.913C10.606,0.106,10.353,0,10.087,0H1v16h14V4.916C15,4.65,14.894,4.394,14.706,4.206z M13,14H3V2h7 v3h3V14z M5.2,8.372L3.794,9.794L7.037,13l5.169-5.747l-1.484-1.338l-3.769,4.187L5.2,8.372z' />
  </>
));
