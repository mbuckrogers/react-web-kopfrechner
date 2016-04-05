import axios from 'axios'


var axiosResolverPromise = function(url) {
    return axios.get(url).then((response) => {
      let data = response.data
      let randomNumbers = data.split(/\r?\n/).filter((stringNum) => { return Number(stringNum) > 0}).map((stringNum) => { return Number(stringNum)})
      return randomNumbers
    })
};

var oneNumberGeneratorSingle = function(mini,maxi) {
  var fetcherRunning = undefined
  var numbers = []
  var mini = mini
  var maxi = maxi

  var retVal = function() {
    var url = `https://www.random.org/integers/?num=5&min=${mini}&max=${maxi}&col=1&base=10&format=plain&rnd=new`
    // if the numbers array is not empty return the last number

    if(numbers.length > 0) {
        return Promise.resolve(numbers.shift())
    }

    var that = this;

    if(fetcherRunning) {
      var anotherPromise = new Promise(function(resolve, reject) {
        fetcherRunning.then(() => {
          resolve(retVal());
        })
      })
      return anotherPromise;
    }


    var aPromise = axiosResolverPromise(url);
    var retPromise = new Promise(function(resolve, reject) {
      aPromise.then(numsFromWeb => {
        console.log("Axios promise resolved to " + numsFromWeb)
        numbers = numsFromWeb;
        let anum = numbers.shift()
        fetcherRunning = undefined
        resolve(anum);
      })
    })
    fetcherRunning = retPromise;
    return retPromise;
  }

  return retVal;
}

var TwoNumberGenerator = function() {
  var lefti = oneNumberGeneratorSingle(3, 19)
  var righti = oneNumberGeneratorSingle(11, 99)

  return {
    twoNumbers: function() {
      return Promise.all([lefti(), righti()])
    }

  }

}

export default TwoNumberGenerator
