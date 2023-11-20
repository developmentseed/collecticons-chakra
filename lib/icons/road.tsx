import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonRoad = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M16,16L13,0H9v1H7V0H3L0,16h7v-4h2v4H16z M7,3h2v2H7V3z M7,10V7h2v3H7z' />
  </>
));
