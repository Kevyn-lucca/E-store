import { Component, Input, OnInit } from '@angular/core';
import { book } from '../model/book';

@Component({
  selector: 'app-product-iten',
  templateUrl: './product-iten.component.html',
  styleUrls: ['./product-iten.component.css']
})
export class ProductItenComponent implements OnInit {
  @Input()
  livro!: book;
  constructor() { }

  ngOnInit(): void {
  }

}
