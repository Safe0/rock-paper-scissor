import styles from './App.module.scss';
import { Scoreboard } from './components/molecules/Scoreboard/Scoreboard';
import { GridContainer } from './components/templates/GridContainer/GridContainer';
import { GridItem } from '@templates/GridItem/GridItem';
import { Stack } from './components/templates/Stack/Stack';
import { Button } from './components/atoms/Button/Button';
import scissorsImg from './assets/scissors.jpg';
import { HandOption } from './components/organisms/HandOption/HandOption';
import { useState } from 'react';

export const App = () => {
  const [isGame, setIsGame] = useState(false);
  return (
    <GridContainer spacing={2}>
      <GridItem xs={12}>
        <Stack alignItems="center">
          <h2 className={styles.title}>Rock, paper, scissors game</h2>
        </Stack>
      </GridItem>
      <GridItem xs={12} lg={4}>
        <Stack spacing={2}>
          <Scoreboard
            title="PvP"
            label1="Player 1"
            label2="Player 2"
            score1={0}
            score2={0}
          />
          {!isGame && <Button onClick={() => setIsGame(true)} label="Play" />}
        </Stack>
      </GridItem>
      {isGame && (
        <GridItem xs={12} lg={8}>
          <HandOption
            onClick={(k: string) => console.log(k)}
            title={'Player 1'}
          />
        </GridItem>
      )}
    </GridContainer>
  );
};
