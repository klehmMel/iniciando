
  const materiaservice = new MateriaService()
  let materias = materiaservice.getAll()
  if(materias.length === 0) {
    materiaservice.add(new MateriaModel({nome: 'Back-End 1'}))
    materiaservice.add(new MateriaModel({nome: 'Front-End 1'}))
    materiaservice.add(new MateriaModel({nome: 'Banco de Dados'}))
    materiaservice.add(new MateriaModel({nome: 'Ferramentas Web'}))
  }

  const alunoService = new AlunoService()
  
  const alunoView = new AlunoView(document.querySelector('[data-table-alunos]'),
  materiaservice.getAll()
)
  const alunoController = new AlunoController(alunoService, alunoView)

  
document.querySelector('form').addEventListener('submit', function (event){
  event.preventDefault()
  const nome = document.getElementById('first_name').value
  alunoController.add({ nome })
  
  })