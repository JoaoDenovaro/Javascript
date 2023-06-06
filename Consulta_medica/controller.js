let consultas = [
  {
    id: 1,
    especiality: "Ginecologista",
    openDates: [
      {id: 1, date:"05/05/2023, 09:00"},
      {id: 2, date:"05/05/2023, 10:00"},
      {id: 3, date: "05/05/2023, 11:00"},
      {id: 4, date: "05/05/2023, 12:00"},
      {id: 5, date: "05/05/2023, 13:00"},
      {id: 6, date: "05/05/2023, 14:00"},
    ]
  },
  {
    id: 2,
    especiality: "Clinico Geral",
    openDates: [
      {id: 1, date:"05/05/2023, 09:00"},
      {id: 2, date:"05/05/2023, 10:00"},
      {id: 3, date: "06/05/2023, 09:00"},
      {id: 4, date: "06/05/2023, 10:00"},
      {id: 5, date: "07/05/2023, 16:00"},
      {id: 6, date: "15/05/2023, 14:00"},
    ]
  },
  {
    id: 3,
    especiality: "Cardiologista",
    openDates: [
      {id: 1, date:"05/05/2023, 13:00"},
      {id: 2, date:"05/05/2023, 14:00"},
      {id: 3, date: "06/05/2023, 14:00"},
      {id: 4, date: "06/05/2023, 17:00"},
      {id: 5, date: "07/05/2023, 13:00"},
      {id: 6, date: "07/05/2023, 14:00"},
    ]
  },
  {
    id: 4,
    especiality: "Oftalmologista",
    openDates: [
      {id: 1, date:"09/05/2023, 13:00"},
      {id: 2, date:"09/05/2023, 14:00"},
      {id: 3, date: "09/05/2023, 15:00"},
      {id: 4, date: "12/05/2023, 07:00"},
      {id: 5, date: "12/05/2023, 09:00"},
    ]
  },
  {
    id: 5,
    especiality: "Otorrino",
    openDates: [
      {id: 1, date:"09/05/2023, 07:00"},
      {id: 2, date:"09/05/2023, 08:00"},
      {id: 3, date: "09/05/2023, 09:00"},
      {id: 4, date: "09/05/2023, 10:00"},
      {id: 5, date: "09/05/2023, 11:00"},
      {id: 6, date: "10/05/2023, 10:00"},
      {id: 7, date: "10/05/2023, 11:00"},
    ]
  },
  {
    id: 6,
    especiality: "Urologista",
    openDates: [
      {id: 1, date:"09/05/2023, 07:00"},
      {id: 2, date:"09/05/2023, 08:00"},
      {id: 3, date: "09/05/2023, 09:00"},
      {id: 4, date: "09/05/2023, 10:00"},
      {id: 5, date: "09/05/2023, 11:00"},
      {id: 6, date: "10/05/2023, 10:00"},
      {id: 7, date: "10/05/2023, 11:00"},
    ]
  },
  {
    id: 7,
    especiality: "Gastroenterologista",
    openDates: [
      {id: 1, date:"10/05/2023, 07:00"},
      {id: 2, date:"11/05/2023, 08:00"},
      {id: 3, date: "11/05/2023, 09:00"},
      {id: 4, date: "25/05/2023, 07:00"},
      {id: 5, date: "25/05/2023, 11:00"},
      {id: 6, date: "02/06/2023, 09:00"},
      {id: 7, date: "02/06/2023, 10:00"},
    ]
  },
  {
    id: 8,
    especiality: "Dermatologia",
    openDates: [
      {id: 1, date:"11/05/2023, 07:00"},
      {id: 2, date:"11/05/2023, 08:00"},
      {id: 3, date: "11/05/2023, 09:00"},
    ]
  },
  {
    id: 9,
    especiality: "Pediatria",
    openDates: [
      {id: 1, date:"05/05/2023, 07:00"},
      {id: 2, date:"05/05/2023, 08:00"},
      {id: 3, date: "05/05/2023, 09:00"},
      {id: 4, date: "08/05/2023, 08:00"},
      {id: 5, date: "08/05/2023, 09:00"},
      {id: 6, date: "08/05/2023, 10:00"},
      {id: 7, date: "08/05/2023, 11:00"},
      {id: 8, date: "12/05/2023, 08:00"},
      {id: 9, date: "13/05/2023, 09:00"},
    ]
  },
  {
    id: 10,
    especiality: "Psiquiatria",
    openDates: [
      {id: 1, date:"05/08/2023, 07:00"},
      {id: 2, date:"05/08/2023, 08:00"},
      {id: 3, date: "25/08/2023, 07:00"},
      {id: 4, date: "25/05/2023, 08:00"},
      {id: 5, date: "10/10/2023, 09:00"},
      {id: 6, date: "11/10/2023, 09:00"},
    ]
  },
]

let consultasMarcadas = [{
  id: 1,
  name: "Fernanda",
  phone: "71987799291",
  convenio: false,
  date: "04/05/2023 10:00",
  especiality: "Ginecologista"
}]

const getEspecialities = (req, res) => res.json(consultas)

const getEspeciality = (req, res) => {
  const { id } = req.params

  const especialityData = consultas.find(consulta => consulta.id == id)

  if(!especialityData) {
    return res.status(404).json("Especialidade não encontrada")
  }

  return res.json(especialityData)
}

const getAppointments = (req, res) => res.json(consultasMarcadas)

const getAppointment = (req, res) => {
  const {id} = req.params
  let consulta = consultasMarcadas.find(consulta => consulta.id === Number(id))

  if(!consulta) {
   return res.status(404).json("Consulta não encontrada")
  }
  
  return res.json(consulta)
}

const scheduleNewAppointment = (req, res) => {
  const { especiality, name, phone, convenio, date} = req.body

  try {
    consultas.forEach(consulta => {

      if(consulta.id === Number(especiality)) {
        const lastId = consultasMarcadas[consultasMarcadas.length - 1].id
  
        consultasMarcadas.push({
          id: lastId + 1,
          name,
          phone,
          convenio,
          date: consulta.openDates.find(openDate => openDate.id === Number(date)).date,
          especiality: consulta.especiality
        })
  
        consulta.openDates = consulta.openDates.filter(openDate => openDate.id !== Number(date))
      }
    })

    return res.json("Consulta marcada com sucesso!")
  } catch (e) {
    return res.status(404).json("Ocorreu um erro e a consulta não pôde ser marcada")
  }
}

const unscheduleAppointment = (req, res) => {
  const { id } = req.params 
  
  const marcada = consultasMarcadas.find(consulta => consulta.id === Number(id))

  if(!marcada) {
    return res.json("Consulta não encontrada")
  }

  try {
    consultasMarcadas = consultasMarcadas.filter(consulta => consulta.id !== Number(id))

    consultas = consultas.map(consulta => {
      if(consulta.especiality === marcada.especiality) {
        const lastId = consulta.openDates[consulta.openDates.length - 1]

        consulta.openDates.push({id: lastId, date: marcada.date})      
  
        return consulta
      }
  
      return consulta
    })
  
    return res.json("Desmarcado com sucesso!")
  } catch (e) {
    return res.status(404).json("Houve um erro e a consulta não pôde ser desmarcada, tente novamente")
  }
}

const updateApointment = (req, res) => {
  const {id} = req.params

  try {

    const marcada = consultasMarcadas.find(consulta => consulta.id === Number(id))
  
    if(!marcada) {
      return res.status(404).json("Consulta não encontrada")
    }
    
    let date = null
    
    consultas.forEach(consulta => {
      if(consulta.especiality === marcada.especiality) {
        date = consulta.openDates.find(openDate => openDate.id === Number(req.body.date) )
    
        if(date) {
          const lastId = consulta.openDates[consulta.openDates.length - 1].id
          consulta.openDates = consulta.openDates.filter(openDate => openDate.id !== date.id)
    
          consulta.openDates.push({id: lastId, date: marcada.date})
        }
      }})
      
  
      const updatedApointment = {
        ...marcada,
        convenio: req.body.convenio,
        date: date.date,
      }
  
      consultasMarcadas = consultasMarcadas.map(consulta => {
        if(consulta.id === marcada.id) {
          consulta = updatedApointment
  
          return consulta
        }
        
        return consulta
      })
  
    return res.json(`Consulta para a especialidade ${marcada.especiality} atualizada com sucesso!`)
  } catch(e) {
    return res.status(404).json("Ocorreu um erro e a consula não pôde ser marcada, tente novamente!")
  }
}


module.exports = {
  getEspecialities,
  getEspeciality,
  scheduleNewAppointment,
  unscheduleAppointment,
  updateApointment,
  getAppointments,
  getAppointment
}