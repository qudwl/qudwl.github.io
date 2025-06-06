import { SimpleGridProps } from './types';

const SimpleGrid: React.FC<SimpleGridProps> = ({ children, columns = 3 }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};

export default SimpleGrid;
