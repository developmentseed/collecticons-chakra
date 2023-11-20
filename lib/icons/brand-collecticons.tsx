import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonBrandCollecticons = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M12.042,0h-8v2h8V0z M10.87,11.828C10.114,12.584,9.111,13,8.042,13s-2.072-0.416-2.828-1.172S4.042,10.069,4.042,9 s0.416-2.072,1.172-2.828S6.973,5,8.042,5s2.072,0.416,2.828,1.172C11.383,6.684,11.739,7.316,11.917,8h2.041 c-0.475-2.838-2.944-5-5.916-5c-3.312,0-6,2.688-6,6s2.688,6,6,6c2.972,0,5.441-2.163,5.916-5h-2.041 C11.742,10.684,11.383,11.316,10.87,11.828z' />
  </>
));
