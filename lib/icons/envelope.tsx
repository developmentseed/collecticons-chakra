import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonEnvelope = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M0,6v8h16V6l-8,5L0,6z M0,2v2l8,5l8-5V2H0z' />
  </>
));
