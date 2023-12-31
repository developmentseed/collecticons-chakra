import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonHandSwipeHorizontal = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='hand-swipe-horizontal'
      d='M5,11L5,4.5C5,3.672 5.672,3 6.5,3C7.328,3 8,3.672 8,4.5L8,8L9.528,8C9.838,8 10.145,8.072 10.422,8.211C11.005,8.502 12.076,9.038 12.894,9.447C13.572,9.786 14,10.479 14,11.236C14,12.022 14,13.063 14,14C14,14.53 13.789,15.039 13.414,15.414C13.039,15.789 12.53,16 12,16L6.702,16C6.247,16 5.807,15.845 5.452,15.562C4.154,14.523 1,12 1,12C1,11.448 1.448,11 2,11L5,11ZM2,4.5C2,2.016 4.016,-0 6.5,-0C8.984,-0 11,2.016 11,4.5C11,4.5 9,4.5 9,4.5C9,3.12 7.88,2 6.5,2C5.12,2 4,3.12 4,4.5C4,4.5 2,4.5 2,4.5Z'
    />
  </>
));
