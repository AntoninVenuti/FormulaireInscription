import { Component, OnInit } from '@angular/core';
import { Client } from '.././client/Client';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

  model = new Client('', '', '')

  onSubmit() { console.log(this.model) };

}
