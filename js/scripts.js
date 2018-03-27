$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var word = $("#input").val();
    var reword = "";

    for (var i = word.length - 1; i >= 0; i--) {
      reword += word[i];
    }
    $("#results").text(reword);
    if (reword === word) {
      alert("this is a Palindrome")
    }else {
      alert("This is not a Palindrome");
    }

  });

});
