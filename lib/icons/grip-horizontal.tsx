import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonGripHorizontal = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='grip-horizontal'
      d='M3,7l-0,-2l-2,0l-0,2l2,0Zm-0,4l-0,-2l-2,0l-0,2l2,0Zm4,-4l-0,-2l-2,0l-0,2l2,0Zm-0,4l-0,-2l-2,0l-0,2l2,0Zm4,-4l-0,-2l-2,0l-0,2l2,0Zm0,4l0,-2l-2,0l0,2l2,0Zm4,-4l-0,-2l-2,0l-0,2l2,0Zm-0,4l-0,-2l-2,0l0,2l2,0Z'
    />
  </>
));
