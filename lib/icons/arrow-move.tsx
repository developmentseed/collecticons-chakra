import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowMove = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M7.5,1.924L5.773,3.651L5.061,2.939L8,0L10.939,2.939L10.227,3.651L8.5,1.924L8.5,7.5L14.076,7.5L12.349,5.773L13.061,5.061L16,8L13.061,10.939L12.349,10.227L14.076,8.5L8.5,8.5L8.5,14.076L10.227,12.349L10.939,13.061L8,16L5.061,13.061L5.773,12.349L7.5,14.076L7.5,8.5L1.924,8.5L3.651,10.227L2.939,10.939L0,8L2.939,5.061L3.651,5.773L1.924,7.5L7.5,7.5L7.5,1.924Z' />
  </>
));
