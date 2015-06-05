$(document).ready(function(){

	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
	$('#fullpage').fullpage({
		anchors: ['Hello', 'Projects', 'Travels'],
		sectionsColor: ['#EEEEE', '#1BBC9B', '#7E8F7C'],
		responsive: 400,
		css3: true
	});
    $(function() {
        $(".dial").knob({
            readOnly :true,
            width:50,
            height:50
        });
    });
});






function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < array.length)
                return {value: array[nextIndex++]};
            else {
                nextIndex = 0;
                return {value: array[nextIndex++]};
            }
        }
    }
}

var helloAry = ['你好!', 'Hello!', 'Bonjour!', 'Ola!', 'Hallo!', 'Ciao!', '今日は!', 'Здравствуйте!'];
var iter = makeIterator(helloAry);
setInterval(function () {
    $("#BigWord").fadeOut("slow", function () {
        $("#BigWord").text(iter.next().value);
        $("#BigWord").fadeIn('slow', function () {
        });
    });
}, 3000);
