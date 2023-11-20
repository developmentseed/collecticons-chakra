import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPicture = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M11.5,7C12.328,7,13,6.328,13,5.5S12.328,4,11.5,4S10,4.672,10,5.5S10.672,7,11.5,7z M13,8l-4,2L6,5l-3,6v1h10V8z M0,1v14 h16V1H0z M14,13H2V3h12V13z' />
  </>
));
