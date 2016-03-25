$(document).ready(function() {
  $("form").submit(function(event) {
    var points = 0;
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
      $("#answer1").slideDown(1750);
}
    if (points > 5 && points < 12){
      $("#answer2").slideDown(1750);
}
    if (points > 11 && points < 16){
      $("#answer3").slideDown(1750);
}
    if (points > 15 && points < 20){
      $("#answer4").slideDown(1750);
}
    event.preventDefault();
  });
});
