$(document).ready(function() {
  $("form").submit(function(event) {
    var points = 0;
    var point = parseInt($("option").val());
    var result = parseInt($("#gender").val());
    points += result;
    result = parseInt($("#candy").val());
    points += result;
    result = parseInt($("#future").val());
    points += result;
    result = parseInt($("#pres").val());
    points += result;

    if (point = 0){
      addClass(".has-error");
}
    if (points === 4){
      $("div#answer3").show(".hidden-sloth");
}
    if (points >4 && points < 7){
      $("div#answer1").show(".hidden-character");
}
    if (points > 7 && points < 12){
      $("div#answer2").show(".hidden-celeb1");
}
    if (points > 11 && points < 16){
      $("div#answer4").show(".hidden-celeb2");
}
    event.preventDefault();
  });
});
