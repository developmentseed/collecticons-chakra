import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonMap = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M0,3l5-2v12l-5,2V3z M11,3v12l-5-1.667v-12L11,3z M16,1v12l-4,1.6v-12L16,1z' />
  </>
));
