import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronStepForward = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M14,1h-2v14h2V1z M7.2,8l-5.6,5.6L3,15l7-7L3,1L1.6,2.4L7.2,8z' />
  </>
));
