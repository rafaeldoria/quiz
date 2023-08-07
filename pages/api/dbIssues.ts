import AnswerModel from "../../model/answer";
import IssueModel from "../../model/issue";

const issues: IssueModel[] = [
    new IssueModel(51, 'Qual primeiro campeão brasileiro?', [
        AnswerModel.incorrect('São Paulo'),
        AnswerModel.incorrect('Corinthians'),
        AnswerModel.incorrect('Fluminense'),
        AnswerModel.correct('Atlético (Galo)'),
    ]),
    new IssueModel(52, 'Quem é o maior artillheiro do novo Mineirão?', [
        AnswerModel.incorrect('Tardelli'),
        AnswerModel.incorrect('Jô'),
        AnswerModel.incorrect('Ronaldinho'),
        AnswerModel.correct('Hulk'),
    ]),
    new IssueModel(53, 'Qual o coletivo de cães?', [
        AnswerModel.incorrect('Manda'),
        AnswerModel.incorrect('Alcateia'),
        AnswerModel.incorrect('Rebanho'),
        AnswerModel.correct('Matilha'),
    ]),
    new IssueModel(54, 'Qual o maior artilheiro do Galo?', [
        AnswerModel.incorrect('Dadá'),
        AnswerModel.incorrect('Valdir Bigode'),
        AnswerModel.incorrect('Renaldo'),
        AnswerModel.correct('Reinaldo'),
    ]),
]

export default issues