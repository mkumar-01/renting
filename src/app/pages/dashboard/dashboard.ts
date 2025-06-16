import { Component } from '@angular/core';
import { Carousel } from '../../components/carousel/carousel';
import { FeaturedList } from '../../components/featured-list/featured-list';

@Component({
  selector: 'dashboard',
  imports: [Carousel, FeaturedList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
