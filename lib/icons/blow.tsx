import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonBlow = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M8,3c0-1.656-1.344-3-3-3S2,1.344,2,3h2c0-0.55,0.45-1,1-1s1,0.45,1,1S5.55,4,5,4H0v2h5C6.656,6,8,4.656,8,3z M12,1 C9.791,1,8,2.791,8,5v1h2V5c0-1.103,0.897-2,2-2s2,0.897,2,2s-0.897,2-2,2H1v2h11.5V8.969C14.472,8.722,16,7.041,16,5 C16,2.791,14.209,1,12,1z M9,10H2v2h7c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1H6c0,1.656,1.344,3,3,3s3-1.344,3-3S10.656,10,9,10z' />
  </>
));
