import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonLeaf = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M8,0C4.134,0,1,3.134,1,7v9h2v-4c0-3.866,3.134-7,7-7h2c-3.866,0-7,3.134-7,7v2h3c3.866,0,7-3.134,7-7V0H8z' />
  </>
));
