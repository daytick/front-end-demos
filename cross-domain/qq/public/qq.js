const request = new XMLHttpRequest()
request.open('get', '/friends.json')
request.onload = () => {
  console.log(request.response)
}
request.send()