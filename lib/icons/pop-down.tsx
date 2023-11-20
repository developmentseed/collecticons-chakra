import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPopDown = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M2,14h10V5H2V14z M4,7h6v5H4V7z M5,2v2h8v7h2V2H5z' />
  </>
));
