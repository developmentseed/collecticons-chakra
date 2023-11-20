import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronRightSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='4.586,3.414 9.172,8 4.586,12.586 6,14 12,8 6,2' />
  </>
));
