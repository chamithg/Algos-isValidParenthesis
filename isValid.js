/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  if (s.length % 2 == 1) {
    return false;
  }
  let tempStr = "";

  for (let i = 0; i < s.length; i++) {
    if (
      s[i] !== "(" &&
      s[i] !== ")" &&
      s[i] !== "{" &&
      s[i] !== "}" &&
      s[i] !== "[" &&
      s[i] !== "]"
    ) {
      return false;
    }

    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      tempStr += s[i];
      console.log(tempStr);
    } else {
      if (
        (s[i] == ")" && tempStr[tempStr.length - 1] == "(") ||
        (s[i] == "]" && tempStr[tempStr.length - 1] == "[") ||
        (s[i] == "}" && tempStr[tempStr.length - 1] == "{")
      ) {
        tempStr = tempStr.substring(0, tempStr.length - 1);
        console.log(tempStr);
      } else {
        return false;
      }
    }
  }
  if (tempStr !== "") {
    return false;
  }
  return true;
}

let s = "{{";

console.log(isValid(s));
