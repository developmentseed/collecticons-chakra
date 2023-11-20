import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronUpTrailSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <g id='chevron-up-trail--small'>
      <path
        id='arrow-a32'
        d='M3.414,14.414l4.586,-4.586l4.586,4.586l1.414,-1.414l-6,-6l-6,6l1.414,1.414Z'
        opacity='0.32'
      />
      <path
        id='arrow-a100'
        d='M3.414,9.414l4.586,-4.586l4.586,4.586l1.414,-1.414l-6,-6l-6,6l1.414,1.414Z'
      />
    </g>
  </>
));
