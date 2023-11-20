import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonCirclePlay = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M6,12l6-4L6,4V12z M8,0C3.581,0,0,3.581,0,8s3.581,8,8,8s8-3.581,8-8S12.419,0,8,0z M12.244,12.244 C11.109,13.375,9.603,14,8,14s-3.109-0.625-4.244-1.756C2.625,11.109,2,9.603,2,8s0.625-3.109,1.756-4.244C4.891,2.625,6.397,2,8,2 s3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8S13.375,11.109,12.244,12.244z' />
  </>
));
