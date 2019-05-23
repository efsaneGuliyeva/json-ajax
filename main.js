var arr = [1,2,3];


var student = { 
	ad: "Efsane", 
	soyad: "Quliyeva", 
	kurs: 4,
	func: function()
	{
		return this.ad + " " + this.soyad + " " + this.kurs + " telebesidir";

	}
}

	console.log(student['ad']);
	console.log(student.soyad);

	console.log(student.func());