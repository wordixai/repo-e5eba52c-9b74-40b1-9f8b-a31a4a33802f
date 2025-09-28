import { useState, useEffect, useRef } from 'react';
import { Heart, Calendar, MapPin, Clock, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WeddingInvitation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const weddingDate = new Date('2024-06-15T16:00:00');
  const now = new Date();
  const timeLeft = weddingDate.getTime() - now.getTime();
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  const slides = [
    {
      type: 'welcome',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=800&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=800&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=800&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=800&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=800&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=800&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=800&fit=crop',
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
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentY = e.touches[0].clientY;
    const deltaY = touchStartY - currentY;
    
    // 只允许向上滑动到下一张，或向下滑动到上一张
    if (deltaY > 0 && currentSlide < slides.length - 1) {
      // 向上滑动到下一张
      setDragOffset(Math.min(deltaY, window.innerHeight));
    } else if (deltaY < 0 && currentSlide > 0) {
      // 向下滑动到上一张
      setDragOffset(Math.max(deltaY, -window.innerHeight));
    } else {
      // 边界处理，添加一些阻尼效果
      setDragOffset(deltaY * 0.3);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const threshold = window.innerHeight * 0.5; // 50% 阈值
    
    if (dragOffset > threshold && currentSlide < slides.length - 1) {
      // 向上滑动超过一半，切换到下一张
      nextSlide();
    } else if (dragOffset < -threshold && currentSlide > 0) {
      // 向下滑动超过一半，切换到上一张
      prevSlide();
    }
    
    // 重置状态
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStartY(e.clientY);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentY = e.clientY;
    const deltaY = touchStartY - currentY;
    
    if (deltaY > 0 && currentSlide < slides.length - 1) {
      setDragOffset(Math.min(deltaY, window.innerHeight));
    } else if (deltaY < 0 && currentSlide > 0) {
      setDragOffset(Math.max(deltaY, -window.innerHeight));
    } else {
      setDragOffset(deltaY * 0.3);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const threshold = window.innerHeight * 0.5;
    
    if (dragOffset > threshold && currentSlide < slides.length - 1) {
      nextSlide();
    } else if (dragOffset < -threshold && currentSlide > 0) {
      prevSlide();
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') nextSlide();
      if (e.key === 'ArrowDown') prevSlide();
    };

    const handleMouseMoveGlobal = (e: MouseEvent) => {
      if (isDragging) {
        handleMouseMove(e as any);
      }
    };

    const handleMouseUpGlobal = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMoveGlobal);
    window.addEventListener('mouseup', handleMouseUpGlobal);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMoveGlobal);
      window.removeEventListener('mouseup', handleMouseUpGlobal);
    };
  }, [isDragging, touchStartY, currentSlide]);

  return (
    <div className="h-screen w-screen overflow-hidden relative" ref={containerRef}>
      {/* Slides container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => {
          let translateY = 0;
          let opacity = 1;
          let scale = 1;

          if (index === currentSlide) {
            // 当前卡片
            translateY = -dragOffset;
          } else if (index === currentSlide + 1) {
            // 下一张卡片
            translateY = window.innerHeight - dragOffset;
            opacity = dragOffset > 0 ? 1 : 0;
          } else if (index === currentSlide - 1) {
            // 上一张卡片
            translateY = -window.innerHeight - dragOffset;
            opacity = dragOffset < 0 ? 1 : 0;
          } else if (index > currentSlide) {
            // 后面的卡片
            translateY = window.innerHeight;
            opacity = 0;
          } else {
            // 前面的卡片
            translateY = -window.innerHeight;
            opacity = 0;
          }

          // 添加缩放效果
          if (Math.abs(dragOffset) > 0) {
            scale = 1 - Math.abs(dragOffset) / window.innerHeight * 0.1;
          }

          return (
            <div
              key={index}
              className="absolute inset-0 h-full w-full"
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity,
                transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
                zIndex: index === currentSlide ? 10 : index === currentSlide + 1 || index === currentSlide - 1 ? 5 : 1
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                }}
              />
              
              {/* Content overlay */}
              {slide.content}
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-20"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-20"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      )}

      {/* Progress indicators */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white h-8' 
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 left-6 bg-black/30 backdrop-blur-md rounded-full px-3 py-1 text-white text-sm z-20">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Swipe hint (only on first slide) */}
      {currentSlide === 0 && !isDragging && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center animate-bounce z-20">
          <ChevronUp className="w-6 h-6 mx-auto mb-1" />
          <p>向上滑动查看更多</p>
        </div>
      )}
    </div>
  );
};

export default WeddingInvitation;