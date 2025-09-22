// Product page functionality

let currentSize = 'medium';
let currentPrice = 45;
let currentQuantity = 1;

// Product data (in a real app, this would come from an API)
const productData = {
    id: 1,
    name: "Classic Chocolate Delight",
    basePrice: 45,
    images: [
        "https://images.unsplash.com/photo-1695649912819-67853082a240?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hvY29sYXRlJTIwZGVsaWdodHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1695605302591-e69ec4fa6cc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNob2NvbGF0ZSUyMGRlbGlnaHR8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1667298216085-b0bf5a2e1944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwY2FrZSUyMHNsaWNlfGVufDF8fHx8MTc1ODQ4NTQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
};

// Initialize product page
document.addEventListener('DOMContentLoaded', function() {
    initializeProduct();
});

function initializeProduct() {
    initImageGallery();
    initSizeSelection();
    initWishlist();
    updateCartButtonText();
}

function initImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image
            const newImageSrc = this.dataset.image;
            if (mainImage && newImageSrc) {
                mainImage.src = newImageSrc;
            }
        });
    });
}

function initSizeSelection() {
    const sizeOptions = document.querySelectorAll('.size-option');
    
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            sizeOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Update current selection
            currentSize = this.dataset.size;
            currentPrice = parseInt(this.dataset.price);
            
            // Update display
            updatePriceDisplay();
            updateCartButtonText();
        });
    });
}

function initWishlist() {
    const wishlistBtn = document.querySelector('.wishlist-btn');
    
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.borderColor = '#ec4899';
                this.style.color = '#ec4899';
                showWishlistNotification('Added to wishlist!');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.borderColor = '#e5e7eb';
                this.style.color = '#6b7280';
                showWishlistNotification('Removed from wishlist!');
            }
        });
    }
}

function updateQuantity(change) {
    const newQuantity = currentQuantity + change;
    
    if (newQuantity >= 1) {
        currentQuantity = newQuantity;
        document.getElementById('quantity').textContent = currentQuantity;
        updateCartButtonText();
    }
}

function updatePriceDisplay() {
    const currentPriceElement = document.getElementById('current-price');
    if (currentPriceElement) {
        currentPriceElement.textContent = formatPrice(currentPrice);
    }
}

function updateCartButtonText() {
    const totalPrice = currentPrice * currentQuantity;
    const cartBtnText = document.getElementById('cart-btn-text');
    
    if (cartBtnText) {
        cartBtnText.textContent = `Add to Cart - ${formatPrice(totalPrice)}`;
    }
}

function addProductToCart() {
    const totalPrice = currentPrice * currentQuantity;
    
    // Add to cart with current configuration
    for (let i = 0; i < currentQuantity; i++) {
        addToCart(
            productData.id,
            `${productData.name} (${currentSize})`,
            currentPrice,
            productData.images[0]
        );
    }
    
    // Reset quantity to 1 after adding
    currentQuantity = 1;
    document.getElementById('quantity').textContent = currentQuantity;
    updateCartButtonText();
}

function showWishlistNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'wishlist-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-heart"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ec4899;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

// URL parameter handling (for direct product links)
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Export functions for global access
window.updateQuantity = updateQuantity;
window.addProductToCart = addProductToCart;