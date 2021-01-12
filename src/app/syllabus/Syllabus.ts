export class Syllabus {
    course_id: string
    id: string
    text: string
    constructor(id, course_id, text) {
        this.id = id
        this.course_id = course_id
        this.text = text
    }
}