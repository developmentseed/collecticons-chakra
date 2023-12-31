import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonClipboard = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M11,6H5v2h6V6z M11,2c0-0.6-0.4-1-1-1H9.4C9.2,0.4,8.7,0,8,0S6.8,0.4,6.6,1H6C5.4,1,5,1.4,5,2v2h6V2z M11,10H5v2h6V10z M13,2h-1v2h1v10H3V4h1V2H3C1.9,2,1,2.9,1,4v10c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V4C15,2.9,14.1,2,13,2z' />
  </>
));
