import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { movies } from './moc_data';
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieCardComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // handAddFavorits(data: any) {
  //   console.log(data.title);

  // }
  // handAddWhathList(data: any) {
  //   console.log(data.title);

  // }
}
