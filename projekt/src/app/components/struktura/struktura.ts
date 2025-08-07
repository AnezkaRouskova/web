import { Component } from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { Onas } from './components/onas/onas';

@Component({
  selector: 'CustomStruktura',
  imports: [About, Contact, Header, Home, Services, Onas],
  templateUrl: './struktura.html',
  styleUrl: './struktura.scss'
})
export class Struktura {

}
