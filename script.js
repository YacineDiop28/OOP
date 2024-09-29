class ShoppingCart {
    constructor() {
      this.plusButtons = document.querySelectorAll('.plus-btn');
      this.minusButtons = document.querySelectorAll('.minus-btn');
      this.deleteButtons = document.querySelectorAll('.delete-btn');
      this.heartButtons = document.querySelectorAll('.heart-btn');
      this.quantities = document.querySelectorAll('.quantity');
      this.unitPrices = document.querySelectorAll('.unit-price');
      this.totalPriceElement = document.querySelector('.total');
      
      this.init();
    }
  
    init() {
      this.handlePlusButtons();
      this.handleMinusButtons();
      this.handleDeleteButtons();
      this.handleHeartButtons();
    }
  
    handlePlusButtons() {
      this.plusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          let quantity = parseInt(this.quantities[index].textContent);
          quantity++;
          this.quantities[index].textContent = quantity;
          this.updateTotalPrice();
        });
      });
    }
  
    handleMinusButtons() {
      this.minusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          let quantity = parseInt(this.quantities[index].textContent);
          if (quantity > 0) {
            quantity--;
            this.quantities[index].textContent = quantity;
            this.updateTotalPrice();
          }
        });
      });
    }
  
    handleDeleteButtons() {
      this.deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const product = button.closest('.product');
          product.remove();
          this.updateTotalPrice();
        });
      });
    }
  
    handleHeartButtons() {
      this.heartButtons.forEach((button) => {
        button.addEventListener('click', () => {
          button.classList.toggle('liked');
        });
      });
    }
  
    updateTotalPrice() {
      let totalPrice = 0;
      this.quantities.forEach((quantityElement, index) => {
        const quantity = parseInt(quantityElement.textContent);
        const unitPrice = parseInt(this.unitPrices[index].textContent.replace(' $', ''));
        totalPrice += quantity * unitPrice;
      });
      this.totalPriceElement.textContent = `${totalPrice} $`;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const shoppingCart = new ShoppingCart();
  });
  