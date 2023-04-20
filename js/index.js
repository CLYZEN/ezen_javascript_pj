document.cookie = "safeCookie1=foo; SameSite=Lax"
document.cookie = "safeCookie2=foo"
document.cookie = "crossCookie=bar; SameSite=None; Secure"
// 인기있는 영화
function getPopularMoive() {
  var temp = {}
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

        // console.log(result)
        var poster_path = result.poster_path
        // console.log(poster_path)

        $(".populer_poster").append(
          `<swiper-slide><a href="./detail.html?id=${movieId}"><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="populer_poster"></a></swiper-slide>`
        )
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
                trailerKey.url = videoURL

                $(".trailer_div > .mySwiper").append(`
                  <swiper-slide>
                    <iframe width="640px" height="360px"
                    src="${videoURL}"
                    title="YouTube video player" frameborder="0"
                    calss="d-block w-100"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                  </swiper-slide>
                  `)
              }
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
// 현재 상영중인 영화
function getNowPlayingMovie() {
  var NowPlayingURL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=8e7d2baf58a031cf34c92d428e1f6df7&language=ko-KR&page=1&region=KR"
  $.ajax({
    type: "GET",
    url: NowPlayingURL,
    dataType: "json",
    async: false,
    success: function (data) {
      var results = data.results
      for (const result of results) {
        var movieId = result.id
        // console.log(result)
        var poster_path = result.poster_path
        // console.log(poster_path)

        $(".nowplaying_poster").append(
          `<swiper-slide><a href="./detail.html?id=${movieId}"><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="populer_poster"></a></swiper-slide>`
        )
      }
    },
    error: function (request, status, error) {
      console.log("code:" + request.status)
      console.log("message:" + request.responseText)
      console.log("error:" + error)
    },
  })
}
// 최고평점 영화
function top_ratedMovie() {
  var top_ratedURL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=8e7d2baf58a031cf34c92d428e1f6df7&language=ko-KR&page=1&region=KR"
  $.ajax({
    type: "GET",
    url: top_ratedURL,
    dataType: "json",
    async: false,
    success: function (data) {
      var results = data.results
      for (const result of results) {
        var movieId = result.id
        // console.log(result)
        var poster_path = result.poster_path
        // console.log(poster_path)

        $(".toprated_poster").append(
          `<swiper-slide><a href="./detail.html?id=${movieId}"><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="populer_poster"></a></swiper-slide>`
        )
      }
    },
    error: function (request, status, error) {
      console.log("code:" + request.status)
      console.log("message:" + request.responseText)
      console.log("error:" + error)
    },
  })
}
// 개봉예정 영화
function upcomingMovie() {
  var upcomingURL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=8e7d2baf58a031cf34c92d428e1f6df7&language=ko-KR&page=1&region=KR"
  $.ajax({
    type: "GET",
    url: upcomingURL,
    dataType: "json",
    async: false,
    success: function (data) {
      var results = data.results
      for (const result of results) {
        var movieId = result.id
        // console.log(result)
        var poster_path = result.poster_path
        // console.log(poster_path)

        $(".upcoming_poster").append(
          `<swiper-slide><a href="./detail.html?id=${movieId}"><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="populer_poster"></a></swiper-slide>`
        )
      }
    },
    error: function (request, status, error) {
      console.log("code:" + request.status)
      console.log("message:" + request.responseText)
      console.log("error:" + error)
    },
  })
}
getPopularMoive()
getNowPlayingMovie()
top_ratedMovie()
upcomingMovie()
