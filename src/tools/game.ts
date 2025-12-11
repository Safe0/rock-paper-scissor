export type Hand = 'rock' | 'paper' | 'scissors';
export type Winner = 'p1' | 'p2' | 'none';

const WIN_MAP: Record<Hand, Hand> = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};

export function getWinner(p1: Hand, p2: Hand): Winner {
    if (p1 === p2) return 'none';
    if (WIN_MAP[p1] === p2) return 'p1';
    return 'p2';
}
