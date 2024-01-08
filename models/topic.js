import mongoose,{Schema} from "mongoose";

const topicSchema = new Schema(
    {
        name: String,
        bank: String,
        account: String,
        address1: String,
        address2: String,
        city: String,
        country: String,
        zip: String,
    },
    {
        timestamps: true, 
    }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic",topicSchema);
export default  Topic;
