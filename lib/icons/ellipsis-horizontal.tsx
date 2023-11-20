import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonEllipsisHorizontal = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M4,8c0-1.103-0.897-2-2-2S0,6.897,0,8s0.897,2,2,2S4,9.103,4,8z M6,8c0,1.103,0.897,2,2,2s2-0.897,2-2S9.103,6,8,6 S6,6.897,6,8z M12,8c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2S12,6.897,12,8z' />
  </>
));
