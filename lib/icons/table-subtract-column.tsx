import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTableSubtractColumn = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='table-subtract-column'
      d='M11.414,13l1.586,-1.586l1.586,1.586l1.414,-1.414l-1.586,-1.586l1.586,-1.586l-1.414,-1.414l-1.586,1.586l-1.586,-1.586l-1.414,1.414l1.586,1.586l-1.586,1.586l1.414,1.414Zm2.586,-7l-0,-5c0,-0.265 -0.105,-0.52 -0.293,-0.707c-0.187,-0.188 -0.442,-0.293 -0.707,-0.293l-10,-0c-0.552,-0 -1,0.448 -1,1c-0,2.577 -0,11.423 0,14c0,0.552 0.448,1 1,1c1.916,0 8.084,0 10,0c0.552,-0 1,-0.448 1,-1l-0,-1l-5,0l-0,-12l3,0l-0,4l2,0Zm-10,-4l3,0l-0,12l-3,0l-0,-12Z'
    />
  </>
));
