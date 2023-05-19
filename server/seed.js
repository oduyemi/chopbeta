const { faker } = require(`@faker-js/faker`);
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");


async function main(){
    const url = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(url);

    try{
        await client.connect();
        const productsCollection = client.db("chopbetadb").collection("products");
        const categoriesCollection = client.db("chopbetadb").collection("categories");


        productsCollection.drop();
        let categories = ["breakfast", "lunch", "dinner", "drinks"].map((category) => { return {name: category} });
        await categoriesCollection.insertMany(categories);

        let imageUrls = [
            "https://res.cloudinary.com/dymd1jkbl/image/upload/v1684434025/hsasmrxjjxbgwi3ybd8b.png",
            "https://res.cloudinary.com/dymd1jkbl/image/upload/v1684434025/gkcqroxvpyjywpdnwpfj.png",
            "https://res.cloudinary.com/dymd1jkbl/image/upload/v1684434025/hsasmrxjjxbgwi3ybd8b.png"
        ]

        let products = [];
        for (let x = 0; x < 10; x+=1){
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: _.sample(categories),
                imageUrl: _.sample(imageUrls)
            };
            products.push(newProduct);
        }
        await productsCollection.insertMany(products)

    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main();