import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonCompass2 = createCollecticon((props) => (
  <>
    <title>{props.title || 'compass 2 icon'}</title>
    <polygon points='15,1 1,6 8,8 10,15' />
  </>
));
