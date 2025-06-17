import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Carousel } from '../../components/carousel/carousel';
import { FeaturedList } from '../../components/featured-list/featured-list';
import iPropertyDetail from "../../model/propertyDetail"
import { CommonModule } from '@angular/common';
@Component({
  selector: 'dashboard',
  imports: [Carousel, FeaturedList, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  private http = inject(HttpService)
  // private endPoint = '/data/property-list.json';
  private endPoint = "/assets/data/property-list.json";
  listedProperty = signal<iPropertyDetail[] | undefined>(undefined);

  ngOnInit() {
    this.http.get<iPropertyDetail[]>(this.endPoint).subscribe({
      next: res => {
        console.log(res)
        this.listedProperty.set(res)
      },
      error: err => console.error(err),
    })

  }
}
