// // 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
// var x = 15;
// if (10 < x < 20) {
//     console.log(x);
// }

// // 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// for (var i = 0; i < 5; i++) {
//     console.log(i * 2);
// }

// // 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
// for (var j = 0; j < 5; j++) {
//     console.log(`${j * 2}`);
// }

// // 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
// for (var k = 5; k > 0; k--) {
//     console.log(k * 2 - 1);
// }

// // 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// var m = 0;
// while (true) {
//     console.log(m * 2);
//     m++;
//     if (m === 5) break;
// }

// // 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
// var n = 1;
// while (true) {
//     console.log(n * 2 - 1);
//     n++;
//     if (n === 6) break;
// }

// // 7. for문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
// var p = 0;
// for (var q = 0; q < 10; q++) {
//     p = p + q;
// }
// console.log(p);

// // 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
// var sum = 0;
// for (var y = 0; y < 20; y++) {
//     if (y % 2 !== 0 && y % 3 !== 0) {
//         sum = sum + y;
//     } else {
//         sum = sum + 0;
//     }
// }
// console.log(sum);

// // 9.1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
// var add = 0;
// for (var z = 0; z < 20; z++) {
//     if (z % 2 === 0 || z % 3 === 0) {
//         add = add + z;
//     } else {
//         add = add + 0;
//     }
// }
// console.log(add);

// // 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

// for (var first = 1; first < 7; first++) {
//     for (var second = 1; second < 7; second++) {
//         if (first + second === 6) {
//             console.log(`[${first}, ${second}]`);
//         }
//     }
// }

// // 11. 삼각형 출력하기 - pattern 1
// var line = 5;
// var star = '';

// for(var i = 0; i < line; i ++) {
//     for (var j = 0; j < line; j ++) {
//         if (i>=j) {
//             star += '*';
//         }
//     }
//     star += '\n';
// }

// console.log(star);

// 12. 삼각형 출력하기 - pattern 2
// var line = 5;
// var star = '';

// for (var i = 0; i < line; i++) {
//     for (var j = 0; j < line; j++) {
//         if (i > j) {
//             star += ' ';
//         } else {
//             star += '*';
//         }
//     }
//     star += '\n';
// }
// console.log(star);

// 13. 삼각형 출력하기 - pattern 3
// var line = 5;
// var star = '';

// for (var i = 0; i < line; i++) {
//     for (var j = 0; j < line; j++) {
//         if (i <= j) {
//             star += '*';
//         }
//     }
//     star += '\n';
// }
// console.log(star);

// 14. 삼각형 출력하기 - pattern 4
var line = 5;
var star = '';

for (var i = 5; i >= 0; i--) {
    for (var j = 0; j < line; j++) {
        if (i > j) {
            star += ' ';
        } else {
            star += '*';
        }
    }
    star += '\n';
}
console.log(star);

// 15. 삼각형 출력하기 - pattern 5
