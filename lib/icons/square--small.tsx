import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonSquareSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <rect x='4' y='4' width='8' height='8' />
  </>
));
