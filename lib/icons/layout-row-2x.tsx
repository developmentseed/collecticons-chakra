import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonLayoutRow2x = createCollecticon((props) => (
  <>
    <title>{props.title || 'layout row 2x icon'}</title>
    <path d='M0,0L0,7L16,7L16,0L0,0ZM0,15L16,15L16,8L0,8L0,15Z' />
  </>
));
