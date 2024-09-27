// get the flower data

import Flower from "../models/flower.model.js";

export const getFlowers = async (req, res) => {
    try {
        const flowers = await Flower.find();
        res.json(flowers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
