import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPageLockOpen = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M14.706,4.206l-3.913-3.913C10.606,0.106,10.353,0,10.087,0H1v9h2V2h7v3h3v9H9v2h6V4.916C15,4.65,14.894,4.394,14.706,4.206 z M9,10h2V9c0-1.653-1.347-3-3-3S5,7.347,5,9v1H0.991C0.447,10,0,10.447,0,10.991v4.019C0,15.553,0.447,16,0.991,16h6.019 C7.553,16,8,15.553,8,15.009v-4.019C8,10.447,7.553,10,7.009,10H7V9c0-0.55,0.45-1,1-1s1,0.45,1,1V10z M4,14c-0.553,0-1-0.447-1-1 s0.447-1,1-1s1,0.447,1,1S4.553,14,4,14z' />
  </>
));
