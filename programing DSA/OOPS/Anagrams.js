function Anagrams(str1, str2) {
  const normalize = (str) => str.split("").sort().join("");
  console.log(normalize(str1), normalize(str2));
  return normalize(str1) === normalize(str2);
}

console.log(Anagrams("listen", "silent"));
