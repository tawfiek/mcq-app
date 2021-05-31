export interface ExamObject {
    questions:  Question[] ,
    _id: string,
    userName: string,
    email: string,
}

export interface  Question {
    options: Option [] ,
    _id: string,
    questionBody: string,
    correctAnswerID: string,
}

export interface Option {
    _id: string,
    answerBody: string
}