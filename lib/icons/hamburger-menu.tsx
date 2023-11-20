import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonHamburgerMenu = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M1,9h14V7H1V9z M1,14h14v-2H1V14z M1,2v2h14V2H1z' />
  </>
));
