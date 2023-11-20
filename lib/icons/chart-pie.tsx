import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChartPie = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M7,9L14,9C13.95,12.913 10.833,16 7,16C3.137,16 0,12.863 0,9C0,5.137 3.137,2 7,2L7,9ZM16,7L9,7L9,0L10.41,0.142C13.576,0.793 15.962,3.577 16,7Z' />
  </>
));
