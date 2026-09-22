import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "store_system"
});

db.connect((err) => {
    if (err) {
        console.log('Errore connect');
        return;
    }

    console.log('ok');
});

app.get("/api/test", (req, res) => {
    res.json({
        message: "السيرفر شغال"
    });
});

app.get("/api/products", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(result);
    });
});

app.post("/api/products", (req, res) => {
    const { name, price, categor, stock} = req.body;

    db.query(
        "INSERT INTO products (name,price,category,stock) VALUES (?, ?,?,?)",
        [name, price, categor, stock],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                message: "تمت الإضافة بنجاح",
                id: result.insertId
            });
        }
    );
});

app.put("/api/products/:id", (req, res) => {
    const { name, price, categor, stock} = req.body;
    const { id } = req.params;

    db.query(
        "UPDATE products SET name = ?, price = ?,category = ?,stock = ? WHERE id = ?",
        [name, price, categor, stock , id],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                message: "تم التعديل بنجاح"
            });
        }
    );
});


app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;

    db.query(
        "DELETE FROM products WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                message: "تم الحذف بنجاح"
            });
        }
    );
});

app.get("/api/cart", (req, res) => {
    db.query("SELECT * FROM cart", (err, result) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(result);
    });
});

app.delete("/api/cart/:id", (req, res) => {
    const { id } = req.params;

    db.query(
        "DELETE FROM cart WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                message: "تم الحذف بنجاح"
            });
        }
    );
});

app.post("/api/cart", (req, res) => {
    const { productId, name, price, quantity } = req.body;

    db.query(
        "INSERT INTO cart ( product_id, name, price, quantity) VALUES (?, ?, ?, ?)",
        [productId, name, price, quantity],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                message: "تمت الإضافة بنجاح",
                id: result.insertId
            });
        }
    );
});

app.delete("/api/cart", (req, res) => {
    db.query(
        "DELETE FROM cart",
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                message: "تم إفراغ السلة بنجاح"
            });
        }
    );
});



app.listen(5000, () => {
    console.log("Server running on port 5000");
});