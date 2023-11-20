import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonSpark = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M10,1L3,9h4.5L6,15l7-8H8.5L10,1z' />
  </>
));
