import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonCircleTick = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M8,0C3.581,0,0,3.581,0,8s3.581,8,8,8s8-3.581,8-8S12.419,0,8,0z M12.244,12.244C11.109,13.375,9.603,14,8,14 s-3.109-0.625-4.244-1.756C2.625,11.109,2,9.603,2,8s0.625-3.109,1.756-4.244C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756 C13.375,4.891,14,6.397,14,8S13.375,11.109,12.244,12.244z M10.784,4.916L7.016,9.103L5.262,7.372L3.856,8.794L7.1,12l5.169-5.747 L10.784,4.916z' />
  </>
));
