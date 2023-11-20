import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonBrandTumblr = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M9.707,15.997c-3.396,0-4.687-2.503-4.687-4.274V6.496H3.412V4.43c2.418-0.875,3.009-3.062,3.14-4.312 C6.561,0.034,6.63,0,6.667,0h2.343v4.074h3.199v2.421H8.995v4.98c0.009,0.669,0.25,1.581,1.472,1.581h0.059 c0.422-0.012,0.99-0.137,1.29-0.278l0.772,2.284c-0.291,0.425-1.6,0.915-2.771,0.937H9.698C9.698,15.997,9.707,15.997,9.707,15.997z' />
  </>
));
