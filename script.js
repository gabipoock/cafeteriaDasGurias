        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
            }
        });

        const carouselTrack = document.getElementById('carouselTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const carouselDots = document.querySelectorAll('.carousel-dot');
        
        let currentSlide = 0;
        const totalSlides = 3;

        function updateCarousel() {
            const translateX = -currentSlide * 100;
            carouselTrack.style.transform = `translateX(${translateX}%)`;
            
            // Update dots
            carouselDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateCarousel();
        }

        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Dots navigation
        carouselDots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });

        // Auto-play carousel
        setInterval(nextSlide, 4000);

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        window.addEventListener('resize', () => {
            currentSlide = 0;
            updateCarousel();
        });

        const productData = {
            'espresso': {
                name: 'Espresso Tradicional',
                description: 'Espresso fresco, feito na hora, com aroma intenso, sabor marcante e delicioso.',
                image: 'assets/bebidas/cafepreto2.jpg'
            },
            'cappuccino': {
                name: 'Cappuccino Cremoso',
                description: 'Cappuccino delicioso, preparado na máquina com leite em pó e chocolate, resultando em uma bebida doce e cremosa.',
                image: '/assets/bebidas/capuccino.jpg'
            },
            'suco': {
                name: 'Suco Natural',
                description: 'Feito na hora com frutas frescas e selecionadas. Apenas o puro sabor da fruta, geladinho e delicioso para refrescar seu dia de forma leve e saudável.',
                image: '/assets/bebidas/suco.avif'
            },
            'mocha': {
                name: 'Mochaccino',
                description: 'Bebida doce e encorpada, mistura equilibrada de café, leite e chocolate, perfeita para quem busca energia e sabor.',
                image: 'assets/bebidas/mocaccino.jpg'
            },
            'milk-coffee': {
                name: 'Café com Leite',
                description: 'Clássica combinação de café fresco com leite quente, criando uma bebida suave, tradicional e cremosa.',
                image: 'assets/bebidas/cafecomleite.jpg'
            },
            'tea': {
                name: 'Chás',
                description: 'Seleção especial de chás quentes, preparados na hora para realçar sabor e aroma natural.',
                image: 'assets/bebidas/cha.jpg'
            },
            'croissant': {
                name: 'Croissant de Presunto',
                description: 'Massa folhada crocante e amanteigada, recheada com presunto de qualidade e queijo derretido. Assado fresquinho todos os dias.',
                image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bannerDesktop-rW8sqB2KhmKPvQsxbvdpdz6340K9gc.png'
            },
            'fit-cake': {
                name: 'Bolo Fitness',
                description: 'Bolo artesanal fitness com nozes e frutas secas, preparado com ingredientes premium e muito amor. Uma explosão de sabores.',
                image: 'assets/doces/IMG_1261.jpg'
            },
            'donuts': {
                name: 'Donuts Gourmet',
                description: 'Variedade de sabores especiais com coberturas artesanais. Cada donut é uma obra de arte culinária com sabores únicos.',
                image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1361.jpg-DBrMwyh6TOT5u4moV7v45AEAZ3vJ37.jpeg'
            },
            'sandwich': {
                name: 'Sanduíche Natural',
                description: 'Pão integral fresquinho com ingredientes naturais e selecionados. Uma opção saudável e saborosa para qualquer hora do dia.',
                image: '/placeholder.svg?height=250&width=400'
            },
            'strawberry-tart': {
                name: 'Torta de Morango',
                description: 'Massa crocante com morangos frescos e creme especial. Uma sobremesa irresistível que combina frescor e doçura.',
                image: '/placeholder.svg?height=250&width=400'
            },
            'cheesecake': {
                name: 'Cheesecake',
                description: 'Recheio cremoso de queijos especiais em massa folhada. Uma opção sofisticada e saborosa para acompanhar seu café.',
                image: '/placeholder.svg?height=250&width=400'
            }
        };

        function openModal(productId) {
            const product = productData[productId];
            if (product) {
                document.getElementById('modalImage').src = product.image;
                document.getElementById('modalImage').alt = product.name;
                document.getElementById('modalTitle').textContent = product.name;
                document.getElementById('modalDescription').textContent = product.description;
                document.getElementById('modalPrice').textContent = product.price;
                document.getElementById('productModal').style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        }

        function closeModal() {
            document.getElementById('productModal').style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }

        function consultProduct() {
            const productName = document.getElementById('modalTitle').textContent;
            const message = `Olá! Estava dando uma olhadinha no cardápio e gostaria de consultar sobre o valor do produto: ${productName}`;
            const whatsappUrl = `https://wa.me/5551999558529?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }

        // Close modal when clicking outside of it
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('productModal');
            if (event.target === modal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });