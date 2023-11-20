import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPage = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M14.706,4.206l-3.913-3.913C10.606,0.106,10.353,0,10.087,0H1v16h14V4.916C15,4.65,14.894,4.394,14.706,4.206z M13,14H3V2h7 v3h3V14z' />
  </>
));
