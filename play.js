var data = [
  {url: "https://youtu.be/GURvUWbXd1k", expected: "GURvUWbXd1k"},
  {url: "https://www.youtube.com/watch?v=jJo0MT3wDBs", expected: "jJo0MT3wDBs"},
  {url: "https://youtu.be/l6jW7DVYXuE?t=1h29m51s", expected: "l6jW7DVYXuE"}
];


data.forEach(function(example, i){
  console.log("******", i, "******")

  console.log(example.url)

  // var match = example.url.match(/https:\/\/youtu.be\/(.*)/);
  var match = example.url.match(/https:\/\/youtu.be\/(.*)(\?.*)?/);
  console.log(match)
})
