import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonBrandFlickr = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M0,8c0,1.933,1.567,3.5,3.5,3.5S7,9.933,7,8S5.433,4.5,3.5,4.5S0,6.067,0,8z M9,8c0,1.933,1.567,3.5,3.5,3.5S16,9.933,16,8 s-1.567-3.5-3.5-3.5S9,6.067,9,8z' />
  </>
));
