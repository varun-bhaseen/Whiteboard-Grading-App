export class Course {
    class_name: string
    description: string
    id: string
    extras: {}
    constructor(class_name, description, id) {
        this.class_name = class_name
        this.description = description
        this.id = id
        this.extras = {}
    }
}