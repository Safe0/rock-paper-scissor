import styles from './GridContainer.module.scss';

interface GridContainerProps {
  children: React.ReactNode;
  spacing?: number;
  justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
}

export const GridContainer = ({
  children,
  spacing = 0,
  justifyContent = 'start',
  alignItems = 'stretch',
}: GridContainerProps) => {
  return (
    <div
      className={styles.grid}
      style={{
        gap: `${spacing * 8}px`,
        justifyContent,
        alignItems,
      }}
    >
      {children}
    </div>
  );
};
