function getPopularMoive() {
  var temp = {}
  var movieUrlAPI =
    "https://api.themoviedb.org/3/movie/popular?api_key=8e7d2baf58a031cf34c92d428e1f6df7&language=ko-KR&page=1&region=KR"

  $.ajax({
    type: "GET",
    url: movieUrlAPI,
    dataType: "json",
    async: false,
    success: function (data) {
      console.log(data)
      var results = data.results
      console.log(results)

      for (const result of results) {
        console.log(result)
        console.log(result.title)
        console.log(result.poster_path)

        let imgURL = "https://image.tmdb.org/t/p/w500" + result.poster_path
        $(".images").append(
          `<a href = "./detail.html?id=${result.id}"><img src="${imgURL}"></a>`
        )
        $(".images").append(`제목 : ${result.title},`)
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

getPopularMoive()
