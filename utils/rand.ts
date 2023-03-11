const rand = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min)

export const nonNegativeInt = () => rand(-9999, 0)
