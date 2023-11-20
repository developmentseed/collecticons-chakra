import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPages = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M3,3H1v13h11v-2H3V3z M12,0H4v13h11V3L12,0z M13,11H6V2h5v2h2V11z' />
  </>
));
