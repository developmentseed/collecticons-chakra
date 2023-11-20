import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonCog = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M16,9V7l-2.259-0.753c-0.113-0.372-0.262-0.728-0.441-1.066l1.066-2.131L12.95,1.634L10.819,2.7 c-0.338-0.178-0.694-0.325-1.066-0.441L9,0H7L6.247,2.259C5.875,2.372,5.519,2.522,5.181,2.7L3.05,1.638L1.638,3.05l1.066,2.131 C2.522,5.519,2.375,5.875,2.259,6.247L0,7v2l2.259,0.753c0.112,0.372,0.263,0.728,0.441,1.066L1.634,12.95l1.416,1.416L5.181,13.3 c0.338,0.178,0.694,0.328,1.066,0.441L7,16h2l0.753-2.259c0.372-0.113,0.728-0.262,1.066-0.441l2.131,1.066l1.416-1.416L13.3,10.819 c0.178-0.337,0.328-0.694,0.441-1.066L16,9z M8,11c-1.656,0-3-1.344-3-3s1.344-3,3-3s3,1.344,3,3S9.656,11,8,11z' />
  </>
));
