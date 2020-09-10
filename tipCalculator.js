const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'bad':
            return total * .05;
        case 'ok':
            return total * .15;
        case 'good':
            return total * .20;
        case 'excellent':
            return total * .30;
        default:
            return total * .18;

    }
}
/*
// As a function declaration:
function tipCalculator(quality, total) {
    switch (quality) {
        case 'bad':
            return total * .05;
        case 'ok':
            return total * .15;
        case 'good':
            return total * .20;
        case 'excellent':
            return total * .30;
        default:
            return total * .18;

    }
}
*/
console.log(tipCalculator('good', 100))


//but even bad tip from 400 looks nice :)
//console.log(tipCalculator('bad', 400))
//should return £20