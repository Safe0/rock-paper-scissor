import { useCallback, useState } from 'react';
import styles from './PvP.module.scss';
import { HandOption } from '@organisms/HandOption/HandOption';
import { GameResult } from '@organisms/GameResult/GameResult';
import { getWinner, Hand, Winner } from '@tools/game.ts';

interface PvPProps {
    sendResult?: (key: Winner) => void;
    onClick?: () => void;
}

export const PvP = ({ sendResult, onClick }: PvPProps) => {
    const [stepper, setStepper] = useState('step1');
    const [p1Option, setP1Option] = useState<Hand>();
    const [p2Option, setP2Option] = useState<Hand>();
    const [result, setResult] = useState<Winner>('none');

    const handleP1OptionClick = useCallback(
        (k: Hand) => {
            setStepper('step2');
            setP1Option(k);
        },
        [setStepper, setP1Option],
    );

    const handleP2OptionClick = useCallback(
        (k: Hand) => {
            setStepper('step3');
            const winner = getWinner(p1Option ?? 'paper', k);
            sendResult?.(winner);
            setResult(winner);
            setP2Option(k);
        },
        [p1Option, setStepper, setP2Option, sendResult],
    );

    const handleClick = useCallback(() => {
        onClick?.();
        setStepper('step1');
    }, [onClick, setStepper]);

    return (
        <div>
            {stepper === 'step1' && (
                <div className={styles.p1}>
                    <HandOption
                        onClick={handleP1OptionClick}
                        title={'Choose player 1 hand:'}
                    />
                </div>
            )}
            {stepper === 'step2' && (
                <div className={styles.p2}>
                    <HandOption
                        onClick={handleP2OptionClick}
                        title={'Choose player 2 hand:'}
                    />
                </div>
            )}
            {stepper === 'step3' && (
                <GameResult
                    title={
                        result === 'p1'
                            ? 'Player 1 won!'
                            : result === 'p2'
                                ? 'Player 2 won!'
                                : 'Tie!'
                    }
                    p1Hand={p1Option ?? 'paper'}
                    p2Hand={p2Option ?? 'paper'}
                    onClick={handleClick}
                />
            )}
        </div>
    );
};
