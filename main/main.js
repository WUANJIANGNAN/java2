module.exports = function main(num)
{
	var i;
	var j;
	var text;
	var up = [“._.”,“...”,“._.”,“._.”,”...”,”._.”,”._.”,”._.”,”._.”,”._.”];
	var mid = [“|.|”,”..|”,”._|”,”._|”,”|_|”,”|_.”,”|_.”,”..|”,”|_|”,”|_|”];
	var down = [“|_|”,”..|”,”|_.”,”._|”,”..|”,”._|”,”|_|”,”..|”,”|_|”,”..|”];
	for(i = 0, i < num.length, i++)
	{
		j = 0;
		while(j != Number(i))
			j++;
		text += up[j];
	}
	text = text + "\n";
	for(i = 0, i < num.length, i++)
	{
		j = 0;
		while(j != Number(i))
			j++;
		text += mid[j];
	}
	text = text + "\n";
	for(i = 0, i < num.length, i++)
	{
		j = 0;
		while(j != Number(i))
			j++;
		text += down[j];
	}
	text = text + "\n";
	console.log(text);
	return text;
};