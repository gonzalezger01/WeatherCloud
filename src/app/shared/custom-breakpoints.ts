import { BREAKPOINT } from '@angular/flex-layout';

const BS4_BREAKPOINTS = [
  { alias: 'xs', mediaQuery: 'screen and (min-width: 316px) and (max-width: 462px)', priority: 1001 },
  { alias: 'sm', mediaQuery: 'screen and (min-width: 462px) and (max-width: 767px)', priority: 1001 },
  { alias: 'md', mediaQuery: 'screen and (min-width: 768px) and (max-width: 991px)', priority: 1001 },
  { alias: 'lg', mediaQuery: 'screen and (min-width: 992px) and (max-width: 1199px)', priority: 1001 },
  { alias: 'xl', mediaQuery: 'screen and (min-width: 1200px) and (max-width: 5000px)', priority: 1001 },

  { alias: 'lt-sm', mediaQuery: 'screen and (max-width: 575px)', priority: 1001 },
  { alias: 'lt-md', mediaQuery: 'screen and (max-width: 767px)', priority: 1001 },
  { alias: 'mdtest', mediaQuery: 'screen and (max-width: 767px)', priority: 1001 },
  { alias: 'lt-lg', mediaQuery: 'screen and (max-width: 991px)', priority: 1001 },
  { alias: 'lt-xl', mediaQuery: 'screen and (max-width: 1199px)', priority: 1001 },

  { alias: 'gt-xs', mediaQuery: 'screen and (min-width: 576px)', priority: 1001 },
  { alias: 'gt-sm', mediaQuery: 'screen and (min-width: 768px)', priority: 1001 },
  { alias: 'gt-md', mediaQuery: 'screen and (min-width: 992px)', priority: 1001 },
  { alias: 'gt-lg', mediaQuery: 'screen and (min-width: 1200px)', priority: 1001 }
];

export const CustomBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: BS4_BREAKPOINTS,
  multi: true
};
