import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTriangleRightSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='11,8 6,13 6,3' />
  </>
));
