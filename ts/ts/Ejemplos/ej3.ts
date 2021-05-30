class Rombo {

    private diagonalVertical: number;
    private diagonalHorizontal: number;

    calcularArea(): number {
        return this.diagonalHorizontal * this.diagonalVertical;

    };
    constructor(diagonalVertical: number, diagonalHorizontal: number) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;

    }

}

