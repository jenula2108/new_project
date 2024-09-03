import { Component, EventEmitter, Output } from '@angular/core';
import { movies } from '../../moc_data';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  data = movies

  @Output() addfavorite = new EventEmitter<any>()
  @Output() addWhatchList = new EventEmitter<any>()
  addToFavorites() {
    this.addfavorite.emit(this.data)
  }
  addToWathList() {
    this.addWhatchList.emit(this.data)
  }
}
