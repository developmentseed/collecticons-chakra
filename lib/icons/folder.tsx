import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonFolder = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M7,1l2,2h7v11H0V1H7z' />
  </>
));
