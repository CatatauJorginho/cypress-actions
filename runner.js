const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImY1NWM5NzZlLTY0ZmEtNGEyZC1hMDljLWZmN2I0ZGVmYmZhZC0xNjgzNjc5Mzg5Mzg5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiY2VhZGVlZGMtNTEyOS00YTU3LWIwY2YtNGI4NDNjNTkzNWZiIiwidHlwZSI6InQifQ.a8JdAs_m5YGobKk2uE81S3AiHy5i3bTh2vjoAQUjeSU'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
