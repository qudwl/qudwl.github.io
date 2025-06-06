import { TablerIcon } from '@tabler/icons-react';
import { ButtonProps } from '../Button';

export interface IconButtonProps extends ButtonProps {
  icon: TablerIcon;
  label: string;
}
