// BakerFresh Cake Shop - Main JavaScript

// Product data
const products = [
    {
        id: 'brownie-1',
        name: 'Brownie',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1700448293876-07dca826c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzU4MDM1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Cake',
        tags: ['Chocolate', 'Cake'],
        isHot: true,
        rating: 5
    },
    {
        id: 'red-velvet-1',
        name: 'Red Velvet',
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1654704049616-20c3822d3934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwY2hvY29sYXRlJTIwY2FrZXxlbnwxfHx8fDE3NTgxMTU2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Cake',
        tags: ['Red Velvet', 'Cake'],
        rating: 4
    },
    {
        id: 'cream-muffin-1',
        name: 'Cream Muffin',
        price: 7.55,
        image: 'https://images.unsplash.com/photo-1621164078472-1d59a47f63dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGNha2UlMjBzbGljZXxlbnwxfHx8fDE3NTgxMTU2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Muffin',
        tags: ['Cream', 'Muffin'],
        isHot: true,
        rating: 5
    },
    {
        id: 'macaron-cake-1',
        name: 'Macaron Cake',
        price: 9.44,
        image: 'https://images.unsplash.com/photo-1669926442281-7f25f8580434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwY2FrZSUyMGJlcnJ5fGVufDF8fHx8MTc1ODExNTY4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Cake',
        tags: ['Macaron', 'Cake'],
        rating: 4
    },
    {
        id: 'no-bake-chocolate-1',
        name: 'No-bake chocolate',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1640806353257-6c408529d822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjdXBjYWtlc3xlbnwxfHx8fDE3NTgxMTU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Cupcake',
        tags: ['Chocolate', 'Cupcake'],
        rating: 3
    },
    {
        id: 'chocolate-bake-1',
        name: 'Chocolate Bake',
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1666114170628-b34b0dcc21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBicmVhZCUyMGxvYXZlc3xlbnwxfHx8fDE3NTgxMTU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Cake',
        tags: ['Chocolate', 'Cake'],
        rating: 4
    },
    {
        id: 'strawberry-donut-1',
        name: 'Strawberry Donut',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1700448293876-07dca826c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzU4MDM1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Donut',
        tags: ['Strawberry', 'Donut'],
        rating: 4
    },
    {
        id: 'vanilla-waffle-1',
        name: 'Vanilla Waffle',
        price: 6.50,
        image: 'https://images.unsplash.com/photo-1669926442281-7f25f8580434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwY2FrZSUyMGJlcnJ5fGVufDF8fHx8MTc1ODExNTY4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Waffle',
        tags: ['Vanilla', 'Waffle'],
        rating: 5
    },
    {
        id: 'red-velvet-2',
        name: 'Red Velvet Special',
        price: 7.55,
        image: 'https://images.unsplash.com/photo-1654704049616-20c3822d3934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwY2hvY29sYXRlJTIwY2FrZXxlbnwxfHx8fDE3NTgxMTU2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Cake',
        tags: ['Red Velvet', 'Cake'],
        isHot: true,
        rating: 5
    },
    {
        id: 'new-cupcake-1',
        name: 'Special Cupcake',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1640806353257-6c408529d822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjdXBjYWtlc3xlbnwxfHx8fDE3NTgxMTU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'New',
        tags: ['Special', 'Cupcake'],
        rating: 5
    }
];

// Featured cakes for home page
const featuredCakes = [
    {
        id: 'featured-1',
        name: 'Rich Chocolate Delight',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1700448293876-07dca826c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzU4MDM1NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'Decadent chocolate cake with rich ganache and cocoa powder'
    },
    {
        id: 'featured-2',
        name: 'Strawberry Romance',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1654704049616-20c3822d3934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwY2hvY29sYXRlJTIwY2FrZXxlbnwxfHx8fDE3NTgxMTU2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'Fresh strawberries with chocolate layers and cream'
    },
    {
        id: 'featured-3',
        name: 'Classic Tiramisu',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1621164078472-1d59a47f63dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGNha2UlMjBzbGljZXxlbnwxfHx8fDE3NTgxMTU2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'Italian coffee-soaked ladyfingers with mascarpone'
    },
    {
        id: 'featured-4',
        name: 'Berry Vanilla Dream',
        price: 26.99,
        image: 'https://images.unsplash.com/photo-1669926442281-7f25f8580434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwY2FrZSUyMGJlcnJ5fGVufDF8fHx8MTc1ODExNTY4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'Vanilla sponge with fresh berries and cream'
    },
    {
        id: 'featured-5',
        name: 'Chocolate Cupcakes',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1640806353257-6c408529d822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjdXBjYWtlc3xlbnwxfHx8fDE3NTgxMTU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'Set of 6 rich chocolate cupcakes with frosting'
    },
    {
        id: 'featured-6',
        name: 'Artisan Bread Selection',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1666114170628-b34b0dcc21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBicmVhZCUyMGxvYXZlc3xlbnwxfHx8fDE3NTgxMTU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'Fresh baked artisan breads and pastries'
    }
];

// Categories
const categories = ['All', 'Cake', 'Cupcake', 'Donut', 'Muffin', 'New', 'Waffle'];

