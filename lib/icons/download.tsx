import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonDownload = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M12.706,8.294l-1.416-1.416L9,9.172V0H7v9.172L4.706,6.878L3.291,8.294L8,13L12.706,8.294z M14,4v10H2V4H0v12h16V4H14z' />
  </>
));
