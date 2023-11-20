import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonBrandDropbox = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M8.011,3.76L4.005,6.317l4.005,2.557L4.005,11.43L0,8.852l4.005-2.557L0,3.76l4.005-2.557L8.011,3.76z M3.984,12.24 l4.005-2.557l4.005,2.557l-4.005,2.557L3.984,12.24z M8.011,8.852l4.005-2.557L8.011,3.76l3.984-2.557L16,3.76l-4.005,2.557 L16,8.874l-4.005,2.557L8.011,8.852z' />
  </>
));
