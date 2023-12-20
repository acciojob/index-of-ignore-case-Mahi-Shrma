function indexOfIgnoreCase(s1, s2) {
  let st1=s1.toLowerCase();
	let st2=s2.toLowerCase();
	return st1.indexOf(st2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
