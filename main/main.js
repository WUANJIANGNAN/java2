module.exports = function main(num)
{
	var i;
	var j;
	var text;
	var up = [];
	var mid = [];
	var down = [];
	for(i = 0, i < num.length, i++)
	{
		j = 0;
		while(j != Number(i))
			j++;
		text += up[j - 1];
	}
	text = text + "\n";
	for(i = 0, i < num.length, i++)
	{
		j = 0;
		while(j != Number(i))
			j++;
		text += up[j - 1];
	}
	text = text + "\n";
	for(i = 0, i < num.length, i++)
	{
		j = 0;
		while(j != Number(i))
			j++;
		text += up[j - 1];
	}
	text = text + "\n";
	console.log(text);
	return text;
};