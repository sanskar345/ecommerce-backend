const Product = require('../models/product');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const products = require('../data/products');

// Setting dotenv file
dotenv.config({ path: './config.env' });

// console.log(process.env.DATABASE);

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Database Connected');
})

const seedProducts = async () => {
    try {

        await Product.deleteMany();
        console.log('Products are deleted');

        await Product.insertMany(products)
        console.log('All Products are added.')

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts()