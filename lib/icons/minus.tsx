import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonMinus = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='15,7 1,7 1,9 15,9' />
  </>
));
