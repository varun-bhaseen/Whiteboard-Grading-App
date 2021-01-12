import { Component, OnInit } from '@angular/core';
import {ApisService} from '../apis.service'

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {

  constructor(public apis: ApisService, public auth: AuthService) { }

  ngOnInit() {
  }

  updateSyllabus(syllabus_id, course_id, text) {
    console.log(text)
    this.apis.updateSyllabus(syllabus_id, course_id, text)
  }

  createSyllabus(syllabus_text) {
    this.apis.createSyllabus(syllabus_text)
  }
}
