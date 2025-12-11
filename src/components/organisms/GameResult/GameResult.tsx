import styles from './GameResult.module.scss';
import { GridContainer } from '@templates/GridContainer/GridContainer';
import { GridItem } from '@templates/GridItem/GridItem';
import { Stack } from '@templates/Stack/Stack';
import { ButtonIcon } from './../../atoms/ButtonIcon/ButtonIcon';
import scissorsImg from './../../../assets/scissors.jpg';
import paperImg from './../../../assets/paper.jpg';
import rockImg from './../../../assets/rock.jpg';
import { Button } from '@atoms/Button/Button';
import { Hand } from '@tools/game.ts';

const buttonIconProps: Record<Hand, { img: string; label: Hand }> = {
  paper: {
    img: paperImg,
    label: 'paper',
  },
  rock: {
    img: rockImg,
    label: 'rock',
  },
  scissors: {
    img: scissorsImg,
    label: 'scissors',
  },
};

interface GameResultProps {
  title: string;
  p1Hand: Hand;
  p2Hand: Hand;
  onClick?: () => void;
}

export const GameResult = ({
  title,
  p1Hand,
  p2Hand,
  onClick,
}: GameResultProps) => {
  return (
    <div>
      <Stack alignItems="center">
        <h2 className={styles.title}>{title}</h2>
      </Stack>
      <GridContainer spacing={2}>
        <GridItem xs={12} md={4}>
          <Stack justifyContent="center" alignItems="center">
            <ButtonIcon {...buttonIconProps[p1Hand]} />
          </Stack>
        </GridItem>
        <GridItem xs={12} md={4}>
          <Stack justifyContent="center" alignItems="center">
            <h2>VS</h2>
          </Stack>
        </GridItem>
        <GridItem xs={12} md={4}>
          <Stack justifyContent="center" alignItems="center">
            <ButtonIcon {...buttonIconProps[p2Hand]} />
          </Stack>
        </GridItem>
        <GridItem xs={12}>
          <Stack>
            <Button onClick={onClick} label="End" />
          </Stack>
        </GridItem>
      </GridContainer>
    </div>
  );
};
