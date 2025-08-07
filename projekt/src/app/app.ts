import { Component, signal } from '@angular/core';
import { Struktura } from './components/struktura/struktura';


@Component({
  selector: 'app-root',
  imports: [Struktura],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projekt');
}
