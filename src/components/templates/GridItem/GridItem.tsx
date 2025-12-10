import styles from './GridItem.module.scss';

interface GridItemProps {
  children: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export const GridItem = ({ children, xs = 12, sm, md, lg }: GridItemProps) => {
  return (
    <div
      className={styles.item}
      style={
        {
          '--xs': xs,
          '--sm': sm ?? xs,
          '--md': md ?? sm ?? xs,
          '--lg': lg ?? md ?? sm ?? xs,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
