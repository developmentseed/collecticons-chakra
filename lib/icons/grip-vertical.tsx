import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonGripVertical = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='grip-vertical'
      d='M7,13L5,13L5,15L7,15L7,13ZM11,13L9,13L9,15L11,15L11,13ZM7,9L5,9L5,11L7,11L7,9ZM11,9L9,9L9,11L11,11L11,9ZM7,5L5,5L5,7L7,7L7,5ZM11,5L9,5L9,7L11,7L11,5ZM7,1L5,1L5,3L7,3L7,1ZM11,1L9,1L9,3L11,3L11,1Z'
    />
  </>
));
