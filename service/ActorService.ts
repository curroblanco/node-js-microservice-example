import * as mongoose from 'mongoose';
import { ActorInterface } from '../interfaces/ActorInterface';

const Actor = mongoose.model('Actor');

export class ActorService {
    public static findAll() {
        return Actor.find();
    }

    public static findById(id: String) {
        return Actor.findById(id);
    }

    public static insertOne(actorInterface: ActorInterface) {
        Actor.create({ 
            name: actorInterface.name,
            surname: actorInterface.surname,
            movieId: actorInterface.movieId
        })
    }

    public static async deleteOne(id: String) {
        await Actor.remove({
            _id: id
        });
    }

    public static updateOne(actorInterface: ActorInterface) {
        Actor.findByIdAndUpdate(actorInterface._id, actorInterface, (err: any, Actor) => {
        });
    }
}
