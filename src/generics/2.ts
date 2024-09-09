type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
}

function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(top: T, bottom: U): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    }
}


// type topType = Pick<AllType, 'name' | 'color'>
// type bottomType = Pick<AllType, 'position' | 'weight'>

// function compare<T extends topType, U extends bottomType >(top: T, bottom: U): AllType {
//     return {
//         name: top.name,
//         color: top.color,
//         position: bottom.position,
//         weight: bottom.weight,
//     }
// }