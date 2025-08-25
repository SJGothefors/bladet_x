import { User, Heart, Settings, FileText, LogOut, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

interface MenuPageProps {
  onBackToStart?: () => void;
}

export default function MenuPage({ onBackToStart }: MenuPageProps) {
  const menuItems = [
    { icon: User, label: 'Profile Settings', description: 'Manage your account' },
    { icon: Heart, label: 'Leave a Tip', description: 'Support quality journalism' },
    { icon: Settings, label: 'More Categories', description: 'Discover new topics' },
    { icon: FileText, label: 'GDPR & Privacy', description: 'Data protection info' },
    { icon: LogOut, label: 'Logout', description: 'Sign out of your account' },
  ];

  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-md mx-auto">
        {/* Back Button */}
        {onBackToStart && (
          <div className="mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBackToStart}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Start</span>
            </Button>
          </div>
        )}
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gradient">Menu</h1>
          <p className="text-muted-foreground">Manage your news experience</p>
        </div>

        <div className="space-y-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.label} className="p-0 overflow-hidden hover-lift">
                <Button
                  variant="ghost"
                  className="w-full justify-start p-6 h-auto"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            Bladet X v1.0.0 • Made with ❤️ for quality news
          </p>
        </div>
      </div>
    </div>
  );
}