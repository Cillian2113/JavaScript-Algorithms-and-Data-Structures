function palindrome(str) {
	str = str.replace(/\W/g, '')
	str = str.replace(/_/g, '');
	str = str.toLowerCase()
	if ((str.length % 2) == 0){
	  var loop = str.length/2
	} else{
	  var loop = (str.length-1)/2
	}
	for (let i = 0; i<loop; i++){
	  if (str.charAt(i) != str.charAt(str.length-(i+1))){
		return false

	  }
	}

	return true;
  }

  console.log(palindrome("_eye"));
