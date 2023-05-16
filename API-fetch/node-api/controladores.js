let users = [{
  id: 1,
  name: "Fernanda",
  age: 25,
  city: "Salvador",
}]

/* const getUsers = (req, res) => {
  return res.json({users})
}
 */


const getUsers = (req, res) => {
  //parametros de pesquisa são captados se você passar o 
  //nome da rota e um parametro após um ?
  //a rota fica http://localhost:80/api?name=nanda&city=sal

  //name=fern&city=sal

  let filteredUsers = []

  if(req.query.name && req.query.city) {
    filteredUsers = users.filter(user =>user.name.toLowerCase().includes(req.query.name) && user.city.toLowerCase().includes(req.query.city.toLowerCase()))

    return res.json(filteredUsers)
  }

  if(req.query.name) {
    let usersByName = users.filter(user => user.name.toLowerCase().includes(req.query.name.toLowerCase()))
    
    filteredUsers.push(...usersByName)
  }

  if(req.query.city) {
    let usersByCity = users.filter(user => user.city.toLowerCase().includes(req.query.city.toLowerCase()))
    
    filteredUsers.push(...usersByCity)
  }

  return res.json(filteredUsers.length <= 0 && (req.query.name || req.query.city) ? filteredUsers : users )
} 


const getUser = (req, res) => {
  try {
    const user = users.find(user => Number(user.id) === Number(req.params.id))
    return res.json(user)

  } catch(error){
      return res.status(400).json('Usuário não encontrado!')
  }
}

const createUser = (req, res) => {
  const { name, age, city } = req.body;

  try {
    const lastId = users[users.length - 1].id
    users.push({
      id: lastId + 1,
      name,
      age,
      city
    })
    
    return res.json('Usuário cadastrado com sucesso!')

  } catch (e) {
    return res.status(400).json("Aconteceu algum erro:" + e.message)
  }
}

const updateUser = (req, res) => {
  const user = users.find(user => Number(user.id) === Number(req.params.id))

  if (!user) {
    return res.json('Usuário não encontrado')
  }

  const updatedUser = {
    ...user,
    name: req.body.name ?? user.name,
    age: req.body.age ?? user.age,
    city: req.body.city ?? user.city
  }

  users = users.map(user => {
    if (Number(user.id) === Number(req.params.id)) {
      user = updatedUser
    }
    return user
  })

  return res.json(`Usuário ${updatedUser.name} atualizado com sucesso`)
}

const deleteUser = (req, res) => {
  const user = users.find(user => Number(user.id) === Number(req.params.id))

  if (!user) {
    return res.json('Usuário não encontrado')
  }

  users = users.filter(user => Number(user.id) !== Number(req.params.id))

  return res.json(`Usuário ${user.name} deletado com sucesso!`)
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}