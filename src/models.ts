export interface ExamObject {
    questions:  Question[] ,
    _id: string,
    userName: string,
    email: string,
}

export interface  Question {
    _id: string,
    options: Option [] ,
    questionBody: string,
    correctAnswerID: string,
    userAnswerID?: string,
}

export interface Option {
    _id: string,
    answerBody: string
}