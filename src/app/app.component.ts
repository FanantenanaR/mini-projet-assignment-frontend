import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AuthService } from './shared/auth.service';
import { ToolbarComponent } from './template/toolbar/toolbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListAssignmentsComponent } from './list-assignments/list-assignments.component';

import { AssignmentsService } from './services/assignment/assignments.service';
import {LoginComponent} from "./authentication/login/login.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButtonModule, MatDividerModule,
            MatIconModule, MatSlideToggleModule,
            AssignmentsComponent, ToolbarComponent, MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule, ListAssignmentsComponent, LoginComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Application de gestion des assignments';
  logedIn = false;
  constructor(private assignmentsService: AssignmentsService,
              private authService: AuthService,
              private router:Router) {
    this.logedIn = this.authService.isLoggedIn();
    router.events.subscribe(
      () => {
        this.logedIn = this.authService.isLoggedIn()
      }
    )
  }

  ngOnInit() {
    console.log("login init")
    // this.logedIn = this.authService.isLoggedIn();
  }

  isProf() {
    return this.authService.isProf();
  }

  login() {
    this.router.navigate(['/auth/login']);
  }

  logout() {
    this.authService.logOut();
    this.logedIn = false;
    this.router.navigate(['/auth/login']);
  }

  genererDonneesDeTest() {
    // on utilise le service
    /* VERSION NAIVE
    this.assignmentsService.peuplerBD();
    */

    // VERSION AVEC Observable
    this.assignmentsService.peuplerBDavecForkJoin()
    .subscribe(() => {
      console.log("Données générées, on rafraichit la page pour voir la liste à jour !");
      window.location.reload();
      // On devrait pouvoir le faire avec le router, jussqu'à la version 16 ça fonctionnait avec
      // this.router.navigate(['/home'], {replaceUrl:true});
    });
  }
}
