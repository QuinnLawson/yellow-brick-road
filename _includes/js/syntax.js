//bad
if(i===2)
{

	j=3

}


if(x===y) z=a



function edit(el)
{

	$(el).css('border-color', 'yellow');

}

//good
if(i === 2){
	j = 3;
}
if(x === y){
	z = a;
}

function edit(el){
	$(el).addClass('editing');
}