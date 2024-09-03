import { Component } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  movieFavorit: any
  movieWhotch: any
  criateWhatchList(movie: any) {
    console.log(movie);
    this.movieFavorit = movie.title

  }
  criateFavoritList(movie: any) {
    this.movieWhotch = movie.title
  }

}
