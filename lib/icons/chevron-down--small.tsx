import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronDownSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='12.586,4.586 8,9.172 3.414,4.586 2,6 8,12 14,6' />
  </>
));
