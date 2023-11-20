import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonUser = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M8,8c2.209,0,4-1.791,4-4s-1.791-4-4-4S4,1.791,4,4S5.791,8,8,8z M12,10H4c-2.209,0-4,1.791-4,4v2h16v-2 C16,11.791,14.209,10,12,10z' />
  </>
));
