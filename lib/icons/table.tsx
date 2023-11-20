import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTable = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M1,16C0.448,16 0,15.552 0,15C0,12.127 0,3.873 0,1C0,0.448 0.448,0 1,0C3.873,0 12.127,0 15,0C15.552,0 16,0.448 16,1C16,3.873 16,12.127 16,15C16,15.552 15.552,16 15,16C12.127,16 3.873,16 1,16ZM2,7L2,14L4,14L4,7L2,7ZM6,7L6,14L10,14L10,7L6,7ZM12,7L12,14L14,14L14,7L12,7ZM2,2L2,5L14,5L14,2L2,2Z' />
  </>
));
