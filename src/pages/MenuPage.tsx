import { User, Bell, FileText, LogOut, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useState } from 'react';
import ProfileSettingsPage from './ProfileSettingsPage';
import TipsaPage from './TipsaPage';
import GdprPrivacyPage from './GdprPrivacyPage';

interface MenuPageProps {
  onBackToStart?: () => void;
}

export default function MenuPage({ onBackToStart }: MenuPageProps) {
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const [showTipsa, setShowTipsa] = useState(false);
  const [showGdpr, setShowGdpr] = useState(false);

  const menuItems = [
    { id: 'profile', icon: User, label: 'Profile Settings', description: 'Manage your account' },
    { id: 'tipsa', icon: Bell, label: 'Tipsa the news', description: 'Help to spread the news' },
    { id: 'gdpr', icon: FileText, label: 'GDPR & Privacy', description: 'Data protection info' },
    { id: 'logout', icon: LogOut, label: 'Logout', description: 'Sign out of your account' },
  ];

  const handleMenuClick = (itemId: string) => {
    if (itemId === 'profile') {
      setShowProfileSettings(true);
    } else if (itemId === 'tipsa') {
      setShowTipsa(true);
    } else if (itemId === 'gdpr') {
      setShowGdpr(true);
    }
    // logout does nothing for now
  };

  if (showProfileSettings) {
    return <ProfileSettingsPage onBack={() => setShowProfileSettings(false)} />;
  }

  if (showTipsa) {
    return <TipsaPage onBack={() => setShowTipsa(false)} />;
  }

  if (showGdpr) {
    return <GdprPrivacyPage onBack={() => setShowGdpr(false)} />;
  }

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
                  onClick={() => handleMenuClick(item.id)}
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
            Quality news for everyone
          </p>
          <p className="text-xs text-muted-foreground">
            Schibsted Media | Made by Gothefors
          </p>
          <p className="text-xs text-muted-foreground">
            v1.0.0
          </p>
        </div>
      </div>
    </div>
  );
}