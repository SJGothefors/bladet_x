import { ArrowLeft, Upload } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface TipsaPageProps {
  onBack: () => void;
}

export default function TipsaPage({ onBack }: TipsaPageProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    story: '',
    location: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async () => {
    if (!formData.story.trim()) {
      toast({
        title: "Error",
        description: "Please write your news story",
        variant: "destructive",
      });
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: "Success",
      description: "Your news tip has been submitted successfully!",
    });

    // Reset form
    setFormData({
      story: '',
      location: '',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
    });
    setSelectedFiles([]);
  };

  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gradient">Tipsa the News</h1>
          <p className="text-muted-foreground">Help us spread important news stories</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Submit Your News Tip</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="story">News Story *</Label>
              <Textarea
                id="story"
                placeholder="Tell us about the news story..."
                value={formData.story}
                onChange={(e) => handleInputChange('story', e.target.value)}
                className="min-h-[150px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Where did this happen?"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="images">Images</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="images"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Label
                  htmlFor="images"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-md cursor-pointer transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">Upload Images</span>
                </Label>
                {selectedFiles.length > 0 && (
                  <span className="text-sm text-muted-foreground">
                    {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''} selected
                  </span>
                )}
              </div>
            </div>

            <div className="border-t pt-6 space-y-4">
              <h3 className="font-semibold">Contact Information</h3>
              
              <div className="space-y-2">
                <Label htmlFor="contactName">Name</Label>
                <Input
                  id="contactName"
                  placeholder="Your name"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPhone">Phone</Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  placeholder="+46 70 123 45 67"
                  value={formData.contactPhone}
                  onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                />
              </div>
            </div>

            <Button onClick={handleSubmit} className="w-full">
              Submit News Tip
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
