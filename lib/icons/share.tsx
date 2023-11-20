import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonShare = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M10,6v2h3v6H3V8h3V6H1v10h14V6H10z M7,3.328V11h2V3.328l1.834,1.834L12,4L8,0L4,4l1.166,1.166L7,3.328z' />
  </>
));
