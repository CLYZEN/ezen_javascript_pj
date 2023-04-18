// 1. 전체 url 가져오기
const currentURL = location.href

// 2. 쿼리스트링 파라메터 가져오기
const urlObj = new URL(currentURL)
const params = urlObj.searchParams
const id = params.get("id")
console.log(id)

function getMoiveDetail() {
  var temp = {}
  var movieUrlAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=8e7d2baf58a031cf34c92d428e1f6df7&language=ko-KR`

  $.ajax({
    type: "GET",
    url: movieUrlAPI,
    dataType: "json",
    async: false,
    success: function (data) {
      console.log("전체 data : ")
      console.log(data)
    },
    error: function (request, status, error) {
      console.log("code:" + request.status)
      console.log("message:" + request.responseText)
      console.log("error:" + error)
    },
  })
  return temp
}

getMoiveDetail()
