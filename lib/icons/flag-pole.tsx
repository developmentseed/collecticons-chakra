import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonFlagPole = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M2.009,0H1.991C1.444,0,1,0.444,1,0.991V16h2V0.991C3,0.444,2.556,0,2.009,0z M16,1H4v8h12l-4-4L16,1z' />
  </>
));
