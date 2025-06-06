export interface CardProps {
  tag?: 'div' | 'section' | 'main' | 'header';
  className?: string;
  children?: React.ReactNode;
  recessed?: boolean;
}
