import { Schema } from "mongoose";
import ShortUniqueId from 'short-unique-id';

//initalizing the uid generator
idGenerator = nw:wq

const userModel = new Schema{
    id: {
	type: String,
	unique: true,
	default: idGenerator()
    } 
}
