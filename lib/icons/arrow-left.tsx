import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowLeft = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='8.414,13.586 3.828,9 16,9 16,7 3.828,7 8.414,2.414 7,1 0,8 7,15' />
  </>
));
