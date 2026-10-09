import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAvatar, PHOTO_PRESETS } from '../context/AvatarContext';
import { X, Upload, Link as LinkIcon, RefreshCw, Check, Image as ImageIcon, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export const PhotoModal: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const { avatar, setAvatar, resetAvatar, isCustom, isPhotoModalOpen, closePhotoModal } = useAvatar();

  const [previewUrl, setPreviewUrl] = useState<string>(avatar);
  const [urlInput, setUrlInput] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'presets'>('upload');
  const [isDragging, setIsDragging] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync preview when modal opens
  React.useEffect(() => {
    if (isPhotoModalOpen) {
      setPreviewUrl(avatar);
      setErrorMsg(null);
      setNotification(null);
    }
  }, [isPhotoModalOpen, avatar]);

  if (!isPhotoModalOpen) return null;

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg(isRTL ? 'يرجى اختيار ملف صورة صالح (PNG, JPG, WEBP)' : 'Please select a valid image file (PNG, JPG, WEBP)');
      return;
    }

    // Limit to 5MB
    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg(isRTL ? 'حجم الصورة كبير جداً (الحد الأقصى 5 ميجابايت)' : 'Image is too large (maximum 5MB)');
      return;
    }

    setErrorMsg(null);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPreviewUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileChange(file);
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) {
      setErrorMsg(isRTL ? 'يرجى كتابة رابط صورة صحيح' : 'Please provide a valid image URL');
      return;
    }
    setErrorMsg(null);
    setPreviewUrl(urlInput.trim());
  };

  const handleSave = () => {
    setAvatar(previewUrl);
    showToast(isRTL ? 'تم حفظ وتحديث الصورة الشخصية بنجاح عبر كامل الموقع!' : 'Profile photo successfully updated across the website!');
    setTimeout(() => {
      closePhotoModal();
    }, 700);
  };

  const handleResetToDefault = () => {
    resetAvatar();
    setPreviewUrl(PHOTO_PRESETS[0].url);
    showToast(isRTL ? 'تمت استعادة الصورة الرسمية الافتراضية بنجاح!' : 'Reset to official default photo successfully!');
    setTimeout(() => {
      closePhotoModal();
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={closePhotoModal}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 id="photo-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
                {isRTL ? 'استبدال وتخصيص الصورة الشخصية' : 'Change & Customize Profile Photo'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isRTL ? 'اختر صورة من جهازك، أو رابط مباشر، أو من الصور الرسمية المعتمدة' : 'Upload from device, paste a direct URL, or select an official preset'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closePhotoModal}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Notification / Error alert */}
          {notification && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{notification}</span>
            </div>
          )}

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Live Preview & Comparison */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-sky-500 shadow-md bg-slate-950 shrink-0">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={() => {
                  setErrorMsg(isRTL ? 'فشل تحميل الصورة من الرابط، يرجى التحقق من الرابط' : 'Failed to load image from URL. Please check the address.');
                }}
              />
              <div className="absolute top-1 right-1 bg-sky-600 text-white text-3xs font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                {isRTL ? 'معاينة' : 'Preview'}
              </div>
            </div>

            <div className="space-y-1.5 text-center sm:text-start flex-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                {isRTL ? 'المعاينة الحية الفورية' : 'Live Interactive Preview'}
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {isRTL ? 'كيف ستظهر صورتك في الموقع والـ CV' : 'How your photo will appear across site & CV'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {isRTL
                  ? 'يتم تحديث الصورة فوراً في الصفحة الرئيسية وقسم Hero وترويسة السيرة الذاتية التفاعلية مع حفظ التفضيل محلياً في المتصفح.'
                  : 'Your chosen image will instantly appear in the Hero section and Resume modal, automatically saved to your browser.'}
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex rounded-xl bg-slate-100 dark:bg-slate-950 p-1 border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab('upload')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'upload'
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{isRTL ? 'رفع من الجهاز' : 'Upload from Device'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('url')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'url'
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LinkIcon className="w-3.5 h-3.5" />
              <span>{isRTL ? 'رابط مباشر (URL)' : 'Paste Image URL'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('presets')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'presets'
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isRTL ? 'الصور الرسمية الجاهزة' : 'Official Presets'}</span>
            </button>
          </div>

          {/* Tab 1: Upload from Device */}
          {activeTab === 'upload' && (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                isDragging
                  ? 'border-sky-500 bg-sky-500/10'
                  : 'border-slate-300 dark:border-slate-700 hover:border-sky-500/60 dark:hover:border-sky-500/60 bg-slate-50/50 dark:bg-slate-950/40'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFileChange(f);
                }}
              />
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {isRTL ? 'اسحب وأفلت صورتك هنا، أو انقر للاختيار' : 'Drag and drop your photo here, or browse files'}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {isRTL ? 'يدعم PNG, JPG, WEBP حتى 5 ميجابايت' : 'Supports PNG, JPG, WEBP up to 5MB'}
              </p>
            </div>
          )}

          {/* Tab 2: URL Input */}
          {activeTab === 'url' && (
            <div className="space-y-3">
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                {isRTL ? 'أدخل رابط الصورة المباشر من الإنترنت:' : 'Enter Direct Image Link:'}
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://example.com/my-photo.jpg"
                  className="flex-1 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  {isRTL ? 'معاينة الرابط' : 'Load URL'}
                </button>
              </div>
              <p className="text-2xs text-slate-500 dark:text-slate-400">
                {isRTL ? 'تأكد من أن الرابط ينتهي بصيغة صورة أو رابط عام متاح.' : 'Ensure the link is publicly accessible.'}
              </p>
            </div>
          )}

          {/* Tab 3: Official Presets */}
          {activeTab === 'presets' && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PHOTO_PRESETS.map((preset) => {
                  const isSelected = previewUrl === preset.url;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => {
                        setPreviewUrl(preset.url);
                        setErrorMsg(null);
                      }}
                      className={`p-2.5 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-sky-500 bg-sky-500/10 ring-2 ring-sky-500/20'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-950/50'
                      }`}
                    >
                      <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-slate-900 mb-2 border border-slate-700">
                        <img
                          src={preset.url}
                          alt={isRTL ? preset.nameAr : preset.nameEn}
                          className="w-full h-full object-cover"
                        />
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-sky-600 text-white shadow-xs">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                          {isRTL ? preset.nameAr : preset.nameEn}
                        </div>
                        <p className="text-2xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
                          {isRTL ? preset.descAr : preset.descEn}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {isCustom && (
              <button
                type="button"
                onClick={handleResetToDefault}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{isRTL ? 'استعادة الصورة الرسمية' : 'Reset to Official'}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={closePhotoModal}
              className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isRTL ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors shadow-xs cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>{isRTL ? 'حفظ وتطبيق الصورة' : 'Save & Apply'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
