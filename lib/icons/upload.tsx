import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonUpload = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M3.294,7.706l1.416,1.416L7,6.828V16h2V6.828l2.294,2.294l1.416-1.416L8,3L3.294,7.706z M2,12V2h12v10h2V0H0v12H2z' />
  </>
));
