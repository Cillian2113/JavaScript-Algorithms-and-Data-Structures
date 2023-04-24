function rot13(str) {
	var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	var result = ""
	for (let i=0; i < str.length; i++){
	  var loc = abc.indexOf(str.charAt(i));
	  if (loc == -1) {result+=str.charAt(i)} else
	  if (loc < 13) {result+=abc[25-(12-loc)]}
	  else {result+=abc[loc-13]}
	}
	str = result

	return str;
  }
  //move back 13
