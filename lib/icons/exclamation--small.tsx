import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonExclamationSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M9,11C9,10.447 8.553,10 8,10C7.447,10 7,10.447 7,11C7,11.553 7.447,12 8,12C8.553,12 9,11.553 9,11ZM9,4L9,9L7,9L7,4L9,4Z' />
  </>
));
