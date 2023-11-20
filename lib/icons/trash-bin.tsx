import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTrashBin = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M11,5h2v8.5c0,0.825-0.675,1.5-1.5,1.5h-7C3.675,15,3,14.325,3,13.5V5h2v8h2V5h2v8h2V5z M2,2h12v2H2V2z M6,0h4v1H6V0z' />
  </>
));
