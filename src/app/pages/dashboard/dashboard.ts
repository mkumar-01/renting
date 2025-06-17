import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpService } from '../../services/http.service';
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
