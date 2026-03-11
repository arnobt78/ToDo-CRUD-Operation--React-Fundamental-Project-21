/** Shape of a single task; id is timestamp-based for uniqueness. */
export interface Task {
  id: number;
  name: string;
  time: string;
}

/** Allowed theme values; used for localStorage and CSS class on <html>. */
export type ThemeName =
  | 'light'
  | 'medium'
  | 'dark'
  | 'gOne'
  | 'gTwo'
  | 'gThree';
