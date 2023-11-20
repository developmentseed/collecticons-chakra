import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronDown = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='14.586,3.586 8,10.172 1.414,3.586 0,5 8,13 16,5' />
  </>
));
