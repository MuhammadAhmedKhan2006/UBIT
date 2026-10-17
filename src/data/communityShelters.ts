export type Amenity = 'women' | 'medical' | 'water' | 'food' | 'power' | 'accessible' | 'pets'
export type HostType = 'mosque' | 'school' | 'home' | 'hall' | 'madrassa'

export interface CommunityShelter {
  id: string
  name: string
  nameUrdu: string
  host: string
  hostUrdu: string
  type: HostType
  area: string
  areaUrdu: string
  capacity: number
  free: number
  distanceKm: number
  amenities: Amenity[]
  verified: boolean
  phone: string
  updated: string
  updatedUrdu: string
  note: string
  noteUrdu: string
}

export const INITIAL_COMMUNITY_SHELTERS: CommunityShelter[] = [
  { id: 'cs-1', name: 'Masjid-e-Bilal Hall', nameUrdu: 'مسجدِ بلال ہال', host: 'Imam Abdul Rehman', hostUrdu: 'امام عبدالرحمن', type: 'mosque', area: 'Lyari Sector 4', areaUrdu: 'لیاری سیکٹر ۴', capacity: 120, free: 46, distanceKm: 0.8, amenities: ['water', 'food', 'women', 'accessible'], verified: true, phone: '+92 300 2201144', updated: '10 min ago', updatedUrdu: '۱۰ منٹ پہلے', note: 'Separate women section on first floor. Ground-floor ramp.', noteUrdu: 'پہلی منزل پر خواتین کا الگ حصہ۔ گراؤنڈ فلور پر ریمپ۔' },
  { id: 'cs-2', name: 'Govt Girls School Malir', nameUrdu: 'گورنمنٹ گرلز اسکول ملیر', host: 'Principal Nasreen Akhtar', hostUrdu: 'پرنسپل نسرین اختر', type: 'school', area: 'Malir Colony', areaUrdu: 'ملیر کالونی', capacity: 200, free: 112, distanceKm: 2.4, amenities: ['water', 'power', 'medical', 'women'], verified: true, phone: '+92 321 7788120', updated: '25 min ago', updatedUrdu: '۲۵ منٹ پہلے', note: 'Solar backup and a lady health visitor on site.', noteUrdu: 'سولر بیک اپ اور لیڈی ہیلتھ وزیٹر موجود۔' },
  { id: 'cs-3', name: 'Rafiq Family Courtyard', nameUrdu: 'رفیق خاندان کا صحن', host: 'Rafiq Ahmed', hostUrdu: 'رفیق احمد', type: 'home', area: 'Korangi Sector 31', areaUrdu: 'کورنگی سیکٹر ۳۱', capacity: 14, free: 6, distanceKm: 3.1, amenities: ['water', 'food', 'pets'], verified: false, phone: '+92 333 4410982', updated: '1 h ago', updatedUrdu: '۱ گھنٹہ پہلے', note: 'Upper floor dry. Can host two families with small children.', noteUrdu: 'بالائی منزل خشک۔ چھوٹے بچوں والے دو خاندان ٹھہر سکتے ہیں۔' },
  { id: 'cs-4', name: 'Al-Khidmat Community Hall', nameUrdu: 'الخدمت کمیونٹی ہال', host: 'Al-Khidmat volunteers', hostUrdu: 'الخدمت رضاکار', type: 'hall', area: 'Keamari', areaUrdu: 'کیماڑی', capacity: 160, free: 0, distanceKm: 4.6, amenities: ['water', 'food', 'medical', 'power', 'accessible'], verified: true, phone: '+92 345 9087761', updated: '5 min ago', updatedUrdu: '۵ منٹ پہلے', note: 'Full at the moment. Waiting list open.', noteUrdu: 'اس وقت بھر چکا ہے۔ انتظار کی فہرست کھلی ہے۔' },
  { id: 'cs-5', name: 'Jamia Noor-ul-Huda', nameUrdu: 'جامعہ نور الہدیٰ', host: 'Maulana Yusuf', hostUrdu: 'مولانا یوسف', type: 'madrassa', area: 'Gulshan-e-Iqbal Block 13', areaUrdu: 'گلشنِ اقبال بلاک ۱۳', capacity: 90, free: 38, distanceKm: 5.2, amenities: ['water', 'food', 'power'], verified: true, phone: '+92 302 5543012', updated: '40 min ago', updatedUrdu: '۴۰ منٹ پہلے', note: 'Men and boys only. Women can be sent to the nearby school.', noteUrdu: 'صرف مرد اور لڑکے۔ خواتین کو قریبی اسکول بھیجا جا سکتا ہے۔' },
  { id: 'cs-6', name: 'Bhittai Welfare Trust Centre', nameUrdu: 'بھٹائی ویلفیئر ٹرسٹ سینٹر', host: 'Shazia Memon', hostUrdu: 'شازیہ میمن', type: 'hall', area: 'Gulshan-e-Hadeed', areaUrdu: 'گلشنِ حدید', capacity: 70, free: 29, distanceKm: 7.9, amenities: ['women', 'medical', 'water', 'accessible'], verified: true, phone: '+92 311 6620045', updated: '2 h ago', updatedUrdu: '۲ گھنٹے پہلے', note: 'Midwife on call. Priority for pregnant women and infants.', noteUrdu: 'دائی کال پر موجود۔ حاملہ خواتین اور شیر خوار بچوں کو ترجیح۔' },
  { id: 'cs-7', name: 'Saleem Bhai Rooftop Room', nameUrdu: 'سلیم بھائی کا چھت والا کمرہ', host: 'Saleem Qureshi', hostUrdu: 'سلیم قریشی', type: 'home', area: 'Lyari Sector 5', areaUrdu: 'لیاری سیکٹر ۵', capacity: 8, free: 3, distanceKm: 1.3, amenities: ['water', 'pets'], verified: false, phone: '+92 336 1209984', updated: '15 min ago', updatedUrdu: '۱۵ منٹ پہلے', note: 'Rooftop room with tarpaulin. Boat access from Gul Muhammad Lane.', noteUrdu: 'ترپال والا چھت کا کمرہ۔ گل محمد لین سے کشتی کا راستہ۔' },
]

export const AMENITY_ICONS: Record<Amenity, { icon: string; en: string; ur: string }> = {
  women: { icon: 'woman', en: 'Women-friendly', ur: 'خواتین کے لیے موزوں' },
  medical: { icon: 'medical_services', en: 'Medical aid', ur: 'طبی امداد' },
  water: { icon: 'water_drop', en: 'Clean water', ur: 'صاف پانی' },
  food: { icon: 'restaurant', en: 'Food', ur: 'کھانا' },
  power: { icon: 'bolt', en: 'Power', ur: 'بجلی' },
  accessible: { icon: 'accessible', en: 'Step-free access', ur: 'بغیر سیڑھی رسائی' },
  pets: { icon: 'pets', en: 'Livestock / pets', ur: 'مویشی / پالتو جانور' },
}

export const HOST_TYPES: Record<HostType, { icon: string; en: string; ur: string }> = {
  mosque: { icon: 'mosque', en: 'Mosque', ur: 'مسجد' },
  school: { icon: 'school', en: 'School', ur: 'اسکول' },
  home: { icon: 'home', en: 'Household', ur: 'گھر' },
  hall: { icon: 'groups', en: 'Community hall', ur: 'کمیونٹی ہال' },
  madrassa: { icon: 'menu_book', en: 'Madrassa', ur: 'مدرسہ' },
}
