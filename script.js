var a;
var b;
var Name1;
$(".bob").click(function(){
   a = $(".gaming").val();
   console.log(a);
   a=parseInt(a);
   b = $(".gaming2").val();
   b=parseInt(b);
   Name1= $(".Name").val();
   console.log(a);
   var c=a*b;
console.log(c);
$(".results").append("Hello " +Name1+ " in a week you game " +c+" hours");
});


