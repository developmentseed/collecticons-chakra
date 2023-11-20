import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonLayoutColumn2x = createCollecticon((props) => (
  <>
    <title>{props.title || 'layout column 2x icon'}</title>
    <path d='M0,16L7,16L7,0L0,0L0,16ZM15,16L15,0L8,0L8,16L15,16Z' />
  </>
));
