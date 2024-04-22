export interface coords {
    x: number,
    y: number
}
export function coordsFactory(xx: number, yy: number): coords {
    return {
        x: xx,
        y: yy
    } as coords
}