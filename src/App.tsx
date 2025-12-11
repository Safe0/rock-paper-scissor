import styles from './App.module.scss';
import { Scoreboard } from './components/molecules/Scoreboard/Scoreboard';
import { GridContainer } from './components/templates/GridContainer/GridContainer';
import { GridItem } from '@templates/GridItem/GridItem';
import { Stack } from './components/templates/Stack/Stack';
import { Button } from './components/atoms/Button/Button';
import { PvP } from '@organisms/PvP/PvP';
import { useCallback, useState } from 'react';
import { Winner } from '@tools/game';

export const App = () => {
    const [isGame, setIsGame] = useState(false);
    const [p1Score, setP1Score] = useState<number>(0);
    const [p2Score, setP2Score] = useState<number>(0);
    const handleResult = useCallback(
        (k: Winner) => {
            if (k === 'p1') {
                setP1Score((prev) => prev + 1);
            }
            if (k === 'p2') {
                setP2Score((prev) => prev + 1);
            }
        },
        [setP1Score, setP2Score],
    );

    return (
        <GridContainer spacing={2}>
            <GridItem xs={12}>
                <Stack alignItems="center">
                    <h2 className={styles.title}>Rock, paper, scissors </h2>
                </Stack>
            </GridItem>
            <GridItem xs={12} lg={4}>
                <Stack spacing={2}>
                    <Scoreboard
                        title="PvP"
                        label1="Player 1"
                        label2="Player 2"
                        score1={p1Score}
                        score2={p2Score}
                    />
                    {!isGame && <Button onClick={() => setIsGame(true)} label="Play" />}
                </Stack>
            </GridItem>
            {isGame && (
                <GridItem xs={12} lg={8}>
                    <PvP onClick={() => setIsGame(false)} sendResult={handleResult} />
                </GridItem>
            )}
        </GridContainer>
    );
};
