/**
 * Setting cookie function
 * @param {*} key 
 * @param {*} value 
 * @param {*} lifeInSeconds 
 */
const setCookie = (key, value, lifeInSeconds) => {
  const date = new Date();
  const expiryTime = (date.getTime() + lifeInSeconds);
  date.setTime(expiryTime);
  const cookieString = `${key}=${value};expires=${date.toGMTString()}`;
  console.log("cookieString", cookieString)
  document.cookie = cookieString;
}

setCookie("name","hari",360000)
docume