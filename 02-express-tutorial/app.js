// const express = require("express");
// const app = express();
// const path = require("path");
// const { products } = require("./data");

// //setup static and middleware
// // app.use(express.static('./public'))

// // app.get("/", (req, res) => {
// //   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// // });

// app.get("/", (req, res) => {
//   res.send('<h1> Home Page</h1> <a href="/api/products">products</a>');
// });

// //returning product as it
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
// //filtering out the
// app.get("/api/product", (req, res) => {
//   const newproducts = products.map((product) => {
//     const { id, name, image } = product;
//     return { id, name, image };
//   });
//   res.json(newproducts);
// });

// //getting simple product
// app.get("/api/products/:productID", (req, res) => {
//   console.log(req.params.productID);
//   const { productID } = req.params;
//   const singleProduct = products.find(
//     (product) => product.id === Number(productID)
//   );
//   console.log(singleProduct);
//   res.json(singleProduct);
// });

// app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
//   console.log(req.params);
//   res.send("It worked");
// });

// app.get("/api/v1/query", (req, res) => {
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];
//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search);
//     });
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit));
//   }
//   if (sortedProducts.length < 1) {
//     // res.status(200).send('no products matched your search ')
//     return res.status(200).json({ success: true, data: [] });
//   }
//   res.status(200).json(sortedProducts);
//   //res.send('hello world')
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("About Page");
// });

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>Resource not found</h1>");
// });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000....");
// });

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

const express = require("express");
const app = express();
const authoize=require("./authorize")
const logger = require("./logger");
// req=>middleware =>res
app.use([logger,authoize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
