/***
 * Because  one picture is worth a thousand words , see ./assets/teleportationAsBase64
 *
 *  This is a technical assessment , a function with more than two arguments is not recommanded
 *  */

type arrayTypeInput = [number, number] | [];
export function computeFinalPosition(
    width: number,
    height: number,
    position: arrayTypeInput,
    portalA: arrayTypeInput,
    portalB: arrayTypeInput,
    moves: string,
) {
    const mvs = moves.split('');
    checkPostion(position, portalA, portalB);
    for (let i = 0; i < mvs.length; i++) {
        if (mvs[i] === 'D') {
            position[1] = position[1] + 1;
            checkPostion(position, portalA, portalB);
        } else if (mvs[i] === 'U') {
            position[1] = position[1] - 1;
            checkPostion(position, portalA, portalB);
        } else if (mvs[i] === 'R') {
            position[0] = position[0] + 1;
            checkPostion(position, portalA, portalB);
        } else {
            position[0] = position[0] - 1;
            checkPostion(position, portalA, portalB);
        }
    }

    return position;
}

export function checkPostion(position: arrayTypeInput, portalA: arrayTypeInput, portalB: arrayTypeInput) {
    if (portalA.length === 0 || portalB.length === 0) return;
    if (position[0] === portalA[0] && position[1] === portalA[1]) {
        position[0] = portalB[0];
        position[1] = portalB[1];

        return position;
    }
    return;
}
