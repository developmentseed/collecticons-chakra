import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonExpandTopLeft = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M13,13H5V9H3v6h12V3H9v2h4V13z M2,8V3.413l6.294,6.294l1.413-1.413L3.412,2H8V0L0,0l0,8H2z' />
  </>
));
