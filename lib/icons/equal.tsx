import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonEqual = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M1,11h14V9H1V11z M1,5v2h14V5H1z' />
  </>
));
