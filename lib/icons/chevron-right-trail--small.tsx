import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronRightTrailSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <g id='chevron-right-trail--small'>
      <path
        id='arrow-a100'
        d='M6.586,3.414l4.586,4.586l-4.586,4.586l1.414,1.414l6,-6l-6,-6l-1.414,1.414Z'
      />
      <path
        id='arrow-a32'
        d='M1.586,3.414l4.586,4.586l-4.586,4.586l1.414,1.414l6,-6l-6,-6l-1.414,1.414Z'
        opacity='0.32'
      />
    </g>
  </>
));
