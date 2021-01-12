import { Component, OnInit } from '@angular/core';
import {ApisService} from '../apis.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: { "class_name": string; "description": string; "id": string; }[]
  
  constructor(public apis: ApisService, private router: Router, public auth: AuthService) { }

  ngOnInit() {
  }
  selectCourse(course_id) {
    this.apis.current_selected_course = course_id
    this.apis.navItems[0].is_active = ''
    this.router.navigate(['/assignments'])
  }
}
