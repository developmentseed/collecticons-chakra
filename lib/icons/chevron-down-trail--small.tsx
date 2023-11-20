import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronDownTrailSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <g id='chevron-down-trail--small'>
      <path
        id='arrow-a100'
        d='M12.586,6.586l-4.586,4.586l-4.586,-4.586l-1.414,1.414l6,6l6,-6l-1.414,-1.414Z'
      />
      <path
        id='arrow-a32'
        d='M12.586,1.586l-4.586,4.586l-4.586,-4.586l-1.414,1.414l6,6l6,-6l-1.414,-1.414Z'
        opacity='0.32'
      />
    </g>
  </>
));
