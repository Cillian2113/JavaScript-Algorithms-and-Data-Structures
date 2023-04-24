function telephoneCheck(str) {
	var nums = str.replace(/\D/g,'');
	str = str.replace(/[^()-01234567899 ]/g,'');
	str = str.replace(/[*]/g,'');
	str = str.replace(/[0-9]/g, 'n');

	if (nums.length == 11){
	  if (nums.charAt(0) != 1){
		return false
	  }
	} else
	if (nums.length != 10){
	  return false
	}

	var type = false
	const forms = ['nnn-nnn-nnnn','(nnn)nnn-nnnn','(nnn) nnn-nnnnn','nnn nnn nnnn','nnnnnnnnnn','n nnn nnn nnnn', 'n nnn-nnn-nnnn', "n (nnn) nnn-nnnn","n(nnn)nnn-nnnn"]
	for (const i in forms){
	  if (forms[i] == str){
		type = true
		break
	  }
	}

  return type

  }

  console.log(telephoneCheck("1(555)555-5555"));
