import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonMarker = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M8,0C4.688,0,2,2.688,2,6c0,6,6,10,6,10s6-4,6-10C14,2.688,11.312,0,8,0z M8,8C6.344,8,5,6.656,5,5s1.344-3,3-3s3,1.344,3,3 S9.656,8,8,8z' />
  </>
));
