import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonCalendarSlot = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='calendar-day'
      d='M6,7L4,7L4,9L6,9L6,7ZM15,2L14,2L14,4L11,4L11,2L5,2L5,4L2,4L2,2L1,2C0.447,2 0,2.447 0,3L0,14C0,14.553 0.447,15 1,15L15,15C15.553,15 16,14.553 16,14L16,3C16,2.447 15.553,2 15,2ZM14,13L2,13L2,6L14,6L14,13ZM4,0.494C4,0.222 3.778,0 3.506,0L3.497,0C3.222,0 3,0.222 3,0.494L3,3L4,3L4,0.494ZM13,0.494C13,0.222 12.778,0 12.506,0L12.497,0C12.222,0 12,0.222 12,0.494L12,3L13,3L13,0.494Z'
    />
  </>
));
