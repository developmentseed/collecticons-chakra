import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonLayoutGrid2x2 = createCollecticon((props) => (
  <>
    <title>{props.title || 'layout grid 2x2 icon'}</title>
    <path d='M7,9L7,16L0,16L0,9L7,9ZM15,9L15,16L8,16L8,9L15,9ZM7,1L7,8L0,8L0,1L7,1ZM15,1L15,8L8,8L8,1L15,1Z' />
  </>
));
