import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonExpandDownLeft = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M13,11H9v2h6V1H3v6h2V3h8V11z M0,8v8h8v-2H3.412l6.294-6.294L8.294,6.294L2,12.587V8H0z' />
  </>
));
