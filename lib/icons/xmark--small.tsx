import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonXmarkSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='13.707,3.707 12.293,2.293 8,6.586 3.707,2.293 2.293,3.707 6.586,8 2.293,12.293 3.707,13.707 8,9.414  12.293,13.707 13.707,12.293 9.414,8' />
  </>
));
