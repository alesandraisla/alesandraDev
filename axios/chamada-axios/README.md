Link para clonar API que foi utilizada:

https://github.com/jakeliny/axios-api

Na pasta node-api rode o comando:

npm start

No arquivo index.js de dentro da pasta do node-api alterei o código:

const express = require('express')
const cors = require('cors')

const app = express()

app.listen(5500, () => console.log('Rodando na porta 5500'))

app.use(cors())

app.use(express.json())

let users = [{
  id: 1,
  student: "Naruto Uzumaki",
  avatar: "http://lorempixel.com/400/400/",
  course: "Engenharia da programação"
}]


app.route('/api').get((req, res) => res.json({
  users
}))

app.route('/api/:id').get((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  res.json(user)
})

app.route('/api').post((req, res) => {
  const lastId = users[users.length - 1].id
  users.push({
    id: lastId + 1,
    student: req.body.student,
    avatar: req.body.avatar,
    course: req.body.course
  })
  res.json('Saved user')
})

app.route('/api/:id').put((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  const updatedUser = {
    ...user,
    student: req.body.student,
    avatar: req.body.avatar,
    course: req.body.course
  }

  users = users.map(user => {
    if (Number(user.id) === Number(userId)) {
      user = updatedUser
    }
    return user
  })

  res.json("Updated user")
})

app.route('/api/:id').delete((req, res) => {
  const userId = req.params.id

  users = users.filter(user => Number(user.id) !== Number(userId))

  res.json('Deleted User')
})
