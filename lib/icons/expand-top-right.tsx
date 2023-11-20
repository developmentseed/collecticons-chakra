import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonExpandTopRight = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M3,5h4V3H1v12h12V9h-2v4H3V5z M16,8V0L8,0v2h4.587L6.294,8.294l1.413,1.413L14,3.413V8H16z' />
  </>
));
