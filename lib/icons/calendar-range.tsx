import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonCalendarRange = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='calendar-range'
      d='M15,15L1,15C0.447,15 0,14.553 0,14L0,3C0,2.447 0.447,2 1,2L2,2L2,4L5,4L5,2L11,2L11,4L14,4L14,2L15,2C15.553,2 16,2.447 16,3L16,14C16,14.553 15.553,15 15,15ZM14,6L2,6L2,13L14,13L14,6ZM9,12L7,12L7,10L9,10L9,12ZM6,12L4,12L4,10L6,10L6,12ZM12,9L10,9L10,7L12,7L12,9ZM9,9L7,9L7,7L9,7L9,9ZM4,3L3,3L3,0.494C3,0.222 3.222,0 3.497,0L3.506,0C3.778,0 4,0.222 4,0.494L4,3ZM13,3L12,3L12,0.494C12,0.222 12.222,0 12.497,0L12.506,0C12.778,0 13,0.222 13,0.494L13,3Z'
    />
  </>
));
