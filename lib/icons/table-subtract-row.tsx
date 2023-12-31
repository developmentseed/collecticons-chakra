import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTableSubtractRow = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='table-subtract-row'
      d='M13,11.414l-1.586,1.586l1.586,1.586l-1.414,1.414l-1.586,-1.586l-1.586,1.586l-1.414,-1.414l1.586,-1.586l-1.586,-1.586l1.414,-1.414l1.586,1.586l1.586,-1.586l1.414,1.414Zm-7,2.586l-5,-0c-0.265,0 -0.52,-0.105 -0.707,-0.293c-0.188,-0.187 -0.293,-0.442 -0.293,-0.707l-0,-10c-0,-0.552 0.448,-1 1,-1c2.577,0 11.423,-0 14,0c0.552,0 1,0.448 1,1c-0,1.916 0,8.084 -0,10c-0,0.552 -0.448,1 -1,1l-1,-0l0,-5l-12,-0l0,3l4,0l0,2Zm-4,-10l0,3l12,0l0,-3l-12,0Z'
    />
  </>
));
