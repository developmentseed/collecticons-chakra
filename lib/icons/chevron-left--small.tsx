import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronLeftSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='11.414,12.586 6.828,8 11.414,3.414 10,2 4,8 10,14' />
  </>
));
