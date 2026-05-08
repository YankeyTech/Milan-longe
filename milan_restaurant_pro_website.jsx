export default function MilanRestaurantWebsite() {
  const floatingFoods = [
    '🍷',
    '🍝',
    '🍕',
    '🥂',
    '🍤',
    '🍰',
  ];
  const menuItems = [
    {
      title: 'Gold Signature Cocktail',
      price: '$24',
      image:
        'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Premium Whisky Mix',
      price: '$38',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Luxury Fruit Mocktail',
      price: '$29',
      image:
        'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const testimonials = [
    {
      name: 'Sophia Carter',
      text: 'An unforgettable dining experience with amazing atmosphere and flavors.',
    },
    {
      name: 'Daniel Brooks',
      text: 'Beautiful interior, premium meals, and excellent customer service.',
    },
    {
      name: 'Mia Johnson',
      text: 'One of the best restaurants I’ve visited. Highly recommended.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden scroll-smooth selection:bg-yellow-400 selection:text-black">
      {/* FLOATING DECOR */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingFoods.map((food, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-10 animate-bounce"
            style={{
              top: `${10 + i * 14}%`,
              left: `${i * 15}%`,
              animationDuration: `${4 + i}s`,
            }}
          >
            {food}
          </div>
        ))}
      </div>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="relative text-3xl md:text-4xl font-black tracking-[0.35em] text-yellow-400 uppercase">
            <span className="relative z-10 drop-shadow-[0_0_25px_rgba(250,204,21,0.8)] [text-shadow:_0_5px_25px_rgba(250,204,21,0.8)]">
              MILAN
            </span>
            <div className="absolute inset-0 blur-xl opacity-70 text-yellow-400 scale-110">
              MILAN
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
            <a href="#menu" className="hover:text-yellow-400 transition">
              Menu
            </a>
            <a href="#gallery" className="hover:text-yellow-400 transition">
              Gallery
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </div>

          <a
            href="#reservation"
            className="bg-yellow-400 text-black px-5 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-2xl"
          >
            Reserve Table
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center px-6"
      >
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
          alt="Restaurant"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>

        <div className="relative z-10 max-w-5xl animate-[fadeIn_1.5s_ease]">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>
          <div className="inline-block px-4 py-2 border border-yellow-400 rounded-full text-yellow-400 tracking-widest uppercase text-xs mb-6">
            Premium Lounge & Bar Experience
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-tight mb-6 drop-shadow-[0_0_25px_rgba(250,204,21,0.4)]">
            Welcome to <span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.8)] [text-shadow:_0_8px_30px_rgba(250,204,21,0.7)]">MILAN</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Where nightlife, premium beverages, music, and luxury ambiance come together for unforgettable experiences in Kumasi.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <a
              href="#menu"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(250,204,21,0.4)]"
            >
              Explore Menu
            </a>

            <a
              href="#gallery"
              className="border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <div className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            About Milan
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            A Premium Lounge & Bar Built for Luxury Nights
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            MILAN Lounge & Bar combines luxury nightlife, signature cocktails, premium drinks, live vibes, and elegant atmosphere. From weekend hangouts to VIP celebrations, every night becomes unforgettable.
          </p>

          <div className="flex gap-4">
            <a
              href="#reservation"
              className="bg-yellow-400 text-black px-6 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Book Experience
            </a>

            <a
              href="#contact"
              className="border border-white/20 px-6 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop"
            alt="Luxury Lounge"
            className="rounded-[2rem] shadow-2xl"
          />

          <div className="absolute -bottom-8 -left-8 bg-yellow-400 text-black p-8 rounded-3xl shadow-2xl">
            <div className="text-5xl font-black">10+</div>
            <div className="uppercase tracking-wider text-sm font-semibold">
              Years Experience
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Premium Beverages
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-14">
            Signature Drinks & Cocktails
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="group bg-black/80 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 hover:border-yellow-400/50 transition-all hover:-translate-y-4 hover:rotate-[1deg] duration-500 shadow-[0_0_60px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(250,204,21,0.2)]"
              >
                <div className="overflow-hidden h-72">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 text-left">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <span className="text-yellow-400 font-bold text-xl">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6">
                    Mixed professionally for unforgettable nightlife vibes and luxury enjoyment.
                  </p>

                  <a
                    href="#reservation"
                    className="inline-block bg-yellow-400 text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    Order Drink
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-[140px] rounded-full"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Gallery
            </div>

            <h2 className="text-4xl md:text-6xl font-black">
              Elegant Moments at MILAN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1200&auto=format&fit=crop',
            ].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[2rem] group relative"
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <div className="text-2xl font-bold">MILAN Nightlife</div>
                    <div className="text-gray-300">Luxury • Music • Cocktails</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Testimonials
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-16">
            What Guests Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
            {testimonials.map((review, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-[2rem] p-8 hover:border-yellow-400/50 transition-all"
              >
                <div className="text-yellow-400 text-4xl mb-6">★★★★★</div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {review.text}
                </p>
                <div className="font-bold text-xl">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION SECTION */}
      <section
        id="reservation"
        className="relative py-24 px-6 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-transparent to-yellow-500/20 blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto bg-zinc-950/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 md:p-16 shadow-[0_0_80px_rgba(250,204,21,0.1)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent"></div>
          <div className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Reservation
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Reserve VIP Table
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Reserve your VIP spot at MILAN Lounge & Bar for unforgettable nightlife, premium drinks, and luxury vibes.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="date"
              className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="time"
              className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <textarea
              placeholder="Special Requests"
              rows="5"
              className="md:col-span-2 bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400"
            ></textarea>

            <button
              onClick={() => alert('Reservation request submitted successfully!')}
              type="submit"
              className="md:col-span-2 bg-yellow-400 text-black py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition-transform"
            >
              Reserve VIP Spot
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-black border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_40%)]"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="text-4xl font-black tracking-[0.3em] text-yellow-400 mb-6">
              MILAN
            </div>
            <p className="text-gray-400 leading-relaxed">
              A premium lounge and nightlife destination designed for unforgettable vibes, luxury drinks, and elite experiences.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>

            <div className="space-y-4 text-gray-400">
              <a href="#home" className="block hover:text-yellow-400 transition">
                Home
              </a>
              <a href="#about" className="block hover:text-yellow-400 transition">
                About Us
              </a>
              <a href="#menu" className="block hover:text-yellow-400 transition">
                Menu
              </a>
              <a href="#reservation" className="block hover:text-yellow-400 transition">
                VIP Reservations
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

            <div className="space-y-4 text-gray-400">
              <p>📍 Kumasi - Anloga, Ghana</p>
              <p>📞 054 089 6361</p>
              <p>✉ milanloungebar@gmail.com</p>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                IG
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                FB
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                X
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
          © 2026 MILAN Restaurant. Designed with luxury nightlife aesthetics, premium animations, responsive design, and elite digital experience.
        </div>
      </section>
          {/* LIVE CHAT BUTTON */}
      <button className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black w-16 h-16 rounded-full shadow-[0_0_40px_rgba(250,204,21,0.5)] text-2xl hover:scale-110 transition-transform animate-pulse">
        💬
      </button>

      {/* BACK TO TOP */}
      <a
        href="#home"
        className="fixed bottom-28 right-6 z-50 bg-white/10 backdrop-blur-lg border border-white/10 w-14 h-14 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
      >
        ↑
      </a>

      {/* CUSTOM STYLES */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        body {
          background: #000;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: #facc15;
          border-radius: 999px;
        }
      `}</style>
    </div>
  );
}
