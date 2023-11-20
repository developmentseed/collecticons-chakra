import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonSortDesc = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <g id='sort-desc'>
      <path
        id='arrow-down'
        d='M8.002,11.5l-3.294,-2.622l-1.416,1.416l4.71,3.706l4.706,-3.706l-1.416,-1.416l-3.29,2.622Z'
      />
      <path
        id='arrow-up'
        d='M7.998,4.5l3.294,2.622l1.416,-1.416l-4.71,-3.706l-4.706,3.706l1.416,1.416l3.29,-2.622Z'
        opacity='0.32'
      />
    </g>
  </>
));
