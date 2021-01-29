let mover = {
    canPlayerMakeStep(nextPoint) {
        return nextPoint.x >= 0 &&
            nextPoint.x < config.rowsCount &&
            nextPoint.y >= 0 &&
            nextPoint.y < config.colsCount;
    },

    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt("Введите число (1, 2, 3, 4, 6, 7, 8 или 9), для перемещения. Для выхода нажмите 'Отмена'."));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert("Для перемещения необходимо ввести одно из чисел: 1, 2, 3, 4, 6, 7, 8 или 9.");
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
        }
        return nextPosition;
    },
};