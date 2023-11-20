import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonLayoutGrid3x3 = createCollecticon((props) => (
  <>
    <title>{props.title || 'layout grid 3x3 icon'}</title>
    <path d='M1,1h4v4H1V1z M6,1h4v4H6V1z M11,1h4v4h-4V1z M1,6h4v4H1V6z M6,6h4v4H6V6z M11,6h4v4h-4V6z M1,11h4v4H1V11z M6,11h4v4H6V11z M11,11h4v4h-4V11z' />
  </>
));
