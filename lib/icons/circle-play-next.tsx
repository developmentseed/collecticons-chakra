import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonCirclePlayNext = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M5,11l4-3L5,5V11z M8,0C3.581,0,0,3.581,0,8s3.581,8,8,8s8-3.581,8-8S12.419,0,8,0z M12.244,12.244 C11.109,13.375,9.603,14,8,14s-3.109-0.625-4.244-1.756C2.625,11.109,2,9.603,2,8c0-1.603,0.625-3.109,1.756-4.244 C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8C14,9.603,13.375,11.109,12.244,12.244z M9,8v3h2V5H9 V8z' />
  </>
));
