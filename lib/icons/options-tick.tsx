import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonOptionsTick = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M16,5l-11.012,0l0,9l11.012,0l0,1.988l-13,0l0,-12.976l13,0l0,1.988Zm-16,-4.988l14,0l0,1.988l-12.012,0l0,12l-1.988,0l0,-12l0,-1.988Zm8.2,8.36l-1.406,1.422l3.243,3.206l5.169,-5.747l-1.484,-1.338l-3.769,4.187l-1.753,-1.73Z' />
  </>
));
