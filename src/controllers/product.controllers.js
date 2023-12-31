const catchError = require('../utils/catchError');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Image = require('../models/Image');

// aqui se vincula las imagenes con categorias
const getAll = catchError(async(req, res) => {
    const results = await Product.findAll({include:[Image, Category]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Product.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Product.findByPk(id,{include:[Image, Category]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Product.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Product.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});


const setImages = catchError(async(req, res) => {
    const {id} = req.params;
    const products = await Product.findByPk(id);
    await products.setImages(req.body)
    const images=  await products.getImages()
    return res.json(images)
  })

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setImages
}