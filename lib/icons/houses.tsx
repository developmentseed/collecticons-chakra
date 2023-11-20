import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonHouses = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M0,8v7h3v-4h3v4h6V8L6,3L0,8z M10,1L7.6,3L13,7.5V13h3V6L10,1z' />
  </>
));
