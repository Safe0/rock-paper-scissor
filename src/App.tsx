import { Scoreboard } from './components/molecules/Scoreboard/Scoreboard';
import { GridContainer } from './components/templates/GridContainer/GridContainer';
import { GridItem } from '@templates/GridItem/GridItem';
import { Stack } from './components/templates/Stack/Stack';

export const App = () => {
    return (
        <GridContainer spacing={2}>
            <GridItem xs={12} lg={4}>
                <Scoreboard
                    title="PvP"
                    label1="Player 1"
                    label2="Player 2"
                    score1={0}
                    score2={0}
                />
            </GridItem>
            <GridItem xs={12} lg={8}>
                <Stack justifyContent="center" alignItems="center">
                    <h2>In progress</h2>
                </Stack>
            </GridItem>
        </GridContainer>
    );
};
