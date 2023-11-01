import express from'express'
import morgan from 'morgan'  
import ViteExpress from 'vite-express'


const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))
app.use(express.json())

 


import handlerFunctions from './controller.js'

app.get('/recipe', handlerFunctions.getRecipe)
app.post('/addRecipe', handlerFunctions.addRecipe)
app.delete('/deleteRecipe/:id', handlerFunctions.deleteRecipe)
app.put('/editRecipe/:id', handlerFunctions.editRecipe)



ViteExpress.listen(app, 5555, () => console.log(`Server working on http://localhost:5555`))
