function average(arr) {
    let len = arr.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }
    console.log("sum =" + sum);
    let avg = Math.round(sum / len);
    return avg;
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log("Average Score in Maths");
console.log(average(scores)); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log("Average Score in EVS");
console.log(average(scores2)); //should return 68