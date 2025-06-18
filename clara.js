import React, { useState, useEffect } from 'react';
import { X, Menu, Volume2, VolumeX } from 'lucide-react';

const Website = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const audioElement = document.getElementById('background-audio');
    if (audioElement) {
      if (audioPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const fadeInAnimation = (delay) => {
    return {
      opacity: 0,
      animation: `fadeIn 1.5s ease-in-out ${delay}s forwards`
    };
  };

  return (
    <div className="font-serif bg-pearl-white min-h-screen">
      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .hover-grow {
          transition: transform 0.3s ease;
        }

        .hover-grow:hover {
          transform: scale(1.03);
        }

        .nav-link {
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #c5d1c0;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }
      `}</style>

      {/* Audio Element */}
      <audio id="background-audio" loop>
        <source src="path/to/your/audiofile.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Navigation */}
      <nav className="fixed w-full bg-pearl-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-serif italic">
              <a href="#home" className="text-sage text-xl tracking-wide">A Quiet Bloom</a>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className={`nav-link text-sm tracking-wider ${activeSection === 'home' ? 'active text-sage' : 'text-gray-500'}`}
              >
                HOME
              </a>
              <a
                href="#essence"
                onClick={(e) => { e.preventDefault(); scrollToSection('essence'); }}
                className={`nav-link text-sm tracking-wider ${activeSection === 'essence' ? 'active text-sage' : 'text-gray-500'}`}
              >
                ESSENCE
              </a>
              <a
                href="#moments"
                onClick={(e) => { e.preventDefault(); scrollToSection('moments'); }}
                className={`nav-link text-sm tracking-wider ${activeSection === 'moments' ? 'active text-sage' : 'text-gray-500'}`}
              >
                MOMENTS
              </a>
              <a
                href="#words"
                onClick={(e) => { e.preventDefault(); scrollToSection('words'); }}
                className={`nav-link text-sm tracking-wider ${activeSection === 'words' ? 'active text-sage' : 'text-gray-500'}`}
              >
                WORDS
              </a>
              <a
                href="#healing"
                onClick={(e) => { e.preventDefault(); scrollToSection('healing'); }}
                className={`nav-link text-sm tracking-wider ${activeSection === 'healing' ? 'active text-sage' : 'text-gray-500'}`}
              >
                HEALING
              </a>
              <a
                href="#reflections"
                onClick={(e) => { e.preventDefault(); scrollToSection('reflections'); }}
                className={`nav-link text-sm tracking-wider ${activeSection === 'reflections' ? 'active text-sage' : 'text-gray-500'}`}
              >
                REFLECTIONS
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className={`nav-link text-sm tracking-wider ${activeSection === 'contact' ? 'active text-sage' : 'text-gray-500'}`}
              >
                CONTACT
              </a>

              {/* Audio toggle */}
              <button
                onClick={toggleAudio}
                className="text-gray-500 hover:text-sage transition-colors"
                aria-label={audioPlaying ? "Mute background music" : "Play background music"}
              >
                {audioPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-sage transition-colors"
                aria-label="Open menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-pearl-white bg-opacity-95 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className={`block px-3 py-2 text-sm ${activeSection === 'home' ? 'text-sage' : 'text-gray-500'}`}
              >
                HOME
              </a>
              <a
                href="#essence"
                onClick={(e) => { e.preventDefault(); scrollToSection('essence'); }}
                className={`block px-3 py-2 text-sm ${activeSection === 'essence' ? 'text-sage' : 'text-gray-500'}`}
              >
                ESSENCE
              </a>
              <a
                href="#moments"
                onClick={(e) => { e.preventDefault(); scrollToSection('moments'); }}
                className={`block px-3 py-2 text-sm ${activeSection === 'moments' ? 'text-sage' : 'text-gray-500'}`}
              >
                MOMENTS
              </a>
              <a
                href="#words"
                onClick={(e) => { e.preventDefault(); scrollToSection('words'); }}
                className={`block px-3 py-2 text-sm ${activeSection === 'words' ? 'text-sage' : 'text-gray-500'}`}
              >
                WORDS
              </a>
              <a
                href="#healing"
                onClick={(e) => { e.preventDefault(); scrollToSection('healing'); }}
                className={`block px-3 py-2 text-sm ${activeSection === 'healing' ? 'text-sage' : 'text-gray-500'}`}
              >
                HEALING
              </a>
              <a
                href="#reflections"
                onClick={(e) => { e.preventDefault(); scrollToSection('reflections'); }}
                className={`block px-3 py-2 text-sm ${activeSection === 'reflections' ? 'text-sage' : 'text-gray-500'}`}
              >
                REFLECTIONS
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className={`block px-3 py-2 text-sm ${activeSection === 'contact' ? 'text-sage' : 'text-gray-500'}`}
              >
                CONTACT
              </a>

              {/* Mobile audio toggle */}
              <button
                onClick={toggleAudio}
                className="flex items-center px-3 py-2 text-sm text-gray-500"
                aria-label={audioPlaying ? "Mute background music" : "Play background music"}
              >
                {audioPlaying ? <VolumeX size={18} className="mr-2" /> : <Volume2 size={18} className="mr-2" />}
                {audioPlaying ? "Mute Music" : "Play Music"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Homepage Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8e4e4 0%, #eae6f9 100%)' }}>
        <div className="absolute inset-0 bg-[url('/path/to/your/image.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <h1 style={fadeInAnimation(0)} className="text-4xl md:text-6xl font-serif font-light text-gray-800 tracking-wide leading-tight mb-6">
            A Quiet Bloom
          </h1>
          <p style={fadeInAnimation(0.3)} className="text-lg md:text-xl italic text-gray-600 mb-12">
            A tribute to someone whose presence heals without words.
          </p>
          <div style={fadeInAnimation(0.6)} className="max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-6">
              She walks like the whisper of dawn,<br />
              Wakes with the wind and forgets to eat the sun.<br />
              Eyeglasses reflect stories unspoken,<br />
              Her silence—more healing than sound.
            </p>
          </div>
          <div style={fadeInAnimation(0.9)} className="mt-12">
            <button
              onClick={() => scrollToSection('essence')}
              className="px-8 py-3 border border-sage text-sage bg-transparent hover:bg-sage hover:text-white transition-colors duration-300 rounded-sm tracking-wider"
            >
              EXPLORE
            </button>
          </div>
        </div>

        {/* Decorative floral elements */}
        <div className="absolute bottom-12 left-12 opacity-30 hidden md:block">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 Q70,30 50,50 Q30,70 50,90 Q70,70 50,50 Q30,30 50,10" stroke="#c5d1c0" strokeWidth="1" fill="none" />
            <path d="M10,50 Q30,70 50,50 Q70,30 90,50 Q70,70 50,50 Q30,30 10,50" stroke="#c5d1c0" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute top-12 right-12 opacity-30 hidden md:block">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,20 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Q10,50 20,20" stroke="#c5d1c0" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </section>

      {/* Essence Section */}
      <section id="essence" className="py-24 bg-pale-lavender bg-opacity-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light text-gray-800 mb-3">🌸 Essence</h2>
            <div className="h-px w-16 bg-sage mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="hover-grow bg-white bg-opacity-70 p-8 rounded-sm shadow-sm">
              <p className="text-gray-700 leading-relaxed italic mb-4">
                "A soul that carries quiet like a scarf in spring—never loud, but always felt."
              </p>
              <p className="text-gray-600">
                She exists in the gentle space between words, where meaning flows without sound. Her presence is like morning light through gauze curtains—filtered, soft, and somehow more beautiful for its subtlety.
              </p>
            </div>

            <div className="hover-grow bg-white bg-opacity-70 p-8 rounded-sm shadow-sm">
              <p className="text-gray-700 leading-relaxed italic mb-4">
                "She is not the storm. She is the stillness after it."
              </p>
              <p className="text-gray-600">
                In a world of constant noise, she stands as a reminder that peace speaks its own language. Her movements carry the grace of someone who knows the value of each moment—unhurried, deliberate, meaningful.
              </p>
            </div>

            <div className="hover-grow bg-white bg-opacity-70 p-8 rounded-sm shadow-sm">
              <p className="text-gray-700 leading-relaxed italic mb-4">
                "Some souls carry peace the way others carry noise."
              </p>
              <p className="text-gray-600">
                Her thoughts bloom like wildflowers—unexpected and beautiful. When she does share them, they come with the weight of careful consideration, offering perspective like rare stones washed smooth by time.
              </p>
            </div>

            <div className="hover-grow bg-white bg-opacity-70 p-8 rounded-sm shadow-sm">
              <p className="text-gray-700 leading-relaxed italic mb-4">
                "Her silence was not absence; it was a soft kind of strength."
              </p>
              <p className="text-gray-600">
                She listens with her entire being—eyes attentive, heart open. In her gaze is the rare gift of complete presence, a sanctuary where others find the courage to be themselves without explanation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Moments Section */}
      <section id="moments" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light text-gray-800 mb-3">🌼 Moments</h2>
            <div className="h-px w-16 bg-sage mx-auto"></div>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="w-32 h-32 mx-auto rounded-full bg-mist-rose flex items-center justify-center">
                  <span className="text-2xl">🌅</span>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-12">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Morning Ritual</h3>
                <p className="text-gray-600 leading-relaxed">
                  "Wakes at 7:00, like a lily rising with the light."
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  In the quiet of dawn, she moves with thoughtful precision—water boiled to exactly the right temperature, tea steeped for precisely four minutes. Her morning pages filled with observations others might miss: the changing angle of light, a bird's new song, the pattern of frost on the windowpane.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:order-last">
                <div className="w-32 h-32 mx-auto rounded-full bg-mist-rose flex items-center justify-center">
                  <span className="text-2xl">🥄</span>
                </div>
              </div>
              <div className="md:w-2/3 md:pr-12">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Daily Sustenance</h3>
                <p className="text-gray-600 leading-relaxed">
                  "Skips breakfast, but never skips kindness."
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  Food is sometimes forgotten in her day, yet nourishment comes in other forms. A book opened to exactly the right page, the careful tending of plants that thrive under her touch, small acts of consideration that feed the soul if not the body.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="w-32 h-32 mx-auto rounded-full bg-mist-rose flex items-center justify-center">
                  <span className="text-2xl">👓</span>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-12">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Windows to Within</h3>
                <p className="text-gray-600 leading-relaxed">
                  "Eyeglasses frame eyes that see more than most."
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  Behind the gentle curve of glass lies a gaze that pierces pretense. She adjusts her frames with a small, familiar gesture when thinking deeply—a momentary pause before an observation that reveals hidden layers of meaning others have missed entirely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Words Section */}
      <section id="words" className="py-24 bg-mist-rose bg-opacity-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light text-gray-800 mb-3">🕊️ Words She Left</h2>
            <div className="h-px w-16 bg-sage mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm hover-grow">
              <div className="text-sage text-4xl mb-4">"</div>
              <p className="text-gray-700 italic mb-6">
                It's okay to be quiet. The moon never shouts, yet we still look for her every night.
              </p>
              <div className="text-right text-gray-500 text-sm">— written in her journal</div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover-grow">
              <div className="text-sage text-4xl mb-4">"</div>
              <p className="text-gray-700 italic mb-6">
                I collect small moments like others collect photographs. They take up less space but hold just as much memory.
              </p>
              <div className="text-right text-gray-500 text-sm">— from a letter</div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover-grow">
              <div className="text-sage text-4xl mb-4">"</div>
              <p className="text-gray-700 italic mb-6">
                Listen to what people don't say. That's where their truth lives.
              </p>
              <div className="text-right text-gray-500 text-sm">— overheard once</div>
            </div>
          </div>
        </div>
      </section>

      {/* Healing Presence Section */}
      <section id="healing" className="py-24 bg-cloud-gray bg-opacity-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light text-gray-800 mb-3">🍃 Healing Presence</h2>
            <div className="h-px w-16 bg-sage mx-auto"></div>
          </div>

          <div className="space-y-32 py-12">
            <div className="opacity-0 transform translate-y-8" style={{ animation: 'floatIn 1.2s ease-out 0.3s forwards' }}>
              <p className="text-center text-xl md:text-2xl text-gray-700 font-light italic">
                "Sometimes, the most peaceful place is standing next to someone who doesn't rush you to speak."
              </p>
            </div>

            <div className="opacity-0 transform translate-y-8" style={{ animation: 'floatIn 1.2s ease-out 0.9s forwards' }}>
              <p className="text-center text-xl md:text-2xl text-gray-700 font-light italic">
                "Her quiet is not emptiness, but fullness—like a cup that need not spill to prove its worth."
              </p>
            </div>

            <div className="opacity-0 transform translate-y-8" style={{ animation: 'floatIn 1.2s ease-out 1.5s forwards' }}>
              <p className="text-center text-xl md:text-2xl text-gray-700 font-light italic">
                "In her pauses, others find their voices. In her silences, wisdom grows."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflections Section */}
      <section id="reflections" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light text-gray-800 mb-3">🌙 Reflections</h2>
            <div className="h-px w-16 bg-sage mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pale-lavender bg-opacity-30 p-8 rounded-sm hover-grow">
              <div className="text-gray-400 text-sm mb-2">April 12, 2023</div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">The Day She Taught Me About Clouds</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I remember her pointing to the sky without saying a word. Just a gentle gesture upward, where cirrus clouds streaked the blue like brushstrokes. She knew I'd look up and see them too. That was her way—sharing beauty through simple direction, not explanation.
              </p>
              <a href="#" className="text-sage hover:underline">Read more</a>
            </div>

            <div className="bg-pale-lavender bg-opacity-30 p-8 rounded-sm hover-grow">
              <div className="text-gray-400 text-sm mb-2">March 3, 2023</div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Her Collection of Empty Spaces</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                She once told me she collects empty spaces—the pause between musical notes, the white space on a page, the moment between breaths. "These aren't absences," she said, in one of her rare extended conversations. "They're where possibility lives."
              </p>
              <a href="#" className="text-sage hover:underline">Read more</a>
            </div>

            <div className="bg-pale-lavender bg-opacity-30 p-8 rounded-sm hover-grow">
              <div className="text-gray-400 text-sm mb-2">January 17, 2023</div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">The Quiet Language of Tea</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                She speaks through ritual—the careful warming of the cup before pouring, the precise temperature of water for each variety of leaf. When she hands you tea, it's communication: the blend chosen specifically for you, the moment, the weather outside.
              </p>
              <a href="#" className="text-sage hover:underline">Read more</a>
            </div>

            <div className="bg-pale-lavender bg-opacity-30 p-8 rounded-sm hover-grow">
              <div className="text-gray-400 text-sm mb-2">November 30, 2022</div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">What Her Bookshelf Reveals</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Her books tell stories beyond their pages—dog-eared corners mark not just favorite passages but moments of revelation. Pressed flowers serve as bookmarks, each chosen to match the mood of the text. Poetry lives beside science, philosophy beside gardening guides.
              </p>
              <a href="#" className="text-sage hover:underline">Read more</a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="inline-block px-8 py-3 border border-sage text-sage hover:bg-sage hover:text-white transition-colors duration-300 rounded-sm tracking-wider">VIEW ALL REFLECTIONS</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-pale-lavender bg-opacity-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light text-gray-800 mb-3">Contact</h2>
            <div className="h-px w-16 bg-sage mx-auto"></div>
          </div>

          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-sage"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-sage"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-sage"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-sage text-white hover:bg-sage hover:bg-opacity-90 transition-colors duration-300 rounded-sm tracking-wider"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-pearl-white text-center text-gray-600 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} A Quiet Bloom. All rights reserved.
        </div>
      </footer>
    </div>
