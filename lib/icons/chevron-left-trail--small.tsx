import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronLeftTrailSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <g id='chevron-left-trail--small'>
      <path
        id='arrow-a32'
        d='M14.414,12.586l-4.586,-4.586l4.586,-4.586l-1.414,-1.414l-6,6l6,6l1.414,-1.414Z'
        opacity='0.32'
      />
      <path
        id='arrow-a100'
        d='M9.414,12.586l-4.586,-4.586l4.586,-4.586l-1.414,-1.414l-6,6l6,6l1.414,-1.414Z'
      />
    </g>
  </>
));
