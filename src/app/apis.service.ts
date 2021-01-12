import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { NavItem } from './side-menu/NavItem';

import {Course} from './courses/Course';
import {Student_Course} from './courses/Student_Course';
import {Teacher_Course} from './courses/Teacher_Course';

import {Assignment} from './assignments/Assignment';
import {Student_Assignment} from './assignments/Student_Assignment';
import {Teacher_Assignment} from './assignments/Teacher_Assignment';

import {Syllabus} from './syllabus/Syllabus'
import {Student_Syllabus} from './syllabus/Student_Syllabus'
import {Teacher_Syllabus} from './syllabus/Teacher_Syllabus'
import {HttpClient} from '@angular/common/http';

import {Grade} from './grades/Grade'

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  
  current_selected_course: string
  
  // Courses Database
  courses: Course[]
  student_courses: Student_Course[] 
  teacher_courses: Teacher_Course[]
  
  // Assignments Database
  assignments: Assignment[]
  student_assignment: Student_Assignment[] 
  teacher_assignment: Teacher_Assignment[]

  // Syllabus Database
  syllabuses: Syllabus[]
  student_syllabus: Student_Syllabus[] 
  teacher_syllabus: Teacher_Syllabus[]

  // Grades Database
  grades: Grade[]

  navItems = [
    new NavItem("Courses",  "courses"),
    new NavItem("Assignments",  "assignments"),
    new NavItem("Syllabus",  "syllabus"),
    new NavItem("Grades",  "grades"),
    new NavItem("Profile", "profile")
  ]
  
  constructor(public auth: AuthService, private http: HttpClient) { 
    
    var api_url = "https://api.projects.wasaequreshi.com/getassignments"
    this.http.get(api_url).subscribe(data => {this.assignments = data as Assignment[]})
    
    api_url = "https://api.projects.wasaequreshi.com/getstudentassignments"
    this.http.get(api_url).subscribe(data => {this.student_assignment = data as Student_Assignment[]})
    
    api_url = "https://api.projects.wasaequreshi.com/getteacherassignments"
    this.http.get(api_url).subscribe(data => {this.teacher_assignment = data as Teacher_Assignment[]})
    
    api_url = "https://api.projects.wasaequreshi.com/getcourses"
    this.http.get(api_url).subscribe(data => {this.courses = data as Course[]})
    
    api_url = "https://api.projects.wasaequreshi.com/getstudentcourses"
    this.http.get(api_url).subscribe(data => {this.student_courses = data as Student_Course[]})
    
    api_url = "https://api.projects.wasaequreshi.com/getteachercourses"
    this.http.get(api_url).subscribe(data => {this.teacher_courses = data as Teacher_Course[]})
    
    api_url = "https://api.projects.wasaequreshi.com/getsyllabus"
    this.http.get(api_url).subscribe(data => {this.syllabuses = data as Syllabus[]})
    
    api_url = "https://api.projects.wasaequreshi.com/getstudentsyllabus"
    this.http.get(api_url).subscribe(data => {this.student_syllabus = data as Student_Syllabus[]})

    api_url = "https://api.projects.wasaequreshi.com/geteachersyllabus"
    this.http.get(api_url).subscribe(data => {this.teacher_syllabus = data as Teacher_Syllabus[]})

    api_url = "https://api.projects.wasaequreshi.com/getgrades"
    this.http.get(api_url).subscribe(data => {this.grades = data as Grade[]})

  }
  
  updateAssignmentData() {
    for (let i =0; i < 10; i++) {
      var api_url = "https://api.projects.wasaequreshi.com/getassignments"
      this.http.get(api_url).subscribe(data => {this.assignments = data as Assignment[]})
      
      api_url = "https://api.projects.wasaequreshi.com/getstudentassignments"
      this.http.get(api_url).subscribe(data => {this.student_assignment = data as Student_Assignment[]})
      
      api_url = "https://api.projects.wasaequreshi.com/getteacherassignments"
      this.http.get(api_url).subscribe(data => {this.teacher_assignment = data as Teacher_Assignment[]})
    }
  }

  updateGradesData() {
    for (let i =0; i < 10; i++) {
      var api_url = "https://api.projects.wasaequreshi.com/getgrades"
      this.http.get(api_url).subscribe(data => {this.grades = data as Grade[]})
    }
  }

  updateSyllabusData() {

    for (let i =0; i < 10; i++) { 

      var api_url = "https://api.projects.wasaequreshi.com/getsyllabus"
      this.http.get(api_url).subscribe(data => {this.syllabuses = data as Syllabus[]})
      
      api_url = "https://api.projects.wasaequreshi.com/getstudentsyllabus"
      this.http.get(api_url).subscribe(data => {this.student_syllabus = data as Student_Syllabus[]})

      api_url = "https://api.projects.wasaequreshi.com/geteachersyllabus"
      this.http.get(api_url).subscribe(data => {this.teacher_syllabus = data as Teacher_Syllabus[]})
    }
  }

  addNewAssignment(assignment_name, points, due_date) {
    console.log(assignment_name, points, due_date)
    var api_url = "https://api.projects.wasaequreshi.com/addassignment?assignment_name=" + assignment_name + "&points=" + points + "&due_date=" + due_date + "&course_id=" + this.current_selected_course
    this.http.get(api_url).subscribe(data => console.log(data))
    console.log("Needs to be implemented - addNewAssignment")
    this.updateAssignmentData()
  }

  createSyllabus(syllabus_text) {
    console.log(syllabus_text)
    var api_url = "https://api.projects.wasaequreshi.com/addsyllabus?syllabus_text=" + syllabus_text + "&course_id=" + this.current_selected_course
    this.http.get(api_url).subscribe(data => console.log(data))
    console.log("Needs to be implemented - createSyllabus")
    this.updateSyllabusData()
  }

  removeAssignment(assignment_id) {
    console.log(assignment_id)
    var api_url = "https://api.projects.wasaequreshi.com/removeassignment?assignment_id=" + assignment_id + "&course_id=" + this.current_selected_course
    this.http.get(api_url).subscribe(data => console.log(data))
    console.log("Needs to be implemented - removeAssignment")
    this.updateAssignmentData()
  }

  updateAssignment(id, assignment_name, points, due_date) {
    console.log(id, assignment_name, points, due_date)
    var api_url = "https://api.projects.wasaequreshi.com/updateassignment?assignment_id=" + id + "&assignment_name=" + assignment_name + "&points=" + points + "&due_date=" + due_date + "&course_id=" + this.current_selected_course
    this.http.get(api_url).subscribe(data => console.log(data))
    // console.log("Needs to be implemented - updateAssignment")
    this.updateAssignmentData()
  }

  updateSyllabus(syllabus_id, course_id, text) {
    console.log(syllabus_id, course_id, text)
    var api_url = "https://api.projects.wasaequreshi.com/updatesyllabus?syllabus_id=" + syllabus_id + "&course_id=" + course_id + "&text=" + text
    this.http.get(api_url).subscribe(data => console.log(data))
    // console.log("Needs to be implemented - updateSyllabus")
    this.updateSyllabusData()
  }

  updateStudentAssignmentScore(student_id, assignment_id, points_value) {
    console.log(student_id, assignment_id, points_value)
    var api_url = "https://api.projects.wasaequreshi.com/updateassignmentscore?student_id=" + student_id + "&assignment_id=" + assignment_id + "&points_value=" + points_value + "&course_id=" + this.current_selected_course
    this.http.get(api_url).subscribe(data => console.log(data))
    console.log("Needs to be implemented - updateStudentAssignmentScore")
    this.updateGradesData()
  }

  hasSelectedCourse() {
    return this.current_selected_course != null
  }

  getGradeForCurUserAssignmentTeacherView(assignment_id, student_id) {
    for (let i = 0; i < this.grades.length; i++) {
      var cur_grade_assignment = this.grades[i]
      
      if (cur_grade_assignment.assignment_id == assignment_id 
        && cur_grade_assignment.student_id == student_id
          && cur_grade_assignment.course_id == this.current_selected_course) {
            return cur_grade_assignment.grade
      }
    }
    return 0
  }

  getGradeForCurUserAssignment(assignment_id) {
    for (let i = 0; i < this.grades.length; i++) {
      var cur_grade_assignment = this.grades[i]
      if (cur_grade_assignment.assignment_id == assignment_id 
        && cur_grade_assignment.student_id == this.auth.getCurUserId()
          && cur_grade_assignment.course_id == this.current_selected_course) {
            return cur_grade_assignment.grade
      }
    }
    return 0
  }


  getAllStudentsForCourse() {
    var studentList = []

    for (let i = 0; i < this.student_courses.length; i++) {
      var curStudent = this.student_courses[i]
      if (curStudent.course_id == this.current_selected_course) {
        studentList.push(curStudent)
      }
    }

    return studentList
  }

  getTeacherSyllabusData() {
    var results = [];
    var data = this.auth.profileAsObj()
    for (let i = 0; i < this.teacher_syllabus.length; i++) {
      var cur_teacher = this.teacher_syllabus[i]
      
      if (cur_teacher.teacher_id == data['email']) {
        for (let j = 0; j < this.syllabuses.length; j++) {
          var cur_syllabus = this.syllabuses[j]
         
          if (cur_syllabus.id == cur_teacher.syllabus_id && cur_syllabus.course_id == this.current_selected_course) {
            results.push(cur_syllabus)
          }

        }
      }
    }

    return results;
  }

  getStudentSyllabusData() {
    var results = [];
    var data = this.auth.profileAsObj()
    for (let i = 0; i < this.student_syllabus.length; i++) {
      var cur_student = this.student_syllabus[i]
      
      if (cur_student.student_id == data['email']) {
        for (let j = 0; j < this.syllabuses.length; j++) {
          var cur_syllabus = this.syllabuses[j]
          
          if (cur_syllabus.id == cur_student.syllabus_id && cur_syllabus.course_id == this.current_selected_course) {
            
            results.push(cur_syllabus)
          }

        }
      }
    }

    return results;
  }

  getTeacherAssignmentData() {
    var results = [];
    var data = this.auth.profileAsObj()
    for (let i = 0; i < this.teacher_assignment.length; i++) {
      var cur_teacher = this.teacher_assignment[i]
      
      if (cur_teacher.teacher_id == data['email']) {
        for (let j = 0; j < this.assignments.length; j++) {
          var cur_assignment = this.assignments[j]
         
          if (cur_assignment.id == cur_teacher.assignment_id && cur_assignment.course_id == this.current_selected_course) {
            results.push(cur_assignment)
          }

        }
      }
    }

    return results;
  }

  getStudentAssignmentData() {
    var results = [];
    var data = this.auth.profileAsObj()
    for (let i = 0; i < this.student_assignment.length; i++) {
      var cur_student = this.student_assignment[i]
      
      if (cur_student.student_id == data['email']) {
        for (let j = 0; j < this.assignments.length; j++) {
          var cur_assignment = this.assignments[j]
          
          if (cur_assignment.id == cur_student.assignment_id && cur_assignment.course_id == this.current_selected_course) {
            
            results.push(cur_assignment)
          }

        }
      }
    }

    return results;
  }


  getTeacherCourseData() {
    var results = [];
    var data = this.auth.profileAsObj()
    for (let i = 0; i < this.teacher_courses.length; i++) {
      var cur_teacher = this.teacher_courses[i]
      
      if (cur_teacher.teacher_id == data['email']) {
        for (let j = 0; j < this.courses.length; j++) {
          var cur_course = this.courses[j]
         
          if (cur_course.id == cur_teacher.course_id) {
            results.push(cur_course)
          }

        }
      }
    }

    return results;
  }

  getStudentCourseData() {
    var results = [];
    var data = this.auth.profileAsObj()
    for (let i = 0; i < this.student_courses.length; i++) {
      var cur_student = this.student_courses[i]
      
      if (cur_student.student_id == data['email']) {
        for (let j = 0; j < this.courses.length; j++) {
          var cur_course = this.courses[j]
          
          if (cur_course.id == cur_student.course_id) {
            
            for (let k = 0; k < this.teacher_courses.length; k++){
              var cur_teacher = this.teacher_courses[k]
              if (cur_teacher.course_id == cur_course.id) {
                if (!cur_course.extras) {
                  cur_course.extras = {}
                }
                cur_course.extras['teacher_email'] = cur_teacher.teacher_id
              }
            }

            results.push(cur_course)
          }

        }
      }
    }

    return results;
  }

  getCurrentUserSyllabus() {
    if (this.auth.loggedIn) {
      
      if (this.auth.isTeacher()) {
          return this.getTeacherSyllabusData()
      }
      else {
          return this.getStudentSyllabusData()
      }
    }
    
  }

  getCurrentUserAssignments() {
    if (this.auth.loggedIn) {
      
      if (this.auth.isTeacher()) {
          return this.getTeacherAssignmentData()
      }
      else {
          return this.getStudentAssignmentData()
      }
    }
    
  }
  

  getCurrentUserCourses() {
    if (this.auth.loggedIn) {
      
      if (this.auth.isTeacher()) {
          return this.getTeacherCourseData()
      }
      else {
          return this.getStudentCourseData()
      }
    }
    
  }
}
