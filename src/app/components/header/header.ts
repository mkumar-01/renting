import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private router = inject(Router);
  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
    // window.location.href = '/login'
  }
}
