import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonItalic = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='italic'
      d='M9.439,3l-5,10l-3.439,0l-0,2l9,0l0,-2l-3.439,0l5,-10l3.439,0l0,-2l-9,0l0,2l3.439,0Z'
    />
  </>
));
