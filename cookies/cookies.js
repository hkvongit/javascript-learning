// /**
//  * Setting cookie function
//  * @param {*} key 
//  * @param {*} value 
//  * @param {*} lifeInSeconds 
//  */
// const setCookie = (key, value, lifeInSeconds) => {
//   const date = new Date();
//   const expiryTime = (date.getTime() + lifeInSeconds);
//   date.setTime(expiryTime);
//   const cookieString = `${key}=${value};expires=${date.toGMTString()}`;
//   console.log("cookieString", cookieString)
//   document.cookie = cookieString;
// }

// setCookie("name","hari",360000)

/**
 * parsing and getting cookie value
 * @param {*} key 
 * @returns 
 */
const getCookie = (key) => {
  const allCookies = document.cookie.split(";")
  console.log("allCookies", allCookies);
  let value = null;
  allCookies.forEach((ele) => {
    const cookieEleTrim = ele.trim();
    console.log("cookieEleTrim", cookieEleTrim)
    const cookieEleArray = cookieEleTrim.split("=")
    console.log("cookieEleArray", cookieEleArray);
    if (cookieEleArray[0] === key) {
      value = cookieEleArray[1];
    }
  })
  if(value){
    return value
  }
  return `No cookie with key = ${key}`
}

console.log(getCookie("name"))