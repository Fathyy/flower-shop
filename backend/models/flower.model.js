import mongoose from "mongoose";

const flowerSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    scientificName: {
      type: String,
      required: true,
    },
    description: String,
    picturePath: String,
    userPicturePath: String,
  },
  { timestamps: true }
);

const Flower = mongoose.model("Flower", flowerSchema);

export default Flower;
