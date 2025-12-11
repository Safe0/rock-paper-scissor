import styles from './HandOption.module.scss';
import { GridContainer } from '@templates/GridContainer/GridContainer';
import { GridItem } from '@templates/GridItem/GridItem';
import { Stack } from '@templates/Stack/Stack';
import { ButtonIcon } from './../../atoms/ButtonIcon/ButtonIcon';
import scissorsImg from './../../../assets/scissors.jpg';
import paperImg from './../../../assets/paper.jpg';
import rockImg from './../../../assets/rock.jpg';
import { Hand } from '@tools/game.ts';
interface HandOptionProps {
    title: string;
    onClick?: (key: Hand) => void;
}

export const HandOption = ({ title, onClick }: HandOptionProps) => {
    return (
        <div>
            <Stack alignItems="center">
                <h2 className={styles.title}>{title}</h2>
            </Stack>
            <GridContainer spacing={2}>
                <GridItem xs={12} md={4}>
                    <Stack justifyContent="center" alignItems="center">
                        <ButtonIcon
                            onClick={() => onClick?.('rock')}
                            img={rockImg}
                            label={'rock'}
                        />
                    </Stack>
                </GridItem>
                <GridItem xs={12} md={4}>
                    <Stack justifyContent="center" alignItems="center">
                        <ButtonIcon
                            onClick={() => onClick?.('paper')}
                            img={paperImg}
                            label={'paper'}
                        />
                    </Stack>
                </GridItem>
                <GridItem xs={12} md={4}>
                    <Stack justifyContent="center" alignItems="center">
                        <ButtonIcon
                            onClick={() => onClick?.('scissors')}
                            img={scissorsImg}
                            label={'scissors'}
                        />
                    </Stack>
                </GridItem>
            </GridContainer>
        </div>
    );
};
