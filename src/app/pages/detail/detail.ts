import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})
export class Detail implements OnInit {
  public id: string | null = null;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  ngOnInit() {

  }

}