// Cart state
let cart = [
    { id: 'brownie-1', name: 'Brownie', price: 4.99, image: products[0].image, quantity: 1 },
    { id: 'cream-muffin-1', name: 'Cream Muffin', price: 4.99, image: products[2].image, quantity: 1 },
    { id: 'macaron-cake-1', name: 'Macaron Cake', price: 4.99, image: products[3].image, quantity: 1 }
];

// Shop state
let shopState = {
    currentPage: 1,
    itemsPerPage: 6,
    sortBy: 'default',
    selectedCategory: 'All',
    maxPrice: 20,
    searchTerm: '',
    filteredProducts: [...products]
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupCart();
    setupShop();
    renderFeaturedCakes();
    updateCartCount();
    
    // Initialize animations
    observeElements();
    
    console.log('🍰 BakerFresh loaded successfully!');
}

// Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('[data-page]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });
}

function navigateToPage(page) {
    // Update navigation active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
    
    // Show/hide page content
    document.querySelectorAll('.page-content').forEach(content => {
        content.style.display = 'none';
    });
    
    const targetPage = document.getElementById(`${page}-page`);
    if (targetPage) {
        targetPage.style.display = 'block';
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Featured Cakes
function renderFeaturedCakes() {
    const grid = document.getElementById('featured-cakes-grid');
    if (!grid) return;
    
    grid.innerHTML = featuredCakes.map(cake => `
        <div class="cake-card">
            <div class="cake-image-container">
                <img src="${cake.image}" alt="${cake.name}" class="cake-image">
                <div class="cake-overlay">
                    <button class="add-to-cart-btn" onclick="addToCart('${cake.id}', '${cake.name}', ${cake.price}, '${cake.image}')">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div class="cake-content">
                <div class="cake-header">
                    <h3>${cake.name}</h3>
                    <span class="cake-price">$${cake.price.toFixed(2)}</span>
                </div>
                <p class="cake-description">${cake.description}</p>
            </div>
        </div>
    `).join('');
}

// Cart functionality
function setupCart() {
    const cartBtn = document.getElementById('cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartClose = document.getElementById('cart-close');
    const cartBackdrop = document.querySelector('.cart-backdrop');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }
    
    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }
    
    if (cartBackdrop) {
        cartBackdrop.addEventListener('click', closeCart);
    }
    
    renderCartItems();
}

function openCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    if (cartDrawer) {
        cartDrawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    if (cartDrawer) {
        cartDrawer.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function addToCart(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    
    updateCartCount();
    renderCartItems();
    
    // Visual feedback
    showAddToCartFeedback();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartCount();
    renderCartItems();
}

function updateQuantity(id, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(id);
        return;
    }
    
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = newQuantity;
        updateCartCount();
        renderCartItems();
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #6b7280;">
                <p>Your cart is empty</p>
            </div>
        `;
        if (cartFooter) cartFooter.style.display = 'none';
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-controls">
                    <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                        <span class="quantity-number">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    </div>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart('${item.id}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
    `).join('');
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartTotalElement = document.getElementById('cart-total');
    if (cartTotalElement) {
        cartTotalElement.textContent = `$${total.toFixed(2)}`;
    }
    
    if (cartFooter) cartFooter.style.display = 'block';
}

function showAddToCartFeedback() {
    // Could add a toast notification here
    console.log('Item added to cart!');
}

// Shop functionality
function setupShop() {
    setupShopFilters();
    setupShopControls();
    renderShopContent();
}

function setupShopFilters() {
    // Search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
    
    // Categories
    renderCategories();
    
    // Price filter
    const priceRange = document.getElementById('price-range');
    const priceDisplay = document.getElementById('price-display');
    const filterBtn = document.getElementById('filter-btn');
    
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            const maxPrice = parseFloat(this.value);
            if (priceDisplay) {
                priceDisplay.textContent = `Price: $0 - $${maxPrice}`;
            }
        });
        
        priceRange.addEventListener('change', function() {
            shopState.maxPrice = parseFloat(this.value);
            shopState.currentPage = 1;
            filterAndRenderProducts();
        });
    }
    
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            shopState.currentPage = 1;
            filterAndRenderProducts();
        });
    }
    
    // Popular products and tags
    renderPopularProducts();
    renderTags();
}

function setupShopControls() {
    // Sort
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            shopState.sortBy = this.value;
            shopState.currentPage = 1;
            filterAndRenderProducts();
        });
    }
    
    // Items per page
    const itemsPerPage = document.getElementById('items-per-page');
    if (itemsPerPage) {
        itemsPerPage.addEventListener('change', function() {
            shopState.itemsPerPage = parseInt(this.value);
            shopState.currentPage = 1;
            filterAndRenderProducts();
        });
    }
}

function handleSearch(e) {
    shopState.searchTerm = e.target.value.toLowerCase();
    shopState.currentPage = 1;
    filterAndRenderProducts();
}

function renderCategories() {
    const categoryList = document.getElementById('category-list');
    if (!categoryList) return;
    
    categoryList.innerHTML = categories.map(category => `
        <button class="category-item ${category === shopState.selectedCategory ? 'active' : ''}" 
                onclick="selectCategory('${category}')">
            ${category}
        </button>
    `).join('');
}

