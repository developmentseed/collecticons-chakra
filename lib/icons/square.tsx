import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonSquare = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <rect x='2' y='2' width='12' height='12' />
  </>
));
