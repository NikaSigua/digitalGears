function makeid(length) {
	var result           = '';
	var characters       = '\\/';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

/*
var iidd = $('[id^="length-"]');
iidd.each(function() {
	console.log(this.id);
	var dee = this.id.replace(/length-/g, '');
	console.log(dee);
	document.write(makeid(dee));
});
*/

//var res = document.querySelector("[id^=length-]");
//var id = res.id;
//console.log(id);
//var endOfId = id.replace("length-a-", "");
//var endOfIdb = id.replace("length-b-", "");

//console.log(endOfIdb);

//document.write(makeid(endOfId));
