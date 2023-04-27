function getPopularMoive() {
  var temp = {};
  var movieUrlAPI =
    "https://api.themoviedb.org/3/movie/popular?api_key=8e7d2baf58a031cf34c92d428e1f6df7&language=ko-KR&page=1&region=KR";

  $.ajax({
    type: "GET",
    url: movieUrlAPI,
    dataType: "json",
    async: false,
    success: function (data) {
      // console.log(data);
      var results = data.results;
      // console.log(results);

      for (const result of results) {
        console.log(result);
        // console.log(result.title);
        // console.log(result.poster_path);
        let imgURL = "https://image.tmdb.org/t/p/w300" + result.poster_path;
        let titmovie = result.title;

        let backdrop = "https://image.tmdb.org/t/p/w300" + result.backdrop_path;
        let average = result.vote_average;

        // console.log(average);

        let overview = result.overview;

        if (overview.length >= 70) {
          overview = result.overview.substring(0, 71) + "...";
        }

        // console.log(overview);

        // img
        $(".images").append(
          `<figure class="movie-img  ">
          <div class="section_main card">
          <a href = "./detail.html?id=${result.id}" ><img src="${imgURL}" alt="영화포스터" class="card"></a>
          <div class="average">${average}</div>
          <div class="movie-title">
          <p>${titmovie}<br>${result.release_date}</p></div>
          <figcaption class="movie-over">${overview}</figcaption>
          </div></figure>`
        );
        // if () {
        //   $(".123").append(`
        //     <img src="" />
        //   `)
        // }
      }
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  return temp;
}

getPopularMoive();
