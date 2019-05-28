module.exports = function main(num)
{
var i;
	var j;
	var text = "\0";
	var a = ["._. ","... ","._. ","._. ","... ","._. ","._. ","._. ","._. ","._. "];
	var b = ["|.| ","..| ","._| ","._| ","|_| ","|_. ","|_. ","..| ","|_| ","|_| "];
	var c = ["|_| ","..| ","|_. ","._| ","..| ","._| ","|_| ","..| ","|_| ","..| "];
	for(i = 0; i < num.length; i++)
	{
		j = 0;
		while(j != Number(num[i]))
			j++;
		text += a[j];
	}
	text = text.substring(0, text.length - 1) + "\n";
	for(i = 0; i < num.length; i++)
	{
		j = 0;
		while(j != Number(num[i]))
			j++;
		text += b[j];
	}
	text = text.substring(0, text.length - 1) + "\n";
	for(i = 0; i < num.length; i++)
	{
		j = 0;
		while(j != Number(num[i]))
			j++;
		text += c[j];
	}
	text = text.substring(0, text.length - 1) + "\n";
	console.log(text);
	return text;
};