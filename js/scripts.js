$(document).ready(function() {
  $("#formOne").submit(function(event) {
    // var Adjective1Input = $("input#Adjective1").val();
    // var Adjective2Input = $("input#Adjective2").val();
    // var ExclamationInput = $("input#Exclamation").val();
    // var Noun1Input = $("input#Noun1").val();
    // var Noun2Input = $("input#Noun2").val();
    // var Noun3Input = $("input#Noun3").val();
    // var Noun4Input = $("input#Noun4").val();
    // var Noun5Input = $("input#Noun5").val();
    // var Noun6Input = $("input#Noun6").val();
    // var Noun7Input = $("input#Noun7").val();
    // var Noun8Input = $("input#Noun8").val();
    // var OccupationInput = $("input#Occupation").val();
    // var ptverbInput = $("input#ptverb").val();

    var blanks = ["Adjective1", "Adjective2", "Exclamation", "Noun1", "Noun2", "Noun3", "Noun4", "Noun5", "Noun6", "Noun7", "Noun8", "Occupation", "ptverb"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    // $(".Adjective1").text(Adjective1Input);
    // $(".Adjective2").text(Adjective2Input);
    // $(".Exclamation").text(ExclamationInput);
    // $(".Noun1").text(Noun1Input);
    // $(".Noun2").text(Noun2Input);
    // $(".Noun3").text(Noun3Input);
    // $(".Noun4").text(Noun4Input);
    // $(".Noun5").text(Noun5Input);
    // $(".Noun6").text(Noun6Input);
    // $(".Noun7").text(Noun7Input);
    // $(".Noun8").text(Noun8Input);
    // $(".Occupation").text(OccupationInput);
    // $(".ptverb").text(ptverbInput);

    $("#story").show();

    event.preventDefault();
  });
});
