document.addEventListener('DOMContentLoaded', function() {
  // Event Handling
  const clickButton = document.getElementById('clickButton');
  const hoverButton = document.getElementById('hoverButton');
  const keypressInput = document.getElementById('keypressInput');
  const secretAction = document.getElementById('secretAction');

  clickButton.addEventListener('click', function() {
    alert('Button clicked!');
  });

  hoverButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
  });

  hoverButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
  });

  keypressInput.addEventListener('keypress', function(event) {
    console.log(`Key pressed: ${event.key}`);
  });

  secretAction.addEventListener('dblclick', function() {
    alert('Double-click detected!');
  });

  secretAction.addEventListener('mousedown', function(event) {
    if (event.buttons === 1) {
      setTimeout(() => {
        if (event.target === secretAction) {
          alert('Long press detected!');
        }
      }, 1000);
    }
  });

  // Interactive Elements
  const changeTextButton = document.getElementById('changeTextButton');
  const changeColorButton = document.getElementById('changeColorButton');
  const imageGallery = document.getElementById('image-gallery');
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  changeTextButton.addEventListener('click', function() {
    this.textContent = 'Text Changed!';
  });

  changeColorButton.addEventListener('click', function() {
    this.style.color = 'red';
  });

  imageGallery.addEventListener('click', function(event) {
    if (event.target.classList.contains('gallery-image')) {
      alert('Image clicked!');
    }
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const activeTab = document.querySelector('.tab.active');
      if (activeTab) {
        activeTab.classList.remove('active');
      }
      this.classList.add('active');

      const activeContent = document.querySelector('.tab-content.active');
      if (activeContent) {
        activeContent.style.display = 'none';
        activeContent.classList.remove('active');
      }

      const targetContent = document.getElementById(this.dataset.tab);
      targetContent.style.display = 'block';
      targetContent.classList.add('active');
    });
  });

  // Form Validation
  const validationForm = document.getElementById('validationForm');

  validationForm.addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
      alert('All fields are required!');
      event.preventDefault();
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Invalid email format!');
      event.preventDefault();
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long!');
      event.preventDefault();
    }
  });
});
