import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModule } from '../login/login-module';

@Component({
  imports: [RouterOutlet, LoginModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('logi_flow_front');
}
