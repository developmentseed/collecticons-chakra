import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonExpandDownRight = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M3,3h8v4h2V1H1v12h6v-2H3V3z M14,8v4.587L7.706,6.294L6.294,7.706L12.587,14H8v2h8V8H14z' />
  </>
));
