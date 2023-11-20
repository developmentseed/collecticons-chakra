import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowDown = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='13.586,7.586 9,12.172 9,0 7,0 7,12.172 2.414,7.586 1,9 8,16 15,9' />
  </>
));
