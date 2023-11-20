import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonEqualSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M2,11h12V9H2V11z M2,5v2h12V5H2z' />
  </>
));
