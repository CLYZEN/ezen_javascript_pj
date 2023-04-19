function getPopularMoive() {
  var temp = {}
  var movieID = {}
  var movieUrlAPI =
    "https://api.themoviedb.org/3/movie/popular?api_key=8e7d2baf58a031cf34c92d428e1f6df7&language=ko-KR&page=1&region=KR"
  var trailerKey = {}

  $.ajax({
    type: "GET",
    url: movieUrlAPI,
    dataType: "json",
    async: false,
    success: function (data) {
      var results = data.results

      for (const result of results) {
        var movieId = result.id
        function getMovieVideo() {
          var VideokeyURL = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=8e7d2baf58a031cf34c92d428e1f6df7&language=ko-KR`
          $.ajax({
            type: "GET",
            url: VideokeyURL,
            dataType: "json",
            async: false,
            success: function (data) {
              var results = data.results

              for (const result of results) {
                let videoURL = "https://www.youtube.com/embed/" + result.key
                console.log(videoURL)
                trailerKey.url = videoURL
                for (var i = 0; i >= 10; i++) {
                  $(".carousel-item")
                    .append(`                  <iframe width="100%" height="56.25%"
                  src="${videoURL}"
                  title="YouTube video player" frameborder="0"
                  calss="d-block w-100"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>`)
                }
              }

              // $(".images").append(`제목 : ${result.title},`)
            },
            error: function (request, status, error) {
              console.log("code:" + request.status)
              console.log("message:" + request.responseText)
              console.log("error:" + error)
            },
          })
        }
        getMovieVideo()
      }
    },
    error: function (request, status, error) {
      console.log("code:" + request.status)
      console.log("message:" + request.responseText)
      console.log("error:" + error)
    },
  })
  return temp
}
//api.themoviedb.org/3/movie/{movie_id}/videos?api_key=8e7d2baf58a031cf34c92d428e1f6df7&language=ko-KR

getPopularMoive()
