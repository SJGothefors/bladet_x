import { useState, useEffect } from 'react';
import { ArrowLeft, X, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { fetchUserProfile, updateUserProfile, UserProfile } from '../data/mockUserData';

interface ProfileSettingsPageProps {
  onBack?: () => void;
}

export default function ProfileSettingsPage({ onBack }: ProfileSettingsPageProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<UserProfile | null>(null);
  const [newTag, setNewTag] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const data = await fetchUserProfile();
    setProfile(data);
    setEditedProfile(data);
  };

  const handleSave = async () => {
    if (!editedProfile) return;

    try {
      const updated = await updateUserProfile(editedProfile);
      setProfile(updated);
      setIsEditing(false);
      toast({
        title: 'Profile updated',
        description: 'Your profile has been successfully updated.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update profile. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
    setNewTag('');
  };

  const addTag = () => {
    if (!editedProfile || !newTag.trim()) return;
    
    const trimmedTag = newTag.trim();
    if (editedProfile.preferences.includes(trimmedTag)) {
      toast({
        title: 'Tag already exists',
        description: 'This preference is already in your list.',
        variant: 'destructive',
      });
      return;
    }

    setEditedProfile({
      ...editedProfile,
      preferences: [...editedProfile.preferences, trimmedTag]
    });
    setNewTag('');
  };

  const removeTag = (tagToRemove: string) => {
    if (!editedProfile) return;
    setEditedProfile({
      ...editedProfile,
      preferences: editedProfile.preferences.filter(tag => tag !== tagToRemove)
    });
  };

  if (!profile || !editedProfile) {
    return (
      <div className="min-h-screen bg-background p-6 pb-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          {onBack && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
          )}
          <div className="flex-1" />
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          )}
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gradient">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your account information</p>
        </div>

        {/* Profile Information */}
        <Card className="p-6 mb-6">
          <div className="space-y-6">
            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              {isEditing ? (
                <Input
                  id="username"
                  value={editedProfile.username}
                  onChange={(e) => setEditedProfile({ ...editedProfile, username: e.target.value })}
                />
              ) : (
                <p className="text-foreground font-medium">{profile.username}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              {isEditing ? (
                <Input
                  id="email"
                  type="email"
                  value={editedProfile.email}
                  onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                />
              ) : (
                <p className="text-foreground font-medium">{profile.email}</p>
              )}
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              {isEditing ? (
                <Input
                  id="location"
                  value={editedProfile.location}
                  onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                />
              ) : (
                <p className="text-foreground font-medium">{profile.location}</p>
              )}
            </div>

            {/* Preferences */}
            <div className="space-y-2">
              <Label>Preferences</Label>
              <div className="flex flex-wrap gap-2">
                {(isEditing ? editedProfile : profile).preferences.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                    {isEditing && (
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 hover:text-destructive"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </Badge>
                ))}
              </div>

              {isEditing && (
                <div className="flex gap-2 mt-4">
                  <Input
                    placeholder="Add new preference"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                  />
                  <Button onClick={addTag} size="icon">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
