$( function()
{

	//jQueryのreplaceを使う
	$('body').each( function()
	{
		var txt = $(this).html();
		
		$(this).html( txt.replace(/お菓子作り/g, '子作り' ) );
	} );
	
	
} );
