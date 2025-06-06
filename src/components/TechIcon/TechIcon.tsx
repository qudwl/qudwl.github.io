import {
  IconBrandGolang,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandSwift,
  IconBrandTypescript,
} from '@tabler/icons-react';
import { Technologies } from '@/routes/types';
import { TechIconTypes } from './types';

const TechIcon: React.FC<TechIconTypes> = ({ tech }) => {
  switch (tech) {
    case Technologies.React:
      return <IconBrandReact />;
    case Technologies.JS:
      return <IconBrandJavascript />;
    case Technologies.Go:
      return <IconBrandGolang />;
    case Technologies.Swift:
      return <IconBrandSwift />;
    case Technologies.TS:
      return <IconBrandTypescript />;
    case Technologies.HTML:
      return <IconBrandHtml5 />;
    default:
      return <></>;
  }
};

export default TechIcon;
