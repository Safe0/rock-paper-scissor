import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};