function selectCategory(category) {
    shopState.selectedCategory = category;
    shopState.currentPage = 1;
    renderCategories();
    filterAndRenderProducts();
}

function renderPopularProducts() {
    const popularContainer = document.getElementById('popular-products');
    if (!popularContainer) return;
    
    const popularProducts = products
        .filter(p => p.rating && p.rating >= 4)
        .slice(0, 3);
    
    popularContainer.innerHTML = popularProducts.map(product => `
        <div class="popular-product" onclick="searchForProduct('${product.name}')">
            <div class="popular-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="popular-product-info">
                <h4>${product.name}</h4>
                <p>$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

function renderTags() {
    const tagsContainer = document.getElementById('tags-container');
    if (!tagsContainer) return;
    
    const allTags = [...new Set(products.flatMap(p => p.tags))];
    
    tagsContainer.innerHTML = allTags.map(tag => `
        <button class="tag-item" onclick="searchForTag('${tag}')">${tag}</button>
    `).join('');
}

function searchForProduct(productName) {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = productName;
        shopState.searchTerm = productName.toLowerCase();
        shopState.currentPage = 1;
        filterAndRenderProducts();
    }
}

function searchForTag(tag) {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = tag;
        shopState.searchTerm = tag.toLowerCase();
        shopState.currentPage = 1;
        filterAndRenderProducts();
    }
}

function filterAndRenderProducts() {
    // Filter products
    let filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(shopState.searchTerm) ||
                            product.tags.some(tag => tag.toLowerCase().includes(shopState.searchTerm));
        const matchesCategory = shopState.selectedCategory === 'All' || product.category === shopState.selectedCategory;
        const matchesPrice = product.price <= shopState.maxPrice;
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    // Sort products
    switch (shopState.sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            break;
        default:
            break;
    }
    
    shopState.filteredProducts = filtered;
    renderShopContent();
}

function renderShopContent() {
    renderProductsGrid();
    renderPagination();
    updateResultsInfo();
}

function renderProductsGrid() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    const startIndex = (shopState.currentPage - 1) * shopState.itemsPerPage;
    const endIndex = startIndex + shopState.itemsPerPage;
    const paginatedProducts = shopState.filteredProducts.slice(startIndex, endIndex);
    
    productsGrid.innerHTML = paginatedProducts.map(product => `
        <div class="product-card">
            ${product.isHot ? '<div class="hot-badge">HOT</div>' : ''}
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-overlay">
                    <button class="add-to-cart-btn" onclick="addToCart('${product.id}', '${product.name}', ${product.price}, '${product.image}')">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

function renderPagination() {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    
    const totalPages = Math.ceil(shopState.filteredProducts.length / shopState.itemsPerPage);
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = `
        <button class="pagination-btn" onclick="goToPage(${shopState.currentPage - 1})" 
                ${shopState.currentPage === 1 ? 'disabled' : ''}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6"/>
            </svg>
        </button>
    `;
    
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <button class="pagination-btn ${i === shopState.currentPage ? 'active' : ''}" 
                    onclick="goToPage(${i})">
                ${i}
            </button>
        `;
    }
    
    paginationHTML += `
        <button class="pagination-btn" onclick="goToPage(${shopState.currentPage + 1})" 
                ${shopState.currentPage === totalPages ? 'disabled' : ''}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"/>
            </svg>
        </button>
    `;
    
    paginationContainer.innerHTML = paginationHTML;
}

function goToPage(page) {
    const totalPages = Math.ceil(shopState.filteredProducts.length / shopState.itemsPerPage);
    if (page < 1 || page > totalPages) return;
    
    shopState.currentPage = page;
    renderShopContent();
}

function updateResultsInfo() {
    const resultsInfo = document.getElementById('results-info');
    if (!resultsInfo) return;
    
    const startIndex = (shopState.currentPage - 1) * shopState.itemsPerPage + 1;
    const endIndex = Math.min(startIndex + shopState.itemsPerPage - 1, shopState.filteredProducts.length);
    const total = shopState.filteredProducts.length;
    
    resultsInfo.textContent = `Showing ${startIndex} - ${endIndex} of ${total} result${total !== 1 ? 's' : ''}`;
}

// Animations and UI enhancements
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) translateX(0)';
            }
        });
    }, observerOptions);
    
    // Observe cake cards
    setTimeout(() => {
        document.querySelectorAll('.cake-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
        
        // Observe feature items
        document.querySelectorAll('.feature').forEach((feature, index) => {
            feature.style.transitionDelay = `${index * 0.2}s`;
            observer.observe(feature);
        });
    }, 100);
}

// Header scroll behavior
let lastScrollY = 0;
window.addEventListener('scroll', debounce(() => {
    const header = document.querySelector('.header');
    const currentScrollY = window.scrollY;
    
    if (header) {
        if (currentScrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    }
    
    lastScrollY = currentScrollY;
}, 10));

// Parallax effect for hero background
window.addEventListener('scroll', debounce(() => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 10));

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize shop filters on page load
filterAndRenderProducts();