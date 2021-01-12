export class Grade {

    course_id: string
    assignment_id: string
    student_id: string
    grade: string

    constructor(course_id, assignment_id, student_id, grade) {
        this.course_id = course_id
        this.assignment_id = assignment_id
        this.student_id = student_id
        this.grade = grade
    }
}