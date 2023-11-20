import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPageUp = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M14.706,4.206c0.188,0.188 0.294,0.444 0.294,0.71l0,11.084l-14,0l0,-16l9.087,0c0.266,0 0.519,0.106 0.706,0.293l3.913,3.913Zm-1.706,9.794l0,-9l-3,0l0,-3l-7,0l0,12l10,0Zm-7.586,-3.586l-1.414,-1.414l4,-4l4,4l-1.414,1.414l-1.586,-1.586l0,4.172l-2,0l0,-4.172l-1.586,1.586Z' />
  </>
));
