export class Assignment {
    course_id: string
    assignment_name: string
    points: number
    due_date: string
    id: string

    constructor(course_id, assignment_name, points, due_date, id) {
        this.course_id = course_id
        this.assignment_name = assignment_name
        this.points = points
        this.due_date = due_date
        this.id = id
    }
}