// 1. 전체 url 가져오기
const currentURL = location.href;

// 2. 쿼리스트링 파라메터 가져오기
console.log(currentURL);
const urlObj = new URL(currentURL);
const params = urlObj.searchParams;
const id = params.get("id");

function getMoiveDetail() {
  var temp = {};
  const movieUrlAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=d5973569877cd7950c8f05e4748588b8&language=ko-KR`;
  $.ajax({
    type: "GET",
    url: movieUrlAPI,
    dataType: "json",
    async: false,
    success: function (data) {
      console.log(data);

      let imgURL = "https://image.tmdb.org/t/p/w500" + data.poster_path;
      $(".images").append(
        `<a href="./detail2.html?id=${data.id}"><img src="${imgURL}"></a>`
      );
      const title = data.title;
      const language = data.original_language;
      const release_date = data.release_date;
      const tagline = data.tagline;
      const overview = data.overview;
      const vote_average = data.vote_average;
      const vote_count = data.vote_count;

      $(".title").text(`${title}`);
      $(".language").text(`개봉일(언어) :  ${release_date} (${language})`);
      $(".tagline").text(`${tagline}`);
      $(".overview").text(`${overview}`);
      $(".vote_average").text(
        `평점 : ${vote_average} / 투표인원 : ${vote_count} `
      );
    },
    error: function (request, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  return temp;
}

getMoiveDetail();
