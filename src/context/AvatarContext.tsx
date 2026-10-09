import React, { createContext, useContext, useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export interface PhotoPreset {
  id: string;
  nameAr: string;
  nameEn: string;
  url: string;
  descAr: string;
  descEn: string;
}

export const PHOTO_PRESETS: PhotoPreset[] = [
  {
    id: 'cv-tech-identity',
    nameAr: 'الهوية التقنية الكاملة (Full Stack Neon)',
    nameEn: 'Full Stack Tech Identity (Neon Halo)',
    url: '/src/assets/images/eng_nashwan_identical_face_1791587664261.jpg',
    descAr: 'الصورة الرسمية المعتمدة في السيرة الذاتية مع حلقة النيون والتقنيات البرمجية',
    descEn: 'Official CV portrait with neon ring and tech stack branding'
  },
  {
    id: 'executive-studio',
    nameAr: 'بورتريه استوديو الأعمال (Office Studio)',
    nameEn: 'Executive Office Studio Portrait',
    url: '/src/assets/images/eng_nashwan_portrait_exact_1791586805512.jpg',
    descAr: 'بورتريه رسمي للمهندس نشوان حاتم داخل بيئة عمل برمجية أنيقة',
    descEn: 'Professional developer portrait in a sleek software workspace'
  },
  {
    id: 'modern-workspace',
    nameAr: 'بيئة العمل المعاصرة (Modern Workspace)',
    nameEn: 'Modern Workspace Portrait',
    url: '/src/assets/images/eng_nashwan_real_portrait_1791582423957.jpg',
    descAr: 'لقطة معاصرة بإضاءة استوديو ناعمة',
    descEn: 'Contemporary developer studio snapshot'
  }
];

interface AvatarContextType {
  avatar: string;
  setAvatar: (newUrl: string) => void;
  resetAvatar: () => void;
  isCustom: boolean;
  isPhotoModalOpen: boolean;
  openPhotoModal: () => void;
  closePhotoModal: () => void;
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

const STORAGE_KEY = 'custom_developer_photo';

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defaultAvatar = PORTFOLIO_DATA.profile.avatarImage;

  const [avatar, setAvatarState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved.startsWith('data:image') || saved.startsWith('http') || saved.startsWith('/src/assets/images'))) {
        return saved;
      }
    } catch {
      // ignore
    }
    return defaultAvatar;
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return Boolean(saved && saved !== defaultAvatar);
    } catch {
      return false;
    }
  });

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  // Sync if portfolioData default changes and no custom user image set
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setAvatarState(defaultAvatar);
      }
    } catch {
      // ignore
    }
  }, [defaultAvatar]);

  const setAvatar = (newUrl: string) => {
    setAvatarState(newUrl);
    setIsCustom(newUrl !== defaultAvatar);
    try {
      localStorage.setItem(STORAGE_KEY, newUrl);
    } catch (e) {
      console.warn('Could not persist avatar to localStorage:', e);
    }
  };

  const resetAvatar = () => {
    setAvatarState(defaultAvatar);
    setIsCustom(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const openPhotoModal = () => setIsPhotoModalOpen(true);
  const closePhotoModal = () => setIsPhotoModalOpen(false);

  return (
    <AvatarContext.Provider
      value={{
        avatar,
        setAvatar,
        resetAvatar,
        isCustom,
        isPhotoModalOpen,
        openPhotoModal,
        closePhotoModal
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = (): AvatarContextType => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error('useAvatar must be used within an AvatarProvider');
  }
  return context;
};
