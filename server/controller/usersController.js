
const getUsers = (req, res) => {
  res.send("getUsers funciona");
}
 
const getUserUid = (req, res) => {
  res.send("getUserUid funciona");
}

const postUsers = (req, res) => {
  res.send("postUsers funciona");
}

const putUserUid = (req, res) => {
  res.send("putUserUid funciona");
}

const deleteUserUid = (req, res) => {
  res.send("deleteUserUid funciona");
}

module.exports = { getUsers, postUsers, getUserUid, putUserUid, deleteUserUid }