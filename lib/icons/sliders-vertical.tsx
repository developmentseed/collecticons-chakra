import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonSlidersVertical = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M12,12v4h2v-4h1V9h-4v3H12z M10,7V4H6v3h1v9h2V7H10z M5,13v-3H1v3h1v3h2v-3H5z M14,8V0h-2v8H14z M2,9h2V0H2V9z M9,3V0H7v3H9z' />
  </>
));
