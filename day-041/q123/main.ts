function checkVowel(strs: string) {
  const vowel = "aeiouAEIOU";
  for (let str of strs) {
    if (vowel.includes(str)) {
      console.log(`we find a vowel ${str}`);
      break;
    }
    console.log(str);
  }
}
checkVowel("camera");