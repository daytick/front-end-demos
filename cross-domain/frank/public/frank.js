const request = new XMLHttpRequest()
request.open('get', 'http://qq.com:8888/friends.json')
request.onload = () => {
  console.log(request.response)
}
request.send()