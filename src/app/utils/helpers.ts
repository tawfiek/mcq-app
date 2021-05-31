export function shuffle <T>(array: T[]): T[]  {
    const cp = [...array];
    cp.sort(() => Math.random() - 0.5);
    return cp;
}