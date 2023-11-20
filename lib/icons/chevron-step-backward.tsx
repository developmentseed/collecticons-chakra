import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronStepBackward = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M2,15h2V1H2V15z M14.4,2.4L13,1L6,8l7,7l1.4-1.4L8.8,8L14.4,2.4z' />
  </>
));
