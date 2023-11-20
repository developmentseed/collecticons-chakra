import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonSteam = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M7,16h2v-6H7V16z M12.603,3.044C11.844,1.256,10.069,0,8,0C5.238,0,3,2.237,3,5C1.344,5,0,6.344,0,8s1.344,3,3,3h0.284L4,15 h2L5,9H3C2.45,9,2,8.55,2,8s0.45-1,1-1h2V5c0-1.653,1.347-3,3-3c1.206,0,2.291,0.719,2.762,1.828L11.2,4.856l1.103,0.166 c0.466,0.072,0.897,0.306,1.209,0.669C13.734,5.947,14,6.381,14,7c0,1.103-0.897,2-2,2h-1l-1,6h2l0.725-4.066 C14.587,10.594,16,8.962,16,7C16,4.997,14.525,3.338,12.603,3.044z' />
  </>
));
