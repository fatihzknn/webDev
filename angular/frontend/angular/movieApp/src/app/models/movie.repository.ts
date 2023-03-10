import { Movie } from './movie';
export class MovieRepository {
    private movies: Movie[];

    constructor() {
        this.movies = [
            { id: 1, title: "Film 1", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci expedita, nihil qui nemo corporis totam obcaecati labore exercitationem. Tempore, nobis.", imageUrl: "1.jpeg",isPopular:false, datePublished:new Date(1990,10,10) },
            { id: 2, title: "Film 2", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci expedita, nihil qui nemo corporis totam obcaecati labore exercitationem. Tempore, nobis.", imageUrl: "2.jpeg" ,isPopular:true, datePublished:new Date(1990,10,10)},
            { id: 3, title: "Film 3", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci expedita, nihil qui nemo corporis totam obcaecati labore exercitationem. Tempore, nobis.", imageUrl: "3.jpeg" ,isPopular:false, datePublished:new Date(1990,10,10)},
            { id: 4, title: "Film 4", description: "Film 4 Açıklama", imageUrl: "4.jpeg",isPopular:true , datePublished:new Date(1990,10,10)},
            { id: 5, title: "Film 5", description: "Film 5 Açıklama", imageUrl: "5.jpeg" ,isPopular:true, datePublished:new Date(1990,10,10)}
        ];
    }

    getMovies():Movie[] {
        return this.movies
    }
    getPopularMovies():Movie[] {
        return this.movies.filter(i=>i.isPopular)
    }
    getMovieById(id: number): Movie {
        return this.movies.find(i=>i.id == id);
    }
}