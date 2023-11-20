import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowRight = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='7.586,2.414 12.172,7 0,7 0,9 12.172,9 7.586,13.586 9,15 16,8 9,1' />
  </>
));
