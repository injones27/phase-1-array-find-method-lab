// code your solution here
function superbowlWin (record) {
const stat = record.find(record => record.result ==="W");
return stat ? stat.year : undefined;
// if (stat === true) {
//     return stat.year;
// }
// if (stat === false) {
//     return undefined;
// }
}