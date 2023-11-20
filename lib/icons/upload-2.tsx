import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonUpload2 = createCollecticon((props) => (
  <>
    <title>{props.title || 'upload 2 icon'}</title>
    <path d='M3.294,7.706l1.416,1.416L7,6.828V16h2V6.828l2.294,2.294l1.416-1.416L8,3L3.294,7.706z M0,2h16V0H0V2z' />
  </>
));
