import { AlertifyService } from './../services/alertify.service';
import { MovieRepository } from './../models/movie.repository';
import { Movie } from './../models/movie';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title:"Film Listesi";
  movies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  
  filterText: string = "";


  constructor(private alertify:AlertifyService,
              private http:HttpClient) {
    
    this.popularMovies = this.movieRepository.getPopularMovies();
   }

  ngOnInit(): void {
      this.http.get<Movie[]>("http://localhost:3000/movies").subscribe(data=>{
      this.movies = data
    });
  }

  //movies = ["Film 1", "Film 2","Film 3","Film 4","Film 5"]
  addToList($event: any ,movie: Movie){
    if($event.target.classList.contains("btn-primary")){
      $event.target.innerText = "Listeden çıkar";
      $event.target.classList.remove("btn-primary");
      $event.target.classList.add("btn-danger");

      this.alertify.success(movie.title + " Listene Eklendi");
    }else{
      $event.target.innerText = "Listeye ekle";
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-primary");
      
      this.alertify.error(movie.title + " Listeden Çıkarıldı");
    }
  }

  

}
