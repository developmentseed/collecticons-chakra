import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonLock2 = createCollecticon((props) => (
  <>
    <title>{props.title || 'lock 2 icon'}</title>
    <path d='M12.25,7H12V4c0-1.653-1.347-3-3-3H7C5.347,1,4,2.347,4,4v3H3.75C3.338,7,3,7.338,3,7.75v6.5C3,14.663,3.338,15,3.75,15h8.5 c0.413,0,0.75-0.337,0.75-0.75v-6.5C13,7.338,12.663,7,12.25,7z M6,4c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v3H6V4z' />
  </>
));
