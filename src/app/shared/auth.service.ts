import { Injectable } from '@angular/core';
import {GenericService} from "../services/basic/generic.service";
import {Prof, Student} from "../models/model.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // propriété pour savoir si l'utilisateur est connecté
  loggedIn = false;
  private keyStorage = "userInformation";
  private studentInformation: Student | undefined;
  private profInformation: Prof | undefined;
  private typeCompte = "";

  constructor(private apiService: GenericService) { }

  // méthode pour connecter l'utilisateur
  // Typiquement, il faudrait qu'elle accepte en paramètres
  // un nom d'utilisateur et un mot de passe, que l'on vérifierait
  // auprès d'un serveur...
  logIn(email: string, password: string, accountType: string) {
    const linkFinal = `auth/login/${accountType == "Prof" ? "prof" : "student"}`
    return this.apiService.post<any>(linkFinal, {
      email: email,
      password: password
    });
  }

  getIdStudent() {
    return this.studentInformation?._id ?? "";
  }

  isProf() {
    return this.typeCompte === "Prof";
  }

  isLoggedIn() {
    if (this.loggedIn) return true;
    const information = localStorage.getItem(this.keyStorage);
    const accountTypeStored = localStorage.getItem("account-type");
    if (information && accountTypeStored) {
      const obj = JSON.parse(information);
      const info: Student | Prof = accountTypeStored == "Prof" ? <Prof> obj: <Student> obj;
      this.setLoggedIn(info, accountTypeStored);
      return true;
    }
    return false;
  }

  setLoggedIn(userInfo: Prof | Student, accountType: string) {
    // @ts-ignore
    if (accountType === "Prof") {
      this.typeCompte = accountType;
      this.storeProfInformation(<Prof> userInfo);
    } else {
      this.typeCompte = 'Student';
      this.storeStudentInformation(<Student> userInfo);
    }

    this.loggedIn = true;
  }

  private storeStudentInformation(information: Student) {
    localStorage.setItem(this.keyStorage, JSON.stringify(information));
    localStorage.setItem("account-type", "Student")
    this.studentInformation = information;
  }

  private storeProfInformation (information: Prof) {
    localStorage.setItem(this.keyStorage, JSON.stringify(information));
    localStorage.setItem("account-type", "Prof")
    this.profInformation = information;
  }

  // méthode pour déconnecter l'utilisateur
  logOut() {
    this.loggedIn = false;
    localStorage.removeItem(this.keyStorage);
    this.profInformation = undefined;
    this.studentInformation = undefined;
    this.typeCompte = "";
  }

  // methode qui indique si on est connecté en tant qu'admin ou pas
  // pour le moment, on est admin simplement si on est connecté
  // En fait cette méthode ne renvoie pas directement un booleén
  // mais une Promise qui va renvoyer un booléen (c'est imposé par
  // le système de securisation des routes de Angular)
  //
  // si on l'utilisait à la main dans un composant, on ferait:
  // this.authService.isAdmin().then(....) ou
  // admin = await this.authService.isAdmin()
  isAdmin() {
    if (this.profInformation && this.typeCompte === "Prof") {
      return this.profInformation.isAdmin;
    }
    return false;
  }
}
