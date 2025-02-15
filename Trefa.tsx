// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
const App: React.FC = () => {
const [isHeaderSticky, setIsHeaderSticky] = useState(false);
const [cartCount, setCartCount] = useState(2);
const [showNewsletter, setShowNewsletter] = useState(false);
const [email, setEmail] = useState('');
useEffect(() => {
const handleScroll = () => {
setIsHeaderSticky(window.scrollY > 100);
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
const testimonials = [
{
name: 'Isabella Thompson',
location: 'London, UK',
rating: 5,
text: 'The quality and craftsmanship of Trefa kurtis are exceptional. Each piece tells a story of Jaipur\'s rich heritage.',
image: 'https://public.readdy.ai/ai/img_res/fd0c51950a9702f458d3c1a8171326bc.jpg'
},
{
name: 'Sarah Mitchell',
location: 'New York, USA',
rating: 5,
text: 'I\'m absolutely in love with my Trefa collection. The attention to detail and comfort is unmatched.',
image: 'https://public.readdy.ai/ai/img_res/2ba5f7a57eadba29bebecc1af20d94f1.jpg'
},
];
return (
<div className="min-h-screen">
{/* Header */}
<header className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md`}>
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="text-3xl font-serif">
<span style={{ color: '#55048C' }}>Tre</span>
<span style={{ color: '#FEB003' }}>fa</span>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a href="#" className="text-gray-700 hover:text-indigo-900 font-medium">Home</a>
<div className="relative group">
<button className="text-gray-700 hover:text-indigo-900 font-medium flex items-center">
Collections
<i className="fas fa-chevron-down ml-2 text-xs"></i>
</button>
<div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
<div className="py-2">
<h3 className="px-4 py-2 text-sm font-semibold text-gray-600">Kurtis</h3>
<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Casual Kurtis</a>
<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Party Wear</a>
<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Designer Kurtis</a>
<h3 className="px-4 py-2 text-sm font-semibold text-gray-600 mt-2">Suits</h3>
<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Anarkali Suits</a>
<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Palazzo Suits</a>
<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sharara Suits</a>
</div>
</div>
</div>
<a href="#" className="text-gray-700 hover:text-indigo-900 font-medium">About Us</a>
<a href="#" className="text-gray-700 hover:text-indigo-900 font-medium">Contact</a>
</nav>
<div className="flex items-center space-x-6">
<div className="relative">
<input
type="text"
placeholder="Search..."
className="pl-10 pr-4 py-2 rounded-full border-none bg-gray-100 focus:ring-2 focus:ring-indigo-200 text-sm text-gray-700"
/>
<i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
</div>
<div className="relative">
<i className="fas fa-shopping-cart text-xl text-gray-700 hover:text-indigo-900 cursor-pointer"></i>
<span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
{cartCount}
</span>
</div>
</div>
</div>
</header>
{/* Hero Section */}
<section className="relative h-screen">
<Swiper
modules={[Pagination, Autoplay]}
pagination={{ clickable: true }}
autoplay={{ delay: 5000 }}
className="h-full"
>
<SwiperSlide>
<div className="relative h-full bg-cover bg-center" style={{
backgroundImage: `url('https://public.readdy.ai/ai/img_res/f38915231c26d2d6267c2646bc810e74.jpg')`
}}>
<div className="absolute inset-0 bg-black bg-opacity-30"></div>
<div className="absolute inset-0 flex items-center justify-start px-20">
<div className="text-white max-w-2xl">
<h1 className="text-6xl font-serif mb-6">Elegance Crafted in Jaipur</h1>
<p className="text-xl mb-8">Discover our handcrafted collection of traditional and contemporary kurtis</p>
<button className="!rounded-button bg-white text-indigo-900 px-8 py-3 text-lg hover:bg-indigo-900 hover:text-white transition-all whitespace-nowrap">
Shop Now
</button>
</div>
</div>
</div>
</SwiperSlide>
</Swiper>
</section>
{/* Brand Story */}
<section className="py-20 px-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-4xl font-serif text-indigo-900 mb-6">Our Story</h2>
<p className="text-gray-600 leading-relaxed mb-6">
Founded in the heart of Jaipur, Trefa brings together traditional craftsmanship and contemporary design. Our journey began with a vision to create kurtis that celebrate the rich heritage of Rajasthan while embracing modern aesthetics.
</p>
<p className="text-gray-600 leading-relaxed">
Each piece in our collection is meticulously crafted by skilled artisans, using hand-picked fabrics and age-old techniques passed down through generations. We take pride in delivering not just clothing, but pieces of art that tell stories of tradition and elegance.
</p>
</div>
<div className="relative h-[500px] overflow-hidden">
<img
src="https://public.readdy.ai/ai/img_res/399d3824669a595ea3971584f032f595.jpg"
alt="Artisans at work"
className="w-full h-full object-cover"
/>
</div>
</div>
</section>
{/* Featured Collections */}
<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl font-serif text-center text-indigo-900 mb-12">Featured Collections</h2>
<div className="grid md:grid-cols-3 gap-8">
{[
{ title: 'Traditional Collection', image: 'https://public.readdy.ai/ai/img_res/39e8ef5d5f2a318bbfc1d61a81fbd181.jpg' },
{ title: 'Contemporary Fusion', image: 'https://public.readdy.ai/ai/img_res/a23d7a0e7d888df0c08e24cd00946d54.jpg' },
{ title: 'Festive Edition', image: 'https://public.readdy.ai/ai/img_res/64533632335c02c2f39e5ee3e08ba7b6.jpg' }
].map((collection, index) => (
<div key={index} className="group relative overflow-hidden rounded-lg">
<div className="aspect-w-3 aspect-h-4">
<img
src={collection.image}
alt={collection.title}
className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
/>
</div>
<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<div className="text-center">
<h3 className="text-white text-2xl font-serif mb-4">{collection.title}</h3>
<button className="!rounded-button bg-white text-indigo-900 px-6 py-2 hover:bg-indigo-900 hover:text-white transition-all whitespace-nowrap">
Shop Now
</button>
</div>
</div>
</div>
))}
</div>
</div>
</section>
{/* Testimonials */}
<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl font-serif text-center text-indigo-900 mb-12">What Our Customers Say</h2>
<div className="grid md:grid-cols-2 gap-8">
{testimonials.map((testimonial, index) => (
<div key={index} className="bg-white p-8 rounded-lg shadow-lg">
<div className="flex items-center mb-4">
<img
src={testimonial.image}
alt={testimonial.name}
className="w-16 h-16 rounded-full object-cover mr-4"
/>
<div>
<h3 className="font-semibold text-lg">{testimonial.name}</h3>
<p className="text-gray-600">{testimonial.location}</p>
</div>
</div>
<div className="flex mb-4">
{[...Array(testimonial.rating)].map((_, i) => (
<i key={i} className="fas fa-star text-yellow-400"></i>
))}
</div>
<p className="text-gray-600 italic">{testimonial.text}</p>
</div>
))}
</div>
</div>
</section>
{/* Newsletter */}
<section className="py-20 bg-indigo-900 text-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl font-serif mb-6">Stay Connected</h2>
<p className="mb-8 text-lg">Subscribe to receive updates about new collections and exclusive offers</p>
<div className="max-w-md mx-auto">
<div className="flex">
<input
type="email"
placeholder="Enter your email"
className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 border-none"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<button
onClick={() => setShowNewsletter(true)}
className="!rounded-button bg-indigo-600 text-white px-6 py-3 rounded-r-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
>
Subscribe
</button>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-gray-900 text-gray-300 py-12">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div>
<h3 className="text-2xl font-serif mb-4">
<span style={{ color: '#55048C' }}>Tre</span>
<span style={{ color: '#FEB003' }}>fa</span>
</h3>
<p className="text-sm">Crafting elegance since 2020</p>
</div>
<div>
<h4 className="text-white text-lg mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
<li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
<li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
<li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-lg mb-4">Contact Us</h4>
<ul className="space-y-2">
<li><i className="fas fa-envelope mr-2"></i> hello@trefa.com</li>
<li><i className="fas fa-phone mr-2"></i> +91 987 654 3210</li>
<li><i className="fas fa-map-marker-alt mr-2"></i> Jaipur, Rajasthan</li>
</ul>
</div>
<div>
<h4 className="text-white text-lg mb-4">Follow Us</h4>
<div className="flex space-x-4">
<a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
<a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
<a href="#" className="hover:text-white transition-colors"><i className="fab fa-pinterest"></i></a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-gray-800 text-center">
<p>&copy; 2025 Trefa. All rights reserved.</p>
</div>
</footer>
{/* WhatsApp Button */}
<a
href="https://wa.me/919876543210"
className="fixed bottom-6 right-6 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
>
<i className="fab fa-whatsapp text-2xl"></i>
</a>
{/* Newsletter Success Modal */}
{showNewsletter && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
<div className="bg-white p-8 rounded-lg max-w-md text-center">
<i className="fas fa-check-circle text-5xl text-green-500 mb-4"></i>
<h3 className="text-2xl font-serif text-gray-900 mb-2">Thank You!</h3>
<p className="text-gray-600 mb-6">You have successfully subscribed to our newsletter.</p>
<button
onClick={() => setShowNewsletter(false)}
className="!rounded-button bg-indigo-900 text-white px-6 py-2 hover:bg-indigo-700 transition-colors whitespace-nowrap"
>
Close
</button>
</div>
</div>
)}
</div>
);
};
export default App;
// end
