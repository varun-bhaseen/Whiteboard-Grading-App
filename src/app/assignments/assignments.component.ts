import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ApisService} from '../apis.service'

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})



export class AssignmentsComponent implements OnInit {
  id : string
  courseId: string
  potential_assignment_to_remove: string

  constructor(public apis: ApisService, private route: ActivatedRoute, private router: Router, public auth: AuthService) { }

  ngOnInit() {
  }

  updateAssignment(id, assignment_name, points, due_date) {
    this.apis.updateAssignment(id, assignment_name, points, due_date)
  }

  addNewAssignment(assignment_name, points, due_date) {
    console.log(assignment_name)
    console.log(points)
    console.log(due_date)
    this.apis.addNewAssignment(assignment_name, points, due_date)
  }
  
  setAssignmentIdToRemove(assignment_id) {
    this.potential_assignment_to_remove = assignment_id
  }

  removeAssignment() {
    this.apis.removeAssignment(this.potential_assignment_to_remove)
    this.potential_assignment_to_remove = null
  }


}
