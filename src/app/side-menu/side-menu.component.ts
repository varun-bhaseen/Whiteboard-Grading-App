import { Component, OnInit } from '@angular/core';
import {NavItem} from './NavItem'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import {ApisService} from '../apis.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  id: string
  courseId: string
  navItems = this.apis.navItems;
   
  constructor(private route: ActivatedRoute, private router: Router, public auth: AuthService, public apis: ApisService) { }

  ngOnInit() {
  }

  updateActive(nav_item) {
      
      if (nav_item.toLowerCase() == "courses") {
        this.apis.current_selected_course = null

      }
      
      for (let i = 0; i < this.navItems.length; i++) {
        this.navItems[i].is_active = ''
        if (this.navItems[i].nav_name == nav_item) {
          this.navItems[i].is_active = 'active'
        }
      }
  }
  
}
