import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPopUp = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M4,2v9h10V2H4z M12,9H6V4h6V9z M3,5H1v9h10v-2H3V5z' />
  </>
));
