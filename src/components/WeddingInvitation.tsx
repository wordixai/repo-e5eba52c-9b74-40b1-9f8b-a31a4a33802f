import { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WeddingInvitation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const weddingDate = new Date('2024-06-15T16:00:00');
  const now = new Date();
  const timeLeft = weddingDate.getTime() - now.getTime();
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  const slides = [
    {
      type: 'welcome',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop',
      content: (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-rose-400 fill-current mx-auto mb-4" />
            <h1 className="text-sm font-light mb-2 tracking-wide uppercase opacity-90">
              诚挚邀请您参加
            </h1>
            <h2 className="text-4xl font-bold mb-4 elegant-script">
              我们的婚礼
            </h2>
            <p className="text-lg opacity-90">张明 & 李雪</p>
          </div>
        </div>
      )
    },
    {
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=600&fit=crop',
      content: (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">初次相遇</h3>
            <p className="text-sm opacity-90">那一刻，时间停止了</p>
          </div>
        </div>
      )
    },
    {
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=600&fit=crop',
      content: (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">甜蜜时光</h3>
            <p className="text-sm opacity-90">每一天都是最美好的回忆</p>
          </div>
        </div>
      )
    },
    {
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=600&fit=crop',
      content: (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">求婚时刻</h3>
            <p className="text-sm opacity-90">你愿意嫁给我吗？</p>
          </div>
        </div>
      )
    },
    {
      type: 'details',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=600&fit=crop',
      content: (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-center p-6 text-white">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-center mb-6">婚礼详情</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">2024年6月15日</p>
                  <p className="text-sm opacity-90">星期六</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">下午 4:00</p>
                  <p className="text-sm opacity-90">婚礼仪式开始</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">花园酒店</p>
                  <p className="text-sm opacity-90">北京市朝阳区建国路88号</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      type: 'countdown',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=600&fit=crop',
      content: (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-center p-6 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">距离婚礼还有</h3>
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="text-6xl font-bold text-rose-300 mb-2">
                {Math.max(0, daysLeft)}
              </div>
              <div className="text-xl">天</div>
            </div>
            <p className="mt-6 text-lg opacity-90">期待与您共同见证这美好时刻</p>
          </div>
        </div>
      )
    },
    {
      type: 'rsvp',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=600&fit=crop',
      content: (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-center p-6 text-white">
          <div className="text-center">
            <Heart className="w-16 h-16 text-rose-400 fill-current mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-6">诚邀您的到来</h3>
            
            <div className="space-y-4">
              <Button 
                onClick={() => window.open('tel:+1234567890', '_self')}
                className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 font-semibold py-4 rounded-xl text-lg"
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                确认出席
              </Button>
              
              <Button 
                onClick={() => window.open('https://maps.google.com/search/婚礼会场', '_blank')}
                className="w-full bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-semibold py-4 rounded-xl text-lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                查看地址
              </Button>
            </div>

            <div className="mt-8">
              <p className="text-sm opacity-90 leading-relaxed">
                感谢您在我们人生中最重要的时刻<br />
                与我们一同分享这份喜悦
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <Heart className="w-4 h-4 text-rose-400 fill-current" />
                <Heart className="w-4 h-4 text-pink-400 fill-current" />
                <Heart className="w-4 h-4 text-rose-400 fill-current" />
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Main slide container */}
      <div 
        className="h-full w-full relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ 
            backgroundImage: `url(${slides[currentSlide].image})`,
            transform: 'scale(1.05)'
          }}
        />
        
        {/* Content overlay */}
        {slides[currentSlide].content}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
        disabled={currentSlide === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
        disabled={currentSlide === slides.length - 1}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-md rounded-full px-3 py-1 text-white text-sm z-10">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Swipe hint (only on first slide) */}
      {currentSlide === 0 && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center animate-pulse z-10">
          <p>← 滑动查看更多 →</p>
        </div>
      )}
    </div>
  );
};

export default WeddingInvitation;