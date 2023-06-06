* Documentação API Marcação de consulta *

Se alguma rota der erro, o retorno virá com um status 404. Você consegue captar o o status, e se for 404 você pode dar um alerta na mensagem.

** Rotas:

* BASE: http://localhost:3030/api
* GET:
  '/consultas' - Retorna uma lista todas as especialidades de marcação de consultas no formato abaixo:
    array = [{
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
      }]

  '/consultas/:id' - Retorna a especialidade de acordo com o id no formato abaixo:
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
  }

  '/marcadas' - Retorna uma lista de todas as consultas marcadas no formato abaixo: 
    array = [{
      id: 1,
      name: "Fernanda",
      phone: "71987799291",
      convenio: false,
      date: "04/05/2023 10:00",
      especiality: "Ginecologista"
    }]

  '/consultas/marcadas/:id' - Retorna uma consulta de acordo com o id no formato abaixo:
     {
      id: 1,
      name: "Fernanda",
      phone: "71987799291",
      convenio: false,
      date: "04/05/2023 10:00",
      especiality: "Ginecologista"
    }

* POST:
  '/consultas' - Cria uma nova consulta. Os dados enviados precisam estar no formato abaixo:
    {
      name: string,
      phone: string,
      convenio: boolean,
      date: id da data,
      especiality: especialidade existente em string
    }

* PUT:
  '/consultas/marcadas/:id' - Atualiza uma consulta de acordo com o id. Os dados precisam estar neste formato:
      {
        convenio: boolean,
        date: id da data
      }

* DELETE:
  '/consultas/:id' - Deleta a consulta marcada de acordo com o id