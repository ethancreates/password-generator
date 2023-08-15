let characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/"
];

const pwLength = document.getElementById("password-length");

function generatePassword(pwLength) {
	let password = "";
	for (let i = 0; i < pwLength; i++) {
		let randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}
	return password;
}

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
	const passwordOutput1 = document.getElementById("password1");
	const password = generatePassword(pwLength.value);
	passwordOutput1.value = password;

	const passwordOutput2 = document.getElementById("password2");
	const password2 = generatePassword(pwLength.value);
	passwordOutput2.value = password2;
});
