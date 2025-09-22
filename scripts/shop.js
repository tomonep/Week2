// Shop page functionality

// Sample cake data
const cakes = [
    {
        id: 1,
        name: "Classic Chocolate Delight",
        price: 45,
        category: "birthday",
        image: "https://images.unsplash.com/photo-1555607124-8531c7c702d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwYmlydGhkYXl8ZW58MXx8fHwxNzU4NTE4OTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.9,
        description: "Rich chocolate layers with chocolate ganache"
    },
    {
        id: 2,
        name: "Elegant Wedding Cake",
        price: 150,
        category: "wedding",
        image: "https://images.unsplash.com/photo-1584158531321-2a1fefff2e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMHdoaXRlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg0NzI1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 5.0,
        description: "Three-tier white cake with vanilla buttercream"
    },
    {
        id: 3,
        name: "Rainbow Cupcake Collection",
        price: 24,
        category: "cupcakes",
        image: "https://images.unsplash.com/photo-1639098620661-3d47712d8a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGNvbG9yZnVsJTIwYmFrZXJ5fGVufDF8fHx8MTc1ODUxODk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.8,
        description: "Set of 12 colorful cupcakes with various flavors"
    },
    {
        id: 4,
        name: "Fresh Strawberry Cake",
        price: 52,
        category: "birthday",
        image: "https://images.unsplash.com/photo-1667298216085-b0bf5a2e1944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwY2FrZSUyMHNsaWNlfGVufDF8fHx8MTc1ODQ4NTQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.7,
        description: "Light sponge cake with fresh strawberries and cream"
    },
    {
        id: 5,
        name: "Vanilla Layer Cake",
        price: 38,
        category: "birthday",
        image: "https://images.unsplash.com/photo-1654546518361-eef83e447521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwY2FrZSUyMGxheWVyc3xlbnwxfHx8fDE3NTg1MTQ3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.6,
        description: "Classic vanilla cake with buttercream frosting"
    },
    {
        id: 6,
        name: "Custom Design Cake",
        price: 85,
        category: "custom",
        image: "https://images.unsplash.com/photo-1555607124-8531c7c702d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwYmlydGhkYXl8ZW58MXx8fHwxNzU4NTE4OTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.9,
        description: "Personalized cake with your choice of design and flavor"
    },
    {
        id: 7,
        name: "Red Velvet Supreme",
        price: 48,
        category: "birthday",
        image: "https://images.unsplash.com/photo-1654546518361-eef83e447521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwY2FrZSUyMGxheWVyc3xlbnwxfHx8fDE3NTg1MTQ3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.8,
        description: "Classic red velvet with cream cheese frosting"
    },
    {
        id: 8,
        name: "Luxury Wedding Tower",
        price: 250,
        category: "wedding",
        image: "https://images.unsplash.com/photo-1584158531321-2a1fefff2e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMHdoaXRlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg0NzI1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 5.0,
        description: "Four-tier luxury wedding cake with premium decorations"
    }
];

let filteredCakes = [...cakes];
let currentCategory = 'all';
let currentSearchTerm = '';

// Initialize shop page
document.addEventListener('DOMContentLoaded', function() {
    initializeShop();
});

function initializeShop() {
    renderProducts();
    initializeFilters();
    initializeSearch();
}

function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    const noResults = document.getElementById('no-results');
    const resultsCount = document.getElementById('results-count');
    
    if (filteredCakes.length === 0) {
        productsGrid.innerHTML = '';
        noResults.classList.remove('hidden');
        resultsCount.textContent = 'No cakes found';
        return;
    }
    
    noResults.classList.add('hidden');
    resultsCount.textContent = `Showing ${filteredCakes.length} of ${cakes.length} cakes`;
    
    productsGrid.innerHTML = filteredCakes.map(cake => `
        <div class="product-card fade-in">
            <div class="product-image">
                <img src="${cake.image}" alt="${cake.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-header">
                    <h3>${cake.name}</h3>
                    <div class="product-rating">
                        <i class="fas fa-star"></i>
                        <span>${cake.rating}</span>
                    </div>
                </div>
                <p class="product-description">${cake.description}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(cake.price)}</span>
                    <div class="product-actions">
                        <a href="product.html?id=${cake.id}" class="btn-outline">View</a>
                        <button class="btn-cart" onclick="addToCart(${cake.id}, '${cake.name}', ${cake.price}, '${cake.image}')">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Reinitialize fade-in animation for new elements
    initFadeInAnimation();
}

function initializeFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter
            currentCategory = this.dataset.category;
            filterProducts();
        });
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        const debouncedSearch = debounce(function(searchTerm) {
            currentSearchTerm = searchTerm.toLowerCase();
            filterProducts();
        }, 300);
        
        searchInput.addEventListener('input', function() {
            debouncedSearch(this.value);
        });
    }
}

function filterProducts() {
    filteredCakes = cakes.filter(cake => {
        const matchesCategory = currentCategory === 'all' || cake.category === currentCategory;
        const matchesSearch = currentSearchTerm === '' || 
            cake.name.toLowerCase().includes(currentSearchTerm) ||
            cake.description.toLowerCase().includes(currentSearchTerm);
        
        return matchesCategory && matchesSearch;
    });
    
    renderProducts();
}

function clearFilters() {
    currentCategory = 'all';
    currentSearchTerm = '';
    
    // Reset UI
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        }
    });
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Re-filter
    filterProducts();
}

// Export functions for global access
window.clearFilters = clearFilters;

