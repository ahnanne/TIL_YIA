// 이상한 문자 만들기
function toWeirdCase(s) {
  // 전달받은 문자열 s를, 공백을 기준으로 또개고 각각의 배열로 만들어주기
  // String.prototype.split() 메서드 사용😍
  const wordsArr = s.split(' '); // s의 각 단어들을 요소로 가지는 배열

  let result = '';

  wordsArr.forEach((eachWord) => {
    const copiedWord = [...eachWord];
    eachWord = copiedWord.map((eachLetter, index) => {
      if (!(index % 2)) eachLetter = eachLetter.toUpperCase();
      else eachLetter = eachLetter.toLowerCase();
      return eachLetter;
    }).join('');

    result += eachWord + ' ';
  });
  console.log(result);
  return result;
}

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
