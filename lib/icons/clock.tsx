import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonClock = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M9,4H7v4.416l3.294,3.291l1.413-1.416L9,7.584V4z M8,0C3.581,0,0,3.581,0,8s3.581,8,8,8s8-3.581,8-8S12.419,0,8,0z M8,14 c-3.312,0-6-2.688-6-6s2.688-6,6-6s6,2.688,6,6S11.312,14,8,14z' />
  </>
));
