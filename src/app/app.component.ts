import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular17';

  private snackbarService = inject(SnackbarService);

  openSnackbar() {
    this.snackbarService.showSnackbar('Qodana test');
  }
}
