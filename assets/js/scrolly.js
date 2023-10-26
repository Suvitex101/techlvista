//scroll reveal

ScrollReveal({
	//reset: true,
	distance: '100px',
	duration: 3000,
	deplay: 300
});

ScrollReveal().reveal('.hero-content, .count-down, .news-input', { origin: 'top' });
ScrollReveal().reveal('.hero-img, .service-content, .discount, .contact form, .testimony-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .upcoming, .section-four, .faqs_content, .from-left', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .learn-container, .news-container', { origin: 'right' });
