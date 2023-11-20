import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonMinusSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='14,7 2,7 2,9 14,9' />
  </>
));
