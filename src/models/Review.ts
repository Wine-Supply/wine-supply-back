import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    date: { type: Date, default: Date.now },
    comment: {type: String, maxLength: 200},
    rating: {type: Number, min:1, max:5},
    user_id: {type: mongoose.Types.ObjectId, ref:"User", required: true},
    wine_id: {type: mongoose.Types.ObjectId, ref:"Wine", required: true}
})


const ReviewModel = mongoose.model('Review', ReviewSchema);
export default ReviewModel;
    
// reviewsID foreign key? no seria propia de la review?
// podemos usar timestamps en lugar de date? usar el createdAt {timestamps: true}
// me falta ver lo de las claves foraneas
// hidden: Boolean,

