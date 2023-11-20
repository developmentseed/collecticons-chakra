import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonQuoteLeft = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M16,3V1c-4.188,0-7,2.812-7,7v7h7V8h-5C11,4.916,12.916,3,16,3z M0,8v7h7V8H2c0-3.084,1.916-5,5-5V1C2.812,1,0,3.812,0,8z' />
  </>
));
