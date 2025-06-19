import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {
  public search: string = "";
  constructor() {
  }
}
