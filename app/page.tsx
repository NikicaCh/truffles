export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Truffles Macedonia</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">Products</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Premium Truffles from
            <span className="text-amber-600 block">Macedonia</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the finest, hand-harvested truffles from the pristine forests of Macedonia. 
            Experience the authentic taste of nature's most precious delicacy.
          </p>
          <button className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg">
            Explore Our Collection
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Truffles</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our truffles are carefully harvested from the ancient forests of Macedonia, 
                where the perfect combination of climate and soil creates the ideal conditions 
                for these rare and precious fungi to thrive.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Each truffle is hand-selected by our expert foragers, ensuring only the highest 
                quality specimens reach your table. From black truffles to the rare white truffles, 
                we offer the finest selection available.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">100%</div>
                  <div className="text-sm text-gray-600">Natural</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">24h</div>
                  <div className="text-sm text-gray-600">Fresh Delivery</div>
                </div>
              </div>
            </div>
            <div className="bg-amber-100 rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-200 rounded-xl flex items-center justify-center">
                <span className="text-6xl">🍄</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Premium Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🖤</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Black Truffles</h3>
              <p className="text-gray-600 mb-4">
                Intense, earthy flavor perfect for pasta, risotto, and gourmet dishes.
              </p>
              <div className="text-2xl font-bold text-amber-600">€150/100g</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚪</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">White Truffles</h3>
              <p className="text-gray-600 mb-4">
                The rarest and most prized, with an intense, garlicky aroma.
              </p>
              <div className="text-2xl font-bold text-amber-600">€300/100g</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🛢️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Truffle Oil</h3>
              <p className="text-gray-600 mb-4">
                Infused with real truffle essence for everyday culinary use.
              </p>
              <div className="text-2xl font-bold text-amber-600">€45/100ml</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to experience the finest truffles from Macedonia? Contact us for orders, 
            wholesale inquiries, or to learn more about our products.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@trufflesmacedonia.com</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+389 70 123 456</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Skopje, Macedonia</p>
            </div>
          </div>
          <button className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg">
            Order Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <h3 className="ml-3 text-xl font-bold">Truffles Macedonia</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Premium truffles from the heart of Macedonia
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Truffles Macedonia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 