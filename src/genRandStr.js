const generateRandomString = () => {
    // Define an array of possible characters
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    // Generate a random string of length between 5 and 10 characters
    var length = Math.floor(Math.random() * 6) + 5;
    var result = "";
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  //export default generateRandomString;