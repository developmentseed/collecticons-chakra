import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonFactory = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M0,16h3V0H0V16z M10,8V4L4,8v8h6v-4h2v4h4V4L10,8z' />
  </>
));
