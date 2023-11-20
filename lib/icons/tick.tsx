import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTick = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M0,9.014L1.414,7.6L5.004,11.189L14.593,1.6L16.007,3.014L5.003,14.017L0,9.014Z' />
  </>
));
