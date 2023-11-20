import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPlus = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='15,7 9,7 9,1 7,1 7,7 1,7 1,9 7,9 7,15 9,15 9,9 15,9' />
  </>
));
