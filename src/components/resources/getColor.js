//This function returns a color code according to the data type of the pokemon

function getColor(type) {
    switch (type) {
        case 'fighting':
            return '#e25864';
        case 'flying':
            return '#6d87d6';
        case 'poison':
            return '#7a5292';
        case 'ground':
            return '#653f30';
        case 'rock':
            return '#6c6f77';
        case 'bug':
            return '#9bca7b';
        case 'ghost':
            return '#ddb3f4';
        case 'steel':
            return '#8f9498';
        case 'fire':
            return '#fb6c6c';
        case 'water':
            return '#76bdfe';
        case 'grass':
            return '#48d0b0';
        case 'electric':
            return '#ffce4b';
        case 'psychic':
            return '#f6a4db';
        case 'ice':
            return '#a0eaeb';
        case 'dark':
            return '#525264';
        case 'fairy':
            return '#ee509d';
        case 'normal':
            return '#b8b8b8';
        case 'dragon':
            return '#4169e1';
        default:
            return '';
    }
}

export default getColor;