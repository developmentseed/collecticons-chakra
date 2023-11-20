import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPlusSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='14,7 9,7 9,2 7,2 7,7 2,7 2,9 7,9 7,14 9,14 9,9 14,9' />
  </>
));
