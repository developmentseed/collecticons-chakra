import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonCrosshair2 = createCollecticon((props) => (
  <>
    <title>{props.title || 'crosshair 2 icon'}</title>
    <path d='M8,0C3.581,0,0,3.581,0,8s3.581,8,8,8s8-3.581,8-8S12.419,0,8,0z M12.244,12.244C11.35,13.137,10.225,13.716,9,13.919V11H7 v2.919c-1.222-0.203-2.35-0.781-3.244-1.675C2.862,11.35,2.287,10.222,2.081,9H5V7H2.081c0.203-1.222,0.781-2.35,1.675-3.244 S5.775,2.284,7,2.081V5h2V2.081c1.222,0.203,2.35,0.781,3.244,1.675C13.137,4.65,13.716,5.775,13.919,7H11v2h2.919 C13.712,10.222,13.137,11.35,12.244,12.244z' />
  </>
));
