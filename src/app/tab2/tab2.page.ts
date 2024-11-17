// tab2.page.ts
import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../services/omdb.service';

interface Review {
  movieTitle: string;
  year: string;
  posterUrl: string;
  rating: number;
  reviewText: string;
  reviewer: string;
  reviewerAvatar: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  selectedSegment = 'REVIEWS';
  reviews: Review[] = [
    {
      movieTitle: 'Anora',
      year: '2024',
      posterUrl: 'assets/placeholder-poster.jpg',
      rating: 4,
      reviewText: 'Mikey Madison is superb in this very unique effort from Sean Baker. PRETTY WOMAN comparisons don\'t hold up beyond some basic plot set-up, and after the stage is set, the film is utterly unpredictable, quite funny, and hides surprising depth. One of the best I\'v...',
      reviewer: 'Mike',
      reviewerAvatar: 'assets/avatar1.jpg'
    },
    {
      movieTitle: 'Look Back',
      year: '2024',
      posterUrl: 'assets/placeholder-poster.jpg',
      rating: 4.5,
      reviewText: 'We were gonna make so many things together. We were going to put out art that would matter to people and affect their lives. We were going to do it together. And now here I am, trying to commit to and focus on making something, anything. But it\'s just so ...',
      reviewer: 'James',
      reviewerAvatar: 'assets/avatar2.jpg'
    },
    {
      movieTitle: 'Heretic',
      year: '2024',
      posterUrl: 'assets/placeholder-poster.jpg',
      rating: 2.5,
      reviewText: 'Jigsaw if he was an insufferable reddit atheist',
      reviewer: 'Stacey',
      reviewerAvatar: 'assets/avatar3.jpg'
    }
  ];

  constructor(private omdbService: OmdbService) {}

  ngOnInit() {
    // You can fetch real reviews data here
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }
}