import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonQuoteRight = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M0,8h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H0V8z M9,1v7h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H9z' />
  </>
));
