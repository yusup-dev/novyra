import { useEffect, useState } from 'react';
import { ShoppingBag, Instagram, Music, MessageCircle } from 'lucide-react';

const LOGO_URL =
  'https://customer-assets.emergentagent.com/job_2a0086c3-0da1-42d6-a975-0649c0e4d26e/artifacts/m1ls4qe0_Desain%20tanpa%20judul%20%2816%29.png';

const LINKS = [
  {
    id: 'shopee',
    title: 'Belanja di Shopee',
    url: 'https://shopee.co.id/novyra.id',
    icon: ShoppingBag,
    description: 'Lihat koleksi sandal terbaru kami',
  },
  {
    id: 'instagram',
    title: 'Ikuti kami di Instagram',
    url: 'https://www.instagram.com/novyra.id',
    icon: Instagram,
    description: 'Dapatkan inspirasi gaya setiap hari',
  },
  {
    id: 'tiktok',
    title: 'Tonton kami di TikTok',
    url: 'https://www.tiktok.com/@novyra.id',
    icon: Music,
    description: 'Temukan tips dan tren fashion terkini',
  },
  {
    id: 'whatsapp',
    title: 'Chat Admin di WhatsApp',
    url: 'https://wa.me/6285117703173',
    icon: MessageCircle,
    description: 'Dapatkan bantuan dan konsultasi langsung',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/novyra.id',
    icon: Instagram,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@novyra.id',
    icon: Music,
  },
];

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF9F7] via-[#F5F3F0] to-[#E8DDD0] flex flex-col">
      {/* Konten Utama */}
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-16">
        {/* Logo dan Tagline */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-[#C4B5A0] to-[#D4C4B0] rounded-full"></div>
            <img
              src={LOGO_URL}
              alt="Logo Novyra"
              className="relative object-cover w-32 h-32 mx-auto rounded-full drop-shadow-lg"
            />
          </div>

          <h1 className="text-center font-serif text-2xl md:text-3xl text-[#6B4E37] mb-4 tracking-wide">
            Langkahkan Gaya dengan Elegan
          </h1>
          <p className="text-center text-sm text-[#8B7D6B] mb-12 tracking-widest uppercase">
            Bogor, Indonesia
          </p>
        </div>

        {/* Tombol Link */}
        <div className="w-full max-w-md space-y-4">
          {LINKS.map((link, index) => {
            const Icon = link.icon;
            return (
              <div
                key={link.id}
                className={`transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <button
                  onClick={() => handleLinkClick(link.url)}
                  className="w-full group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-[#D4C4B0] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-[#C4B5A0]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C4B5A0]/0 via-[#C4B5A0]/5 to-[#C4B5A0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C4B5A0] to-[#D4C4B0] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium text-[#2C2C2C] text-base md:text-lg group-hover:text-[#6B4E37] transition-colors duration-300">
                          {link.title}
                        </h3>
                        <p className="text-xs text-[#8B7D6B] mt-0.5">{link.description}</p>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-[#C4B5A0] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`py-8 px-4 transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6 space-x-6">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <button
                  key={social.name}
                  onClick={() => handleLinkClick(social.url)}
                  className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-[#D4C4B0] flex items-center justify-center text-[#6B4E37] transition-all duration-300 hover:bg-[#C4B5A0] hover:text-white hover:scale-110 hover:shadow-lg"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>

          <p className="text-center text-sm text-[#8B7D6B] tracking-wide">
            © 2025 Novyra. Hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
};
