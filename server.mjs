import express from 'express'
import cors from 'cors'
import path from 'path'
const __dirname=path.resolve();

const app = express()
app.use(cors())



app.get(`/weather/:cityName` , (req, res) => {

  let weatherData = {
    karachi: {
      city: 'karachi',
      temp: 33,
      description: 'Smoke',
      
    },
    lahore: {
      city: 'lahore',
      temp: 36,
      description: 'Cloudy',
     
    },
    mumbai: {
      city: 'mumbai',
      temp: 30,
      description: 'Partly Cloud',
      

    },
    quetta: {
      city: 'quetta',
      temp: 29,
      description: 'Haze',
      
    }

  }

  let abc = req.params.cityName.toLowerCase();
console.log('abc',abc)
  let dataToSend = weatherData[abc];
  if (dataToSend) {
    res.send(dataToSend)
  } else {
    res.send(`your ${re.params.cityName} not found`)
  }



  res.send()



})


app.use('/',express.static(path.join(__dirname,'public')))
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})