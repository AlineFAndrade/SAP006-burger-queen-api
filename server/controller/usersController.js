const db = require('../db/models')

const getUsers = (req, res) => {
  db.user.findAll({
    attributes: {
      exclude: ['password']
    }
  }).then((allUsers) => {
    res.send(allUsers)
  }).catch((error) => {   
    res.status(502)
    res.send(error)
  })
}
 
const getUserUid = (req, res) => {
  db.user.findOne({
    where: {
      id: req.params.uid
    },
    attributes: {
      exclude: ['password']
    }
  }).then((oneUser) => {
    res.status((oneUser) ? 200 : 404)
    res.send(oneUser)
  }).catch((error) => {
    console.log(error)
    res.status(502)
    res.send(error)
  });
}

const postUsers = (req, res) => {
  const userToCreate = req.body;
  db.user.create(userToCreate).then((createdUser) => {
    if (createdUser) {
      const jsonResponse = createdUser.toJSON()
      delete jsonResponse.password
      res.status(201)
      res.send(jsonResponse)
    } else {
      res.status(400)
      res.send(createdUser)
    }
  }).catch((erro) => {
    res.status(502)
    res.send(erro)
  })
}

const putUserUid = (req, res) => {
  db.user.findOne({
    where: {
      id: req.params.uid
    },
    attributes: {
      exclude: ['password']
    }
  }).then((userToUpdate) => {
 
    if (userToUpdate) {
 
      // Se achar o usuário, eu troco somente o nome e o papel dele.
      // De novo, assim como no create pode validar os dados aqui.
      userToUpdate.name = req.body.name;
      userToUpdate.role = req.body.role;
 
      userToUpdate.save().then((result) => {
        console.log(result)
        res.send(userToUpdate)
      }).catch((erro) => {
        res.status(400)
        res.send(erro)
      })
 
    } else {
      // Aqui só acontece quando não acho o ID do usuario no banco
      res.status(404)
      res.send()
    }
 
  }).catch((erro) => {
    res.status(502)
    res.send(erro)
  })
}

const deleteUserUid = (req, res) => {
  db.user.destroy({
    where: {
      id: req.params.uid
    }
  }).then(() => {
    res.status(204)
    res.send()
  }).catch((error) => {
    res.status(502)
    res.send(error)
  });
}

module.exports = { getUsers, postUsers, getUserUid, putUserUid, deleteUserUid }