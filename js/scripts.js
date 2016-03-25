$(document).ready(function() {
  $("form").submit(function(event) {
    var points = 0;
    // var point = parseInt($("option").val());
    var result = parseInt($("#gender").val());
    points += result;

    result = parseInt($("#candy").val());
    points += result;

    result = parseInt($("#future").val());
    points += result;

    result = parseInt($("#pres").val());
    points += result;

    result = parseInt($("input:radio[name=country]:checked").val());
    points += result;

    if (points === 5){
      $("#answer1").show();
}
    if (points > 5 && points < 11){
      $("#answer2").show();
}
    if (points > 11 && points < 15){
      $("#answer3").show();
}
    if (points > 15 && points < 20){
      $("#answer4").show();
}
    event.preventDefault();
  });
});
