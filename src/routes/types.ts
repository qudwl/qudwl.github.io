export type RouteProps = {
  className?: string;
  setPage?: React.Dispatch<React.SetStateAction<string>>;
};

export enum Technologies {
  React = 'react',
  JS = 'js',
  TS = 'ts',
  Java = 'java',
  CPP = 'cpp',
  C = 'c',
  Go = 'golang',
  Swift = 'swift',
  HTML = 'html',
}
