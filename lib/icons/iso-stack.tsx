import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonIsoStack = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M8,9L0,5l8-4l8,4L8,9z M14.397,7.2L16,8l-8,4L0,8l1.603-0.8L8,10.397L14.397,7.2z M14.397,10.2L16,11l-8,4l-8-4l1.603-0.8 L8,13.397L14.397,10.2z' />
  </>
));
