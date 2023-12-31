import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonBrandMedium = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M0,0v16h16V0H0z M13.292,3.791l-0.858,0.823c-0.074,0.056-0.111,0.149-0.095,0.241v6.045 c-0.015,0.092,0.021,0.184,0.095,0.241l0.838,0.823v0.181H9.057v-0.181l0.868-0.843c0.085-0.085,0.085-0.11,0.085-0.241V5.993 l-2.414,6.13H7.271l-2.81-6.13v4.109c-0.023,0.173,0.034,0.347,0.156,0.472l1.129,1.37v0.181H2.544v-0.181l1.129-1.37 c0.121-0.125,0.175-0.3,0.146-0.472V5.351C3.832,5.219,3.781,5.089,3.683,5L2.679,3.791V3.61h3.116l2.409,5.283l2.118-5.283h2.971 V3.791z' />
  </>
));
