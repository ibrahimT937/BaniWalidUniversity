import { useEffect, useState } from "react";
import axios from "axios";
import "./Patients.css";

function Patients() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [categor, setCategor] = useState("");
    const [stock, setStock] = useState("");
    const [id, setId] = useState("");
    const [ok, setOk] = useState(false);
    const [toggle, setToggle] = useState(false);



    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                const data = response.data;
                setProducts(data);

            } catch (error) {
                console.error(error);
            }
        };
        getData()
    }, []);

useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cart');
                const data = response.data;
                setCart(data);
                
            } catch (error) {
                console.error(error);
            }
        };
        getData()
}, []);
    // إضافة أو تعديل المنتج

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !price || !categor || !stock) {
            return;
        }
        if (!toggle) {

            try {
                const response = await axios.post('http://localhost:5000/api/products', {
                    name, price, categor, stock
                });
                const data = response.data;
                const newPro = {
                    id: data.id,
                    name,
                    price: Number(price),
                    category: categor,
                    stock: Number(stock)
                };
                setProducts([
                    ...products,
                    newPro
                ]);
                clearForm();

                setOk(true);

                setTimeout(() => {
                    setOk(false);
                }, 3000);
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const response = await axios.put('http://localhost:5000/api/products/' + id, {
                    name, price, categor, stock
                });
                const data = response.data;
                setProducts(
                    products.map((f) =>
                        f.id === id
                            ? {
                                ...f,
                                name,
                                price: Number(price),
                                category: categor,
                                stock: Number(stock)
                            }
                            : f
                    )
                );

                setToggle(false);
                clearForm();
                setShowForm(false);
            } catch (error) {
                console.error(error);
            }
        }
    }

    // حالة إظهار نافذة الفاتورة
    const [showInvoice, setShowInvoice] = useState(false);

    // رقم الفاتورة
    const [invoiceNumber, setInvoiceNumber] = useState(null);

    // تفريغ بيانات النموذج
    const clearForm = () => {
        setName("");
        setPrice("");
        setCategor("");
        setStock("");
        setId("");
        setEditingId(null);
    };

    // البحث والفلترة والترتيب
    const displayedProducts = products
        .filter((item) => {
            return (
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.category.toLowerCase().includes(search.toLowerCase())
            );
        })
        .filter((item) => {
            if (category === "") {
                return true;
            }

            return item.category === category;
        })
        .sort((a, b) => {
            if (sort === "low") {
                return a.price - b.price;
            }

            if (sort === "high") {
                return b.price - a.price;
            }

            if (sort === "az") {
                return a.name.localeCompare(b.name, "ar");
            }

            if (sort === "za") {
                return b.name.localeCompare(a.name, "ar");
            }

            return 0;
        });

    // إضافة المنتج للسلة أو زيادة كميته إذا كان موجود
