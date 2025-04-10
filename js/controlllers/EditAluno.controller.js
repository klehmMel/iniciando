class EditAlunoController {
    constructor(aluno, view, service) {
        this.model = model
        this.view = view
        this.view.render(aluno)
    }

    update(id, nome, notas) {
        let aluno = {}
        aluno.nome = nome
        aluno._id = id
        aluno.notas = notas
        this.service.update(new AlunoModel(aluno))
    }
}
