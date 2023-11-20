import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonList = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M4,3v2h12V3H4z M0,5h2V3H0V5z M4,9h12V7H4V9z M0,9h2V7H0V9z M4,13h12v-2H4V13z M0,13h2v-2H0V13z' />
  </>
));
