export interface UserProfile {
  id: string;
  username: string;
  email: string;
  location: string;
  preferences: string[];
}

export const mockUserProfile: UserProfile = {
  id: 'user-001',
  username: 'Johan Andersson',
  email: 'johan.andersson@example.com',
  location: 'Stockholm',
  preferences: ['hockey', 'HV71', 'F1', 'Ferrari', 'Stockholm', 'Uppsala', 'Tech', 'Sports', 'Politics']
};

// Simulate API call
export const fetchUserProfile = async (): Promise<UserProfile> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUserProfile);
    }, 500);
  });
};

export const updateUserProfile = async (profile: UserProfile): Promise<UserProfile> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(profile);
    }, 500);
  });
};
