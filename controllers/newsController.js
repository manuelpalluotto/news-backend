import { News } from '../models/News';
const getAllNews = async (request, response) => {
    const news = await News.find();
    response.json(news);
};

const createNews = async (request, response) => {
    const newEntry = new News(request.body);
    await newEntry.save();
    res.status(201).json(newEntry);
};

module.exports = {getAllNews, createNews};