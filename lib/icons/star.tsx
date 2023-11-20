import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonStar = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M16,6.204l-5.528-0.803L8,0.392L5.528,5.401L0,6.204l4,3.899l-0.944,5.505L8,13.009l4.944,2.599L12,10.103L16,6.204z' />
  </>
));
