import styles from './Stack.module.scss';

interface StackProps {
    children: React.ReactNode;
    direction?: 'row' | 'column';
    spacing?: number;
    justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export const Stack = ({
    children,
    direction = 'column',
    spacing = 0,
    justifyContent = 'start',
    alignItems = 'stretch',
    wrap = 'nowrap',
}: StackProps) => {
    return (
        <div
            className={styles.stack}
            style={{
                flexDirection: direction,
                gap: `${spacing * 8}px`,
                justifyContent,
                alignItems,
                flexWrap: wrap,
            }}
        >
            {children}
        </div>
    );
};
