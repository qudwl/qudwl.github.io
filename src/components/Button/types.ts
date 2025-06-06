export interface ButtonProps {
  children?: React.ReactNode;
  ariaSelected?: boolean;
  role?: 'button' | 'tab';
  type?: 'default' | 'transparent' | 'filled';
  onClick?: () => void;
  className?: string;
  key?: number;
}
