import axios from 'axios'

var axiosResolverPromise = function(url) {
    return axios.get(url).then((response) => {
      let data = response.data
      let randomNumbers = data.split(/\r?\n/).filter((stringNum) => { return Number(stringNum) > 0}).map((stringNum) => { return Number(stringNum)})
      return randomNumbers
    })
}

var randomProviderPromise = function() {
  let promiseLeft = axiosResolverPromise('https://www.random.org/integers/?num=10&min=10&max=99&col=1&base=10&format=plain&rnd=new')
  let promiseRight = axiosResolverPromise('https://www.random.org/integers/?num=10&min=1&max=10&col=1&base=10&format=plain&rnd=new')

  return Promise.all([promiseLeft, promiseRight]).then(function(responses) {
    console.log("Promise All then")
    console.log(responses);
    return Promise.resolve(responses)
  });
}



export default randomProviderPromise
