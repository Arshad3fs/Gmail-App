// Issues with large set of else if blocks
var rank = 90;

console.time('If - Else');
if (rank < 1) {
    console.log(rank);
} else if (rank < 2) {
    console.log(rank);
} else if (rank < 3) {
    console.log(rank);
} else if (rank < 4) {
    console.log(rank);
} else if (rank < 5) {
    console.log(rank);
} else if (rank < 6) {
    console.log(rank);
} else if (rank < 7) {
    console.log(rank);
} else if (rank < 8) {
    console.log(rank);
} else if (rank < 9) {
    console.log(rank);
} else {
    console.log(rank);
}
console.timeEnd("If - Else")

console.time('Switch Statement')
switch (rank) {
    case 1:
        console.log(rank);
        break;
    case 2:
        console.log(rank);
        break;
    case 3:
        console.log(rank);
        break;
    case 4:
        console.log(rank);
        break;
    case 5:
        console.log(rank);
        break;
    case 6:
        console.log(rank);
        break;
    case 7:
        console.log(rank);
        break;
    case 8:
        console.log(rank);
        break;
    case 9:
        console.log(rank);
        break;
    case 10:
        console.log(rank);
        break;
    default:
        console.log(rank)
}
console.timeEnd('Switch Statement')
