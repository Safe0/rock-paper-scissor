import styles from './Scoreboard.module.scss';
import { Stack } from '@organisms/Stack/Stack';

interface ScoreboardProps {
  title: string;
  label1: string;
  label2: string;
  score1: number;
  score2: number;
}

export const Scoreboard = (props: ScoreboardProps) => {
  const { title, label1, label2, score1, score2 } = props;

  return (
    <div className={styles.scoreboard}>
      <h3 className={styles.title}>{title}</h3>

      <Stack direction="row" className={styles.row}>
        <span className={styles.header}>{label1}</span>
        <span className={styles.header}>{label2}</span>
      </Stack>

      <Stack direction="row" className={styles.row}>
        <span className={styles.value}>{score1}</span>
        <span className={styles.value}>{score2}</span>
      </Stack>
    </div>
  );
};
