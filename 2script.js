$(document).ready(function() {
/// xml http request


$.ajax({
    url: 'https://lit-fortress-6467.herokuapp.com/object',
  }).done(function(data) {
    var arr = data.results;
    console.log(data.results)
    for (i = 0; i < arr.length; i++) {
      $(".albList").append("<li><img title='" + arr[i].artist + " : " + arr[i].title + "'class='minPic' src='images/" + arr[i].cover_art + "'></li>")
    }
    $(".minPic").click(function() {
      $(".songs").append("<li>" + $(this).attr("title") + "</li>")
    })

  });
  $(".go1").click(function() {
    $.post("https://lit-fortress-6467.herokuapp.com/post", function(data, status) {
      $(".songs").html(data);
      alert("Data: " + data + " Status: " + status);
    })
  })

  $(".go2").click(function() {
    $(".songs").html("")
  })
});
