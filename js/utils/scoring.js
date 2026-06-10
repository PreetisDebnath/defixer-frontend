export function calculateAccuracy(
    correct,
    attempted
){

    if(attempted === 0){
        return 0;
    }

    return Math.round(
        (correct / attempted) * 100
    );
}

export function calculateLevel(xp){

    return Math.floor(
        xp / 50
    ) + 1;
}

export function calculateXPProgress(xp){

    return xp % 50;
}