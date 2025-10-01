const contenedor = document.querySelector('.burbujas');

for (let i = 0; i < 50; i++) {           
  const burbuja = document.createElement('div');
  burbuja.classList.add('burbuja');

  const size = Math.random() * 80 + 20; 
  burbuja.style.width  = `${size}px`;
  burbuja.style.height = `${size}px`;

  burbuja.style.left = `${Math.random() * 100}%`;

  const delay = Math.random() * 20;
  const duration = 10 + Math.random() * 20;
  burbuja.style.animationDelay = `${delay}s`;
  burbuja.style.animationDuration = `${duration}s`;

  contenedor.appendChild(burbuja);
}

