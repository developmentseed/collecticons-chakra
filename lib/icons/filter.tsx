import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonFilter = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M7,16L7,10L0,2L0,0L16,0L16,2L9,10L9,14L7,16Z' />
  </>
));
