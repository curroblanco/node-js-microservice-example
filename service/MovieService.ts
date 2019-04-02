import * as moongose from 'mongoose';
import { MovieInterface } from '../interfaces/MovieInterface'

const Movie = moongose.model('Movie');

export class MovieService {
    public static findAll() {
        return Movie.find();
    }

    public static findById(id: String) {
        return Movie.findById(id);
    }

    public static insertOne(movieInterface: MovieInterface) {
        Movie.create({ 
            title: movieInterface.title,
            genre: movieInterface.genre,
            year: movieInterface.year
        })
    }

    public static async deleteOne(id: String) {
        await Movie.remove({
            _id: id
        });
    }

    public static updateOne(movieInterface: MovieInterface) {
        Movie.findByIdAndUpdate(movieInterface._id, movieInterface, (err: any, Movie) => {
        });
    }
}