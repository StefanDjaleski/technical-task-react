export interface ReactRoute {
  element: React.ReactNode;
  path?: string;
  children?: ReactRoute[];
  title?: string;
}
