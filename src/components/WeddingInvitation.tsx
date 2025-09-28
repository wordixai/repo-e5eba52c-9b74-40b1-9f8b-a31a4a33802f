import { Heart, Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const WeddingInvitation = () => {
  const weddingDate = new Date('2024-06-15T16:00:00');
  const now = new Date();
  const timeLeft = weddingDate.getTime() - now.getTime();
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  const handleRSVP = () => {
    window.open('tel:+1234567890', '_self');
  };

  const handleLocation = () => {
    window.open('https://maps.google.com/search/婚礼会场', '_blank');
  };

  return (
    <div className="min-h-screen wedding-gradient relative overflow-hidden">
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-8 text-pink-300 w-4 h-4 floating opacity-60" style={{ animationDelay: '0s' }} />
        <Heart className="absolute top-32 right-12 text-rose-300 w-3 h-3 floating opacity-40" style={{ animationDelay: '1s' }} />
        <Heart className="absolute top-64 left-16 text-pink-200 w-5 h-5 floating opacity-50" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-32 right-8 text-rose-200 w-4 h-4 floating opacity-45" style={{ animationDelay: '3s' }} />
        <Heart className="absolute bottom-48 left-12 text-pink-300 w-3 h-3 floating opacity-35" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container max-w-md mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 fade-in-up">
          <div className="mb-4">
            <div className="w-20 h-20 mx-auto bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Heart className="w-10 h-10 text-rose-500 fill-current" />
            </div>
          </div>
          <h1 className="text-sm font-light text-gray-600 mb-2 tracking-wide uppercase">
            诚挚邀请您参加
          </h1>
          <div className="relative">
            <h2 className="text-4xl font-bold rose-gold-text mb-2 elegant-script">
              我们的婚礼
            </h2>
            <div className="absolute -top-2 -right-2 w-6 h-6 sparkle">
              <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-pink-300 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Couple Names */}
        <Card className="mb-6 p-6 bg-white/40 backdrop-blur-md border-white/30 fade-in-up-delay-1">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">张明</h3>
                <p className="text-sm text-gray-600">新郎</p>
              </div>
              <Heart className="text-rose-400 w-6 h-6 fill-current mx-4" />
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">李雪</h3>
                <p className="text-sm text-gray-600">新娘</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">
              "两颗心的相遇，一生的约定"
            </p>
          </div>
        </Card>

        {/* Wedding Details */}
        <Card className="mb-6 p-6 bg-white/40 backdrop-blur-md border-white/30 fade-in-up-delay-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">2024年6月15日</p>
                <p className="text-sm text-gray-600">星期六</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">下午 4:00</p>
                <p className="text-sm text-gray-600">婚礼仪式开始</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">花园酒店</p>
                <p className="text-sm text-gray-600">北京市朝阳区建国路88号</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Countdown */}
        <Card className="mb-6 p-6 bg-white/40 backdrop-blur-md border-white/30 fade-in-up-delay-3">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">距离婚礼还有</h3>
            <div className="flex justify-center items-center space-x-2">
              <div className="bg-gradient-to-br from-rose-400 to-pink-500 text-white px-4 py-3 rounded-lg">
                <div className="text-2xl font-bold">{Math.max(0, daysLeft)}</div>
                <div className="text-xs">天</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3 fade-in-up-delay-3">
          <Button 
            onClick={handleRSVP}
            className="w-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            <Heart className="w-4 h-4 mr-2 fill-current" />
            确认出席
          </Button>
          
          <Button 
            onClick={handleLocation}
            variant="outline"
            className="w-full border-2 border-rose-300 text-rose-600 hover:bg-rose-50 font-semibold py-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            <MapPin className="w-4 h-4 mr-2" />
            查看地址
          </Button>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-8 fade-in-up-delay-3">
          <p className="text-gray-600 text-sm leading-relaxed">
            感谢您在我们人生中最重要的时刻<br />
            与我们一同分享这份喜悦
          </p>
          <div className="mt-4 flex justify-center space-x-1">
            <Heart className="w-3 h-3 text-rose-400 fill-current" />
            <Heart className="w-3 h-3 text-pink-400 fill-current" />
            <Heart className="w-3 h-3 text-rose-400 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;