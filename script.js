$(document).ready(function() {
/// xml http request
$.ajax({
    url: 'https://lit-fortress-6467.herokuapp.com/object',
  }).done(function(data) {
    var arr = data.results;

    for (i = 0; i < 3; i++) {
      var rand = arr[Math.floor(Math.random() * arr.length)]
      console.log(rand.cover_art)
      $(".right-pic").append("<img class='minPic' src='images/" + rand.cover_art + "'>" )
      arr.splice(arr.indexOf(rand),1)
    }

  });
});
