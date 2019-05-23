$(document).ready(function(){
	$('button').click(function(){
		$.getJSON('https://jsonplaceholder.typicode.com/posts', function(obj){
			//$('#title').text(obj[0].title);
			console.log(obj.length);
			for (var i =0; i<obj.length; i++)
			{
				var html = "<p>" + obj[i].title + "</p>";
				$('body').append(html);

			}
		})
	});
});
