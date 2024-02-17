import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarDismiss,
} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  snackbarIsShown = false;
  private duration = 300000;

  constructor(private matSnackBar: MatSnackBar) {}

  public showSnackbar(message: string): void {
    const configParams = new MatSnackBarConfig();
    configParams.data = { message };
    configParams.duration = this.duration;
    configParams.panelClass = ['snackbar-success'];

    if (!this.snackbarIsShown) {
      const dismissed = this.matSnackBar
        .open(message, 'ok', configParams)
        .afterDismissed();
      this.snackbarIsShown = true;
      this.removeDismissedSnackBar(dismissed);
    }
  }

  /* Remove dismissed snack bar from queue and triggers another one to appear */
  private removeDismissedSnackBar(
    dismissed: Observable<MatSnackBarDismiss>
  ): void {
    dismissed.pipe(delay(100), take(1)).subscribe(() => {
      this.snackbarIsShown = false;
    });
  }
}
