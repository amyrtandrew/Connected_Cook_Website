import express from'express'
import morgan from 'morgan'  
import ViteExpress from 'vite-express'


const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))
app.use(express.json())

// import handlerFunctions from './controller.js'

// app.get('/person', handlerFunctions.getClients)
// app.post('/addClients', handlerFunctions.addClients)
// app.delete('/deleteClients/:clientNum', handlerFunctions.deleteClients)
// app.put('/editClients/:clientNum', handlerFunctions.editClients)



ViteExpress.listen(app, 5555, () => console.log(`Server working on http://localhost:5555`))
