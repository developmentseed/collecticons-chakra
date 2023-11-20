import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowUp = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='2.414,8.414 7,3.828 7,16 9,16 9,3.828 13.586,8.414 15,7 8,0 1,7' />
  </>
));
