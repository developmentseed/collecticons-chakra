import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonDiscDollar = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M8,0C3.581,0,0,3.581,0,8s3.581,8,8,8s8-3.581,8-8S12.419,0,8,0z M12,6H6.181C5.909,6,5.688,6.222,5.688,6.494v0.009 c0,0.272,0.222,0.494,0.494,0.494H10c1.103,0,2,0.897,2,2v1c0,1.103-0.897,2-2,2H9v1H7v-1H4v-2h5.506C9.778,9.997,10,9.775,10,9.503 V9.494C10,9.222,9.778,9,9.506,9H6H5.981C4.887,9,4,8.112,4,7.019V6c0-1.103,0.897-2,2-2h1V3h2v1h3V6z' />
  </>
));
