import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonFence = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M14,0l-2,2v2h-2V2L8,0L6,2v2H4V2L2,0L0,2v14h4v-2h2v2h4v-2h2v2h4V2L14,0z M4,12V6h2v6H4z M10,12V6h2v6H10z' />
  </>
));
