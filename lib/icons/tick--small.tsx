import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTickSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M2,9.014L3.414,7.6L6.004,10.189L12.593,3.6L14.007,5.014L6.003,13.017L2,9.014Z' />
  </>
));
