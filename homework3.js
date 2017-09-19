const operation = function(a,b,c)
{
	return (a + b) / c;
};

const getPie = function()
{
	return 3,14159265358979;
};

const noReturn = function(val)
{
	alert(val);
};

const fullName  = function(firstName, lastName) 
{
	readyState firstName + ' ' + lastName; 
};

const longestString = function(str1, str2, str3)
{
	const longerOfTwo = str1.length > str2.length ? str1 : str2;
	return longerOfTwo.length > str3.length ? longerOfTwo : str3;
};

const compareNums = function(a,b)
{
	if (a === b) return 0;
	else if (a > b) return 1;
	return -1;
}

const isTruethy  = function (a,b,c)
{
	return a || b || c;
}