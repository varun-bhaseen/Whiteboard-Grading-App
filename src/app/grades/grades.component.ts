import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {ApisService} from '../apis.service'

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  curSelectedStudent: string

  constructor(public apis: ApisService, public auth: AuthService) { }

  ngOnInit() {
    this.curSelectedStudent = null
  }

  navigateToStudentGradePage(student_id) {
    this.curSelectedStudent = student_id
  }

  backToGradesPage() {
    this.curSelectedStudent = null
  }

  updateAssignmentForStudent(curSelectedStudent, assignment_id, points_value) {
    this.apis.updateStudentAssignmentScore(curSelectedStudent, assignment_id, points_value)
  }
}
