$(document).ready(function(){
  $("form.form-group").submit(function(event){

        var number1 = parseInt($("input#length1").val());
        var number2 = parseInt($("input#length2").val());
        var number3 = parseInt($("input#length3").val());

        if (number1 + number2 <= number3 || number2 + number3 <= number1 || number1 + number3 <= number2){
          $("#result").text(" Not a triangle");
          $(".result").show();
        } else if(number1 === number2 && number2 != number3 || number1 != number2 && number2 === number3) {
          $("#result").text(" Iscosceles");
          $(".result").show();
        } else if (number1 != number2 && number2 != number3){
          $("#result").text(" Scalene")
          $(".result").show();
        } else if (number1 === number2 && number1 === number3){
            $("#result").text(" Equilateral");
            $(".result").show();
        }

        event.preventDefault();
  });
});