const addToCart = async (product) => {
    const existingProduct = cart.find(
        (item) => item.id === product.id
    );

    if (existingProduct) {
        if (existingProduct.quantity >= product.stock) {
            return;
        }

        setCart(
            cart.map((item) =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );

        return;
    }

    await axios.post("http://localhost:5000/api/cart", {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
    });

    const newPro = {
        id: product.id,
        name: product.name,
        price: Number(product.price),
        category: product.category,
        stock: Number(product.stock),
        quantity: 1
    };

    setCart([...cart, newPro]);
};

    // زيادة كمية المنتج داخل السلة
    const increaseQuantity = (id) => {
        setCart(
            cart.map((c) =>
                c.id === id && c.quantity < c.stock
                    ? {
                        ...c,
                        quantity: c.quantity + 1
                    }
                    : c
            )
        );
    };

    // إنقاص كمية المنتج داخل السلة
    const decreaseQuantity = (pro) => {
        setCart(
            cart.map((c) =>
                c.id === pro.id && c.quantity > 1
                    ? {
                        ...c,
                        quantity: c.quantity - 1
                    }
                    : c
            )
        );
    };

    // حذف المنتج من السلة
        const removeFromCart = async (id) => {
            try {
                const response = await axios.delete("http://localhost:5000/api/cart/" + id);
                const data = response.data;
        
                    setCart(
            cart.filter((f) => f.id !== id)
        );
            } catch (error) {
                console.error(error);
            }
        };
    
    
    //حدف الكل من السله 
const clearCart = async () => {
    try {
        await axios.delete("http://localhost:5000/api/cart");

        setCart([]);
    } catch (error) {
        console.error(error);
    }
};
    // حساب مجموع الكميات داخل السلة
    const getCartCount = () => {
        return cart.reduce(
            (total, item) => total + item.quantity,
            0
        );
    };

    // حساب إجمالي السلة
    const getCartTotal = () => {
        return cart.reduce(
            (total, item) =>
                total + Number(item.price) * item.quantity,
            0
        );
    };

    // حساب قيمة المخزون
    const getStockValue = () => {
        return products.reduce(
            (total, item) =>
                total + Number(item.stock) * Number(item.price),
            0
        );
    };

    // فتح نموذج إضافة المنتج
    const handleChange = () => {
        clearForm();
        setToggle(false);
        setShowForm(true);
    };

    // تجهيز المنتج للتعديل
    const editProduct = (product) => {
        setId(product.id);
        setCategor(product.category);
        setName(product.name);
        setPrice(product.price);
        setStock(product.stock);
        setEditingId(product.id);
        setShowForm(true);
        setToggle(true);
    };

    // فتح نافذة تأكيد الحذف
    // حذف المنتج من المنتجات
    const openDelete = async (product) => {
        try {
            const response = await axios.delete('http://localhost:5000/api/products/' + product.id);
            const data = response.data;

            setProducts(
                products.filter((f) => f.id !== product.id)
            );

        } catch (error) {
            console.error(error);
        }

        setSelectedProduct(product);
        setShowDelete(true);
    };

    // تنفيذ الحذف النهائي
    const confirmDelete = () => {
        if (!selectedProduct) {
            return;
        }

        setProducts(
            products.filter(
                (item) => item.id !== selectedProduct.id
            )
        );

        setCart(
            cart.filter(
                (item) => item.id !== selectedProduct.id
            )
        );

        setSelectedProduct(null);
        setShowDelete(false);
    };

    // فتح الفاتورة
    const openInvoice = () => {
        if (cart.length === 0) {
            return;
        }

        setInvoiceNumber(Date.now());
        setShowInvoice(true);
    };

    // إغلاق الفاتورة
    const closeInvoice = () => {
        setShowInvoice(false);
    };

    // طباعة الفاتورة
    const printInvoice = () => {
        window.print();
    };

    // التاريخ الحالي
    const invoiceDate = new Date().toLocaleDateString("ar-LY");

    // الوقت الحالي
    const invoiceTime = new Date().toLocaleTimeString("ar-LY", {
        hour: "2-digit",
        minute: "2-digit"
    });

    return (

        <>
            <div className={darkMode ? "app dark" : "app"}>

                {/* ================= HEADER ================= */}

                <header className="header">

                    <div className="logo">

                        <div className="logo-icon">
                            <i className="bi bi-shop"></i>
                        </div>

                        <div>
                            <h1>متجر النخبة</h1>
                            <span>لبيع الأجهزة والإكسسوارات</span>
                        </div>

                    </div>

                    <div className="header-actions">

                        <button
                            className="theme-btn"
                            onClick={() => {
                                setDarkMode(!darkMode);
                            }}
                        >
                            <i
                                className={
                                    darkMode
                                        ? "bi bi-sun"
                                        : "bi bi-moon-stars"
                                }
                            ></i>
                        </button>

                        <div className="cart-button">

                            <i className="bi bi-cart3"></i>

                            <span className="cart-badge">
                                {getCartCount()}
                            </span>

                        </div>

                    </div>

                </header>

                {/* ================= DASHBOARD ================= */}

                <main className="container">

                    <section className="welcome">

                        <div>
                            <span>لوحة التحكم</span>

                            <h2>إدارة المتجر</h2>

                            <p>
                                تابع منتجاتك ومخزونك ومبيعاتك من مكان واحد
                            </p>
                        </div>

                        <button
                            className="add-btn"
                            onClick={handleChange}
                        >
                            <i className="bi bi-plus-lg"></i>
                            إضافة منتج
                        </button>

                    </section>

                    {/* ================= STATISTICS ================= */}

                    <section className="stats">

                        <div className="stat-card">

                            <div className="stat-icon blue">
                                <i className="bi bi-box-seam"></i>
                            </div>

                            <div>
                                <span>عدد المنتجات</span>

                                <h3>
                                    {products.length}
                                </h3>
                            </div>

                        </div>

                        <div className="stat-card">

                            <div className="stat-icon green">
                                <i className="bi bi-cart-check"></i>
                            </div>

                            <div>
                                <span>منتجات السلة</span>

                                <h3>
                                    {getCartCount()}
                                </h3>
                            </div>

                        </div>

                        <div className="stat-card">

                            <div className="stat-icon gold">
                                <i className="bi bi-cash-stack"></i>
                            </div>

                            <div>
                                <span>قيمة المخزون</span>

                                <h3>
                                    {getStockValue()} د.ل
                                </h3>
                            </div>

                        </div>

                        <div className="stat-card">

                            <div className="stat-icon purple">
                                <i className="bi bi-receipt"></i>
                            </div>

                            <div>
                                <span>إجمالي السلة</span>

                                <h3>
                                    {getCartTotal()} د.ل
                                </h3>
                            </div>

                        </div>

                    </section>

                    {/* ================= MAIN GRID ================= */}

                    <section className="main-grid">

                        {/* ================= PRODUCTS ================= */}

                        <div className="products-section">

                            <div className="section-title">

                                <div>
                                    <h2>المنتجات</h2>
                                    <p>
                                        إدارة جميع منتجات المتجر
                                    </p>
                                </div>

                            </div>

                            {/* ================= FILTERS ================= */}

                            <div className="filters">

                                <div className="search-box">

                                    <i className="bi bi-search"></i>

                                    <input
                                        type="text"
                                        placeholder="ابحث عن منتج..."
                                        value={search}
                                        onChange={(e) => {
                                            setSearch(e.target.value);
                                        }}
                                    />

                                </div>

                                <select
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value);
                                    }}
                                >
                                    <option value="">
                                        كل التصنيفات
                                    </option>

                                    <option value="أجهزة">
                                        أجهزة
                                    </option>

                                    <option value="إكسسوارات">
                                        إكسسوارات
                                    </option>

                                    <option value="صوتيات">
                                        صوتيات
                                    </option>

                                </select>

                                <select
                                    value={sort}
                                    onChange={(e) => {
                                        setSort(e.target.value);
                                    }}
                                >
                                    <option value="">
                                        الترتيب
                                    </option>

                                    <option value="low">
                                        الأرخص أولاً
                                    </option>

                                    <option value="high">
                                        الأغلى أولاً
                                    </option>

                                    <option value="az">
                                        الاسم A-Z
                                    </option>

                                    <option value="za">
                                        الاسم Z-A
                                    </option>

                                </select>

                            </div>

                            {/* ================= PRODUCTS GRID ================= */}

                            <div className="products-grid">

                                {displayedProducts.map((product) => (

                                    <div
                                        className="product-card"
                                        key={product.id}
                                    >

                                        <div className="product-top">

                                            <div className="product-image">
                                                <i className="bi bi-box-seam"></i>
                                            </div>

                                            <span className="category">
                                                {product.category}
                                            </span>

                                        </div>

                                        <div className="product-info">

                                            <h3>
                                                {product.name}
                                            </h3>

                                            <div className="price">
                                                {product.price} د.ل
                                            </div>

                                            <div className="stock">

                                                <span>
                                                    المخزون
                                                </span>

                                                <strong>
                                                    {product.stock}
                                                </strong>

                                            </div>

                                        </div>

                                        <div className="product-actions">

                                            <button
                                                className="cart-btn"
                                                onClick={() => {
                                                    addToCart(product);
                                                }}
                                            >
                                                <i className="bi bi-cart-plus"></i>
                                                إضافة للسلة
                                            </button>

                                            <button
                                                className="icon-btn"
                                                onClick={() => {
                                                    editProduct(product);
                                                }}
                                            >
                                                <i className="bi bi-pencil"></i>
                                            </button>

                                            <button
                                                className="icon-btn delete"
                                                onClick={() => {
                                                    openDelete(product);
                                                }}
                                            >
                                                <i className="bi bi-trash3"></i>
                                            </button>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* ================= CART ================= */}

                        <aside className="cart">

                            <div className="cart-header">

                                <div>
                                    <h2>السلة</h2>

                                    <span>
                                        المنتجات المختارة
                                    </span>
                                </div>
                                <div className="deleteAll">
                                    <button className="save-btn" onClick={clearCart}>حدف الكل</button>
                                    </div>
                                <i className="bi bi-cart3"></i>

                            </div>

                            <div className="cart-items">

                                {cart.length === 0 ? (

                                    <div className="empty-cart">

                                        <i className="bi bi-cart-x"></i>

                                        <h3>
                                            السلة فارغة
                                        </h3>

                                        <p>
                                            أضف بعض المنتجات إلى السلة
                                        </p>

                                    </div>

                                ) : (

                                    cart.map((item) => (

                                        <div
                                            className="cart-item"
                                            key={item.id}
                                        >

                                            <div className="cart-item-icon">
                                                <i className="bi bi-box"></i>
                                            </div>

                                            <div className="cart-item-info">

                                                <h4>
                                                    {item.name}
                                                </h4>

                                                <span>
                                                    {item.price} د.ل
                                                </span>

                                                <div className="quantity">

                                                    <button
                                                        onClick={() => {
                                                            decreaseQuantity(item);
                                                        }}
                                                    >
                                                        −
                                                    </button>

                                                    <strong>
                                                        {item.quantity}
                                                    </strong>

                                                    <button
                                                        onClick={() => {
                                                            increaseQuantity(item.id);
                                                        }}
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                            </div>

                                            <div className="cart-item-total">
                                                {item.price * item.quantity} د.ل
                                            </div>

                                            <button
                                                className="remove-cart"
                                                onClick={() => {
                                                    removeFromCart(item.id);
                                                }}
                                            >
                                                <i className="bi bi-x-lg"></i>
                                            </button>

                                        </div>

                                    ))

                                )}

                            </div>

                            <div className="cart-footer">

                                <div className="summary-row">

                                    <span>
                                        عدد المنتجات
                                    </span>

                                    <strong>
                                        {getCartCount()}
                                    </strong>

                                </div>

                                <div className="summary-total">

                                    <span>
                                        الإجمالي
                                    </span>

                                    <strong>
                                        {getCartTotal()} د.ل
                                    </strong>

                                </div>

                                <div className="cart-actions">

                                    <button
                                        className="checkout-btn"
                                        onClick={openInvoice}
                                        disabled={cart.length === 0}
                                    >
                                        <i className="bi bi-credit-card"></i>
                                        إتمام البيع
                                    </button>

                                    <button
                                        className="invoice-btn"
                                        onClick={openInvoice}
                                        disabled={cart.length === 0}
                                    >
                                        <i className="bi bi-receipt"></i>
                                        عرض الفاتورة
                                    </button>

                                </div>

                            </div>

                        </aside>

                    </section>

                    {/* ================= FORM ================= */}

                    {showForm && (

                        <div className="modal-overlay">

                            <div className="modal">

                                <div className="modal-header">

                                    <div>

                                        <h2>
                                            {editingId
                                                ? "تعديل المنتج"
                                                : "إضافة منتج"}
                                        </h2>

                                        <p>
                                            أدخل بيانات المنتج
                                        </p>

                                    </div>

                                    <button
                                        onClick={() => {
                                            setShowForm(false);
                                            setToggle(false);
                                            clearForm();
                                        }}
                                    >
                                        <i className="bi bi-x-lg"></i>
                                    </button>

                                </div>

                                <form onSubmit={handleSubmit}>

                                    <div className="form-group">

                                        <label>
                                            اسم المنتج
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="مثال: Laptop"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />

                                    </div>

                                    <div className="form-row">

                                        <div className="form-group">

                                            <label>
                                                السعر
                                            </label>

                                            <input
                                                type="number"
                                                placeholder="2500"
                                                value={price}
                                                onChange={(e) =>
                                                    setPrice(e.target.value)
                                                }
                                            />

                                        </div>

                                        <div className="form-group">

                                            <label>
                                                المخزون
                                            </label>

                                            <input
                                                type="number"
                                                placeholder="10"
                                                value={stock}
                                                onChange={(e) =>
                                                    setStock(e.target.value)
                                                }
                                            />

                                        </div>

                                    </div>

                                    <div className="form-group">

                                        <label>
                                            التصنيف
                                        </label>

                                        <select
                                            value={categor}
                                            onChange={(e) =>
                                                setCategor(e.target.value)
                                            }
                                        >

                                            <option value="">
                                                اختر التصنيف
                                            </option>

                                            <option value="أجهزة">
                                                أجهزة
                                            </option>

                                            <option value="إكسسوارات">
                                                إكسسوارات
                                            </option>

                                            <option value="صوتيات">
                                                صوتيات
                                            </option>

                                        </select>

                                    </div>

                                    <div
                                        className="ok"
                                        style={{
                                            opacity: ok ? "1" : "0"
                                        }}
                                    >
                                        <span>
                                            تم إضافة المنتج بنجاح
                                        </span>
                                    </div>

                                    <div className="form-actions">

                                        <button
                                            type="button"
                                            className="cancel-btn"
                                            onClick={() => {
                                                setShowForm(false);
                                                setToggle(false);
                                                clearForm();
                                            }}
                                        >
                                            إلغاء
                                        </button>

                                        <button
                                            type="submit"
                                            className="save-btn"
                                        >
                                            <i className="bi bi-check-lg"></i>

                                            {toggle
                                                ? "حفظ التعديل"
                                                : "إضافة المنتج"}

                                        </button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    )}

                    {/* ================= DELETE MODAL ================= */}

                    {showDelete && (

                        <div className="modal-overlay">

                            <div className="delete-modal">

                                <div className="warning-icon">
                                    <i className="bi bi-exclamation-triangle"></i>
                                </div>

                                <h2>
                                    تأكيد الحذف
                                </h2>

                                <p>
                                    هل أنت متأكد من حذف المنتج
                                    {" "}
                                    <strong>
                                        {selectedProduct?.name}
                                    </strong>
                                    ؟
                                </p>

                                <div className="delete-actions">

                                    <button
                                        className="cancel-btn"
                                        onClick={() => {
                                            setShowDelete(false);
                                            setSelectedProduct(null);
                                        }}
                                    >
                                        إلغاء
                                    </button>

                                    <button
                                        className="confirm-delete"
                                        onClick={confirmDelete}
                                    >
                                        حذف المنتج
                                    </button>

                                </div>

                            </div>

                        </div>

                    )}

                    {/* ================= INVOICE ================= */}



                </main>

            </div>
            {showInvoice && (

                <div className="invoice-overlay">

                    <div className="invoice">

                        {/* رأس الفاتورة */}

                        <div className="invoice-top">

                            <div className="invoice-brand">

                                <div className="invoice-brand-icon">
                                    <i className="bi bi-shop"></i>
                                </div>

                                <div>
                                    <h1>
                                        متجر النخبة
                                    </h1>

                                    <p>
                                        لبيع الأجهزة والإكسسوارات
                                    </p>
                                </div>

                            </div>

                            <div className="invoice-label">
                                <span>
                                    فاتورة بيع
                                </span>

                                <strong>
                                    #{invoiceNumber}
                                </strong>
                            </div>

                        </div>

                        <div className="invoice-line"></div>

                        {/* معلومات الفاتورة */}

                        <div className="invoice-info">

                            <div>
                                <span>
                                    تاريخ الفاتورة
                                </span>

                                <strong>
                                    {invoiceDate}
                                </strong>
                            </div>

                            <div>
                                <span>
                                    وقت البيع
                                </span>

                                <strong>
                                    {invoiceTime}
                                </strong>
                            </div>

                            <div>
                                <span>
                                    حالة الفاتورة
                                </span>

                                <strong className="paid">
                                    <i className="bi bi-check-circle-fill"></i>
                                    مكتملة
                                </strong>
                            </div>

                        </div>

                        {/* جدول المنتجات */}

                        <div className="invoice-table">

                            <div className="invoice-table-head">

                                <span>
                                    المنتج
                                </span>

                                <span>
                                    الكمية
                                </span>

                                <span>
                                    سعر الوحدة
                                </span>

                                <span>
                                    الإجمالي
                                </span>

                            </div>

                            {cart.map((item) => (

                                <div
                                    className="invoice-table-row"
                                    key={item.id}
                                >

                                    <div className="invoice-product">

                                        <div className="invoice-product-icon">
                                            <i className="bi bi-box-seam"></i>
                                        </div>

                                        <div>
                                            <strong>
                                                {item.name}
                                            </strong>

                                            <small>
                                                {item.category}
                                            </small>
                                        </div>

                                    </div>

                                    <span>
                                        {item.quantity}
                                    </span>

                                    <span>
                                        {item.price.toLocaleString("ar-LY")}
                                        {" "}
                                        د.ل
                                    </span>

                                    <strong>
                                        {(item.price * item.quantity).toLocaleString("ar-LY")}
                                        {" "}
                                        د.ل
                                    </strong>

                                </div>

                            ))}

                        </div>

                        {/* إجمالي الفاتورة */}

                        <div className="invoice-summary">

                            <div className="invoice-summary-row">
                                <span>
                                    عدد الأصناف
                                </span>

                                <strong>
                                    {cart.length}
                                </strong>
                            </div>

                            <div className="invoice-summary-row">
                                <span>
                                    مجموع الكميات
                                </span>

                                <strong>
                                    {getCartCount()}
                                </strong>
                            </div>

                            <div className="invoice-grand-total">
                                <span>
                                    إجمالي الفاتورة
                                </span>

                                <strong>
                                    {getCartTotal().toLocaleString("ar-LY")}
                                    {" "}
                                    د.ل
                                </strong>
                            </div>

                        </div>

                        {/* أسفل الفاتورة */}

                        <div className="invoice-footer">

                            <div className="invoice-thanks">
                                <i className="bi bi-heart-fill"></i>

                                <div>
                                    <strong>
                                        شكراً لتعاملكم معنا
                                    </strong>

                                    <span>
                                        نتمنى لكم تجربة تسوق مميزة
                                    </span>
                                </div>
                            </div>

                            <div className="invoice-actions">

                                <button
                                    className="invoice-close-btn"
                                    onClick={closeInvoice}
                                >
                                    <i className="bi bi-x-lg"></i>
                                    إغلاق
                                </button>

                                <button
                                    className="print-invoice-btn"
                                    onClick={printInvoice}
                                >
                                    <i className="bi bi-printer"></i>
                                    طباعة الفاتورة
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}
        </>

    );
}

export default Patients;