import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTextBlock = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M0,10h16V8H0V10z M0,0v2h16V0H0z M0,14h8v-2H0V14z M0,6h16V4H0V6z' />
  </>
));
