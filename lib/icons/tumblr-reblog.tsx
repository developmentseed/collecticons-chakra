import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTumblrReblog = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M2,5h10.672l-1.837,1.834L12,8l4-4l-4-4l-1.166,1.166L12.672,3H0v7l2-2V5z M14,11H3.328l1.838-1.834L4,8l-4,4l4,4 l1.166-1.166L3.328,13H16V6l-2,2V11z' />
  </>
));
