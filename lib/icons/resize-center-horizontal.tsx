import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonResizeCenterHorizontal = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M6.999,16h2.002V0H6.999V16z M5.414,5.414L4,4L0,8l4,4l1.414-1.414L3.828,9H6V7H3.828L5.414,5.414z M12,4l-1.414,1.414 L12.172,7H10v2h2.172l-1.586,1.586L12,12l4-4L12,4z' />
  </>
));
