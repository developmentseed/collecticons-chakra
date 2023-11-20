import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonResizeCenterVertical = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M0,6.999v2.002h16V6.999H0z M7,3.828V6h2V3.828l1.586,1.586L12,4L8,0L4,4l1.414,1.414L7,3.828z M9,12.172V10H7v2.172 l-1.586-1.586L4,12l4,4l4-4l-1.414-1.414L9,12.172z' />
  </>
));
