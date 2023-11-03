import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user !: User;

  constructor() {}

  signUp(email: string, password: string) {
    // Création d'un nouvel utilisateur
    const user = new User(Date.now().toString(), email, btoa(password)); // "btoa" convertit le mot de passe en base64, mais ce n'est pas sécurisé!

    // Enregistrement de l'utilisateur dans le stockage local
    localStorage.setItem('userData', JSON.stringify(user));
  }

  // ... (autres méthodes comme signIn, signOut, etc.)
}
