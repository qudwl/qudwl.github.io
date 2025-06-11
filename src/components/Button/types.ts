export interface ButtonProps {
  children?: React.ReactNode;
  ariaSelected?: boolean;
  role?: 'button' | 'tab';
  type?: 'default' | 'transparent' | 'filled';
  onClick?: () => void;
  className?: string;
  key?: string;
  ariaLabelledBy?: string;
  ref?: React.Ref<HTMLButtonElement>;
  tabIndex?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}
