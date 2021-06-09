import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides = [
    { image: "../assets/slider-images/01.jpg" },
    { image: "../assets/slider-images/02.jpg"  },
    { image: "../assets/slider-images/03.jpg"  },
    { image: "../assets/slider-images/04.jpg"  },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
