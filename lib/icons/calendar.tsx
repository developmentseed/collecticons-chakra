import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonCalendar = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M6,7H4v2h2V7z M6,10H4v2h2V10z M9,7H7v2h2V7z M9,10H7v2h2V10z M12,7h-2v2h2V7z M12,10h-2v2h2V10z M15,2h-1v2h-3V2H5v2H2V2H1 C0.447,2,0,2.447,0,3v11c0,0.553,0.447,1,1,1h14c0.553,0,1-0.447,1-1V3C16,2.447,15.553,2,15,2z M14,13H2V6h12V13z M4,0.494 C4,0.222,3.778,0,3.506,0H3.497C3.222,0,3,0.222,3,0.494V3h1V0.494z M13,0.494C13,0.222,12.778,0,12.506,0h-0.009 C12.222,0,12,0.222,12,0.494V3h1V0.494z' />
  </>
));
