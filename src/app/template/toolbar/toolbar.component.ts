import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from '../../authentication/login/login.component';
import { ListAssignmentsComponent } from '../../list-assignments/list-assignments.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AssignmentsComponent } from '../../assignments/assignments.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AssignmentsService } from '../../services/assignment/assignments.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet, RouterLink, MatButtonModule, MatDividerModule,
    MatIconModule, MatSlideToggleModule,
    AssignmentsComponent, ToolbarComponent, MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule, ListAssignmentsComponent, LoginComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  title = 'Application de gestion des assignments';
  logedIn = false;
  constructor(private assignmentsService: AssignmentsService,
              private authService: AuthService,
              private router:Router) {
    this.logedIn = this.authService.isLoggedIn();
  }

  ngOnInit() {
    console.log("login init")
    this.logedIn = this.authService.isLoggedIn();
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
