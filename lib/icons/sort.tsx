import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonSort = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M8,11.5L4.706,8.878l-1.416,1.416L8,14l4.706-3.706l-1.416-1.416L8,11.5z M8,4.5l3.294,2.622l1.416-1.416L8,2L3.294,5.706 l1.416,1.416L8,4.5z' />
  </>
));
