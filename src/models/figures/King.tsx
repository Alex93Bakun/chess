import { Figure, FigureName } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.KING;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (
                    target.x === this.cell.x + i &&
                    target.y === this.cell.y + j
                ) {
                    return true;
                }
            }
        }

        return false;
    }
}
