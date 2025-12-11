import styles from './ButtonIcon.module.scss';

interface ButtonIconProps {
  img: string;
  label: string;
  onClick?: () => void;
}

export const ButtonIcon = ({ img, label, onClick }: ButtonIconProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.icon}>
        <img src={img} alt={label} />
      </div>
      <span className={styles.label}>{label}</span>
    </button>
  );
};
