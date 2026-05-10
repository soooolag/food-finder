/**
 * Food Finder — Production JS
 * ================================
 * Modules:
 *   1. Data (foods database)
 *   2. Config (emoji, fitness config)
 *   3. Utils (escape, validation)
 *   4. Theme
 *   5. Search & Filtering  ← initInputGuards اینجاست
 *   6. Rendering (cards, skeleton, pie)
 *   7. Compare Feature
 *   8. Meal Planner
 *   9. Tabs
 *   10. Init
 */

/* ===== 1. DATA ===== */
const foods = [
    // ─── پروتئین‌های حیوانی ───
    // مرغ (تصحیح‌شده و گسترش‌یافته)
    { name: 'سینه مرغ (پخته)',        protein: 31,  carbs: 0,    calories: 165, category: 'پروتئین حیوانی' },
    { name: 'ران مرغ (پخته)',          protein: 26,  carbs: 0,    calories: 209, category: 'پروتئین حیوانی' },
    { name: 'بال مرغ',                protein: 27,  carbs: 0,    calories: 203, category: 'پروتئین حیوانی' },
    { name: 'گردن مرغ',               protein: 18,  carbs: 0,    calories: 215, category: 'پروتئین حیوانی' },
    { name: 'سینه مرغ کبابی',         protein: 33,  carbs: 0,    calories: 158, category: 'پروتئین حیوانی' },
    { name: 'مرغ سرخ‌شده',            protein: 24,  carbs: 7,    calories: 260, category: 'پروتئین حیوانی' },
    { name: 'کبد مرغ',                protein: 17,  carbs: 1,    calories: 119, category: 'پروتئین حیوانی' },
    { name: 'کبد گوساله',             protein: 20,  carbs: 4,    calories: 135, category: 'پروتئین حیوانی' },
    { name: 'دل و قلوه مرغ',          protein: 16,  carbs: 0,    calories: 153, category: 'پروتئین حیوانی' },
    // گوشت قرمز (تصحیح‌شده)
    { name: 'گوشت گاو (راسته)',        protein: 27,  carbs: 0,    calories: 217, category: 'پروتئین حیوانی' },
    { name: 'گوشت گاو چرخ‌کرده',      protein: 26,  carbs: 0,    calories: 254, category: 'پروتئین حیوانی' },
    { name: 'گوشت گوساله',            protein: 26,  carbs: 0,    calories: 172, category: 'پروتئین حیوانی' },
    { name: 'گوشت گوسفند',            protein: 25,  carbs: 0,    calories: 294, category: 'پروتئین حیوانی' },
    { name: 'گوشت بره',               protein: 25,  carbs: 0,    calories: 258, category: 'پروتئین حیوانی' },
    { name: 'گوشت شتر',               protein: 22,  carbs: 0,    calories: 145, category: 'پروتئین حیوانی' },
    { name: 'گوشت بوقلمون',           protein: 29,  carbs: 0,    calories: 135, category: 'پروتئین حیوانی' },
    { name: 'گوشت شترمرغ',            protein: 22,  carbs: 0,    calories: 142, category: 'پروتئین حیوانی' },
    { name: 'مغز گاو',                protein: 10,  carbs: 1,    calories: 151, category: 'پروتئین حیوانی' },
    { name: 'زبان گاو',               protein: 16,  carbs: 2,    calories: 224, category: 'پروتئین حیوانی' },
    { name: 'دنبه گوسفند',            protein: 3,   carbs: 0,    calories: 890, category: 'پروتئین حیوانی' },
    // تخم مرغ و فرآوری‌شده (تصحیح‌شده)
    { name: 'تخم مرغ آب‌پز',          protein: 13,  carbs: 1.1,  calories: 155, category: 'پروتئین حیوانی' },
    { name: 'تخم مرغ نیمرو',          protein: 11,  carbs: 0.4,  calories: 185, category: 'پروتئین حیوانی' },
    { name: 'سفیده تخم مرغ',          protein: 10.9,carbs: 0.7,  calories: 52,  category: 'پروتئین حیوانی' },
    { name: 'زرده تخم مرغ',           protein: 15.9,carbs: 3.6,  calories: 322, category: 'پروتئین حیوانی' },
    { name: 'تخم بلدرچین',            protein: 13,  carbs: 0.4,  calories: 158, category: 'پروتئین حیوانی' },
    { name: 'کالباس مرغ',             protein: 12,  carbs: 3,    calories: 150, category: 'پروتئین حیوانی' },
    { name: 'سوسیس مرغ',              protein: 11,  carbs: 5,    calories: 180, category: 'پروتئین حیوانی' },
    { name: 'ژامبون مرغ',             protein: 14,  carbs: 2,    calories: 145, category: 'پروتئین حیوانی' },
    { name: 'کالباس گوشت',            protein: 13,  carbs: 3,    calories: 280, category: 'پروتئین حیوانی' },
    { name: 'سوسیس گوشت',             protein: 10,  carbs: 4,    calories: 295, category: 'پروتئین حیوانی' },
    // ماهی و آبزیان (تصحیح‌شده)
    { name: 'ماهی تن (کنسرو)',         protein: 29,  carbs: 0,    calories: 128, category: 'پروتئین حیوانی' },
    { name: 'ماهی قزل‌آلا',            protein: 20,  carbs: 0,    calories: 208, category: 'پروتئین حیوانی' },
    { name: 'ماهی کپور',              protein: 18,  carbs: 0,    calories: 127, category: 'پروتئین حیوانی' },
    { name: 'ماهی سالمون',            protein: 20,  carbs: 0,    calories: 208, category: 'پروتئین حیوانی' },
    { name: 'ماهی شیر',               protein: 21,  carbs: 0,    calories: 155, category: 'پروتئین حیوانی' },
    { name: 'ماهی هامور',             protein: 19,  carbs: 0,    calories: 92,  category: 'پروتئین حیوانی' },
    { name: 'ماهی شوریده',            protein: 18,  carbs: 0,    calories: 95,  category: 'پروتئین حیوانی' },
    { name: 'ماهی بنی',               protein: 17,  carbs: 0,    calories: 118, category: 'پروتئین حیوانی' },
    { name: 'ماهی سارم',              protein: 22,  carbs: 0,    calories: 130, category: 'پروتئین حیوانی' },
    { name: 'ماهی صبور',              protein: 16,  carbs: 0,    calories: 100, category: 'پروتئین حیوانی' },
    { name: 'ماهی بیاه',              protein: 18,  carbs: 0,    calories: 105, category: 'پروتئین حیوانی' },
    { name: 'میگو',                   protein: 24,  carbs: 0.2,  calories: 99,  category: 'پروتئین حیوانی' },
    { name: 'خرچنگ',                  protein: 19,  carbs: 0,    calories: 87,  category: 'پروتئین حیوانی' },
    { name: 'ماهی مرکب',              protein: 16,  carbs: 2,    calories: 92,  category: 'پروتئین حیوانی' },
    { name: 'اختاپوس',                protein: 15,  carbs: 2.2,  calories: 82,  category: 'پروتئین حیوانی' },
    { name: 'خاویار',                 protein: 25,  carbs: 4,    calories: 264, category: 'پروتئین حیوانی' },

    // ─── لبنیات ───
    { name: 'شیر کم‌چرب (۱.۵٪)',      protein: 3.4, carbs: 5,    calories: 42,  category: 'لبنیات' },
    { name: 'شیر پرچرب (۳.۵٪)',       protein: 3.2, carbs: 4.8,  calories: 61,  category: 'لبنیات' },
    { name: 'شیر بدون‌چربی',           protein: 3.4, carbs: 5,    calories: 34,  category: 'لبنیات' },
    { name: 'شیر سویا',               protein: 3.3, carbs: 4,    calories: 43,  category: 'لبنیات' },
    { name: 'شیر بادام',              protein: 1,   carbs: 3.5,  calories: 30,  category: 'لبنیات' },
    { name: 'ماست کم‌چرب',            protein: 4,   carbs: 6,    calories: 59,  category: 'لبنیات' },
    { name: 'ماست پرچرب',             protein: 3.5, carbs: 4.7,  calories: 97,  category: 'لبنیات' },
    { name: 'ماست یونانی',            protein: 10,  carbs: 3.6,  calories: 97,  category: 'لبنیات' },
    { name: 'ماست چکیده',             protein: 8,   carbs: 5,    calories: 110, category: 'لبنیات' },
    { name: 'پنیر لیقوان',            protein: 18,  carbs: 2,    calories: 264, category: 'لبنیات' },
    { name: 'پنیر موزارلا',           protein: 22,  carbs: 2.2,  calories: 280, category: 'لبنیات' },
    { name: 'پنیر فتا',               protein: 14,  carbs: 4.1,  calories: 264, category: 'لبنیات' },
    { name: 'پنیر سفید ایرانی',       protein: 17,  carbs: 1.5,  calories: 250, category: 'لبنیات' },
    { name: 'پنیر پارمسان',           protein: 35,  carbs: 3.2,  calories: 431, category: 'لبنیات' },
    { name: 'پنیر چدار',              protein: 25,  carbs: 1.3,  calories: 403, category: 'لبنیات' },
    { name: 'پنیر گودا',              protein: 25,  carbs: 2.2,  calories: 356, category: 'لبنیات' },
    { name: 'پنیر ریکوتا',            protein: 11,  carbs: 3,    calories: 174, category: 'لبنیات' },
    { name: 'پنیر کوتاژ',             protein: 11,  carbs: 3.4,  calories: 98,  category: 'لبنیات' },
    { name: 'دوغ',                    protein: 1.2, carbs: 2,    calories: 20,  category: 'لبنیات' },
    { name: 'کشک',                    protein: 8,   carbs: 12,   calories: 110, category: 'لبنیات' },
    { name: 'کره',                    protein: 0.9, carbs: 0.1,  calories: 717, category: 'لبنیات' },
    { name: 'خامه',                   protein: 2.1, carbs: 3,    calories: 345, category: 'لبنیات' },
    { name: 'خامه ترش',               protein: 2.4, carbs: 3.6,  calories: 193, category: 'لبنیات' },
    { name: 'بستنی وانیلی',           protein: 3.5, carbs: 24,   calories: 207, category: 'لبنیات' },
    { name: 'پودر وی پروتئین',        protein: 78,  carbs: 7,    calories: 380, category: 'لبنیات' },
    { name: 'کازئین پروتئین',         protein: 80,  carbs: 5,    calories: 360, category: 'لبنیات' },

    // ─── حبوبات ───
    // (مقادیر برای حبوبات خشک‌اند)
    { name: 'لوبیا چیتی (خشک)',       protein: 21,  carbs: 60,   calories: 333, category: 'حبوبات' },
    { name: 'لوبیا قرمز (خشک)',       protein: 24,  carbs: 63,   calories: 337, category: 'حبوبات' },
    { name: 'لوبیا سفید (خشک)',       protein: 23,  carbs: 60,   calories: 333, category: 'حبوبات' },
    { name: 'عدس (خشک)',              protein: 25,  carbs: 60,   calories: 352, category: 'حبوبات' },
    { name: 'عدس سبز پخته',           protein: 9,   carbs: 20,   calories: 116, category: 'حبوبات' },
    { name: 'نخود (خشک)',             protein: 19,  carbs: 61,   calories: 364, category: 'حبوبات' },
    { name: 'نخود پخته',              protein: 8.9, carbs: 27,   calories: 164, category: 'حبوبات' },
    { name: 'لپه (خشک)',              protein: 25,  carbs: 60,   calories: 352, category: 'حبوبات' },
    { name: 'ماش (خشک)',              protein: 24,  carbs: 63,   calories: 347, category: 'حبوبات' },
    { name: 'باقلا (خشک)',            protein: 26,  carbs: 58,   calories: 341, category: 'حبوبات' },
    { name: 'باقلا سبز تازه',         protein: 5.4, carbs: 19,   calories: 88,  category: 'حبوبات' },
    { name: 'لوبیا سویا (خشک)',       protein: 36,  carbs: 30,   calories: 446, category: 'حبوبات' },
    { name: 'توفو',                   protein: 8,   carbs: 2,    calories: 76,  category: 'حبوبات' },
    { name: 'ادامامه',                protein: 11,  carbs: 8.9,  calories: 122, category: 'حبوبات' },
    { name: 'لوبیا چشم‌بلبلی',        protein: 23,  carbs: 58,   calories: 336, category: 'حبوبات' },
    { name: 'لوبیا مونگ',             protein: 24,  carbs: 63,   calories: 347, category: 'حبوبات' },

    // ─── غلات و نان ───
    { name: 'برنج سفید (خشک)',        protein: 7,   carbs: 80,   calories: 365, category: 'غلات' },
    { name: 'برنج سفید (پخته)',        protein: 2.7, carbs: 28,   calories: 130, category: 'غلات' },
    { name: 'برنج قهوه‌ای (خشک)',     protein: 8,   carbs: 77,   calories: 370, category: 'غلات' },
    { name: 'برنج قهوه‌ای (پخته)',     protein: 2.6, carbs: 23,   calories: 111, category: 'غلات' },
    { name: 'برنج باسماتی',           protein: 7.5, carbs: 78,   calories: 360, category: 'غلات' },
    { name: 'نان سنگک',               protein: 9,   carbs: 56,   calories: 290, category: 'غلات' },
    { name: 'نان بربری',              protein: 8,   carbs: 54,   calories: 275, category: 'غلات' },
    { name: 'نان لواش',               protein: 9,   carbs: 56,   calories: 280, category: 'غلات' },
    { name: 'نان تافتون',             protein: 8,   carbs: 55,   calories: 270, category: 'غلات' },
    { name: 'نان جو',                 protein: 10,  carbs: 49,   calories: 250, category: 'غلات' },
    { name: 'نان سبوس‌دار',           protein: 8.5, carbs: 48,   calories: 247, category: 'غلات' },
    { name: 'نان تست',                protein: 8.9, carbs: 47,   calories: 265, category: 'غلات' },
    { name: 'نان رزماری',             protein: 8,   carbs: 50,   calories: 260, category: 'غلات' },
    { name: 'ماکارونی (خشک)',          protein: 13,  carbs: 75,   calories: 371, category: 'غلات' },
    { name: 'ماکارونی (پخته)',         protein: 5,   carbs: 25,   calories: 131, category: 'غلات' },
    { name: 'رشته (خشک)',             protein: 12,  carbs: 74,   calories: 365, category: 'غلات' },
    { name: 'بلغور (خشک)',            protein: 12,  carbs: 76,   calories: 342, category: 'غلات' },
    { name: 'جو دوسر (خشک)',          protein: 12,  carbs: 68,   calories: 389, category: 'غلات' },
    { name: 'جو پرک',                 protein: 10,  carbs: 66,   calories: 352, category: 'غلات' },
    { name: 'ذرت (دانه خشک)',          protein: 9,   carbs: 74,   calories: 365, category: 'غلات' },
    { name: 'کینوا (خشک)',            protein: 14,  carbs: 64,   calories: 368, category: 'غلات' },
    { name: 'کینوا (پخته)',           protein: 4.4, carbs: 21,   calories: 120, category: 'غلات' },
    { name: 'گندم سیاه',              protein: 13,  carbs: 72,   calories: 343, category: 'غلات' },
    { name: 'ارزن',                   protein: 11,  carbs: 73,   calories: 378, category: 'غلات' },
    { name: 'آرد گندم',               protein: 10,  carbs: 76,   calories: 364, category: 'غلات' },
    { name: 'آرد جو',                 protein: 11,  carbs: 66,   calories: 354, category: 'غلات' },
    { name: 'نان برگر',               protein: 9,   carbs: 49,   calories: 266, category: 'غلات' },
    { name: 'کراکر گندم',             protein: 8,   carbs: 64,   calories: 414, category: 'غلات' },

    // ─── سبزیجات ───
    { name: 'سیب‌زمینی (خام)',         protein: 2,   carbs: 17,   calories: 77,  category: 'سبزیجات' },
    { name: 'سیب‌زمینی شیرین',         protein: 1.6, carbs: 20,   calories: 86,  category: 'سبزیجات' },
    { name: 'کدو حلوایی',             protein: 1,   carbs: 7,    calories: 26,  category: 'سبزیجات' },
    { name: 'هویج',                   protein: 0.9, carbs: 9.6,  calories: 41,  category: 'سبزیجات' },
    { name: 'کلم سفید',               protein: 1.3, carbs: 5.8,  calories: 25,  category: 'سبزیجات' },
    { name: 'کلم بروکلی',             protein: 2.8, carbs: 7,    calories: 34,  category: 'سبزیجات' },
    { name: 'کلم گل',                 protein: 2,   carbs: 5,    calories: 25,  category: 'سبزیجات' },
    { name: 'کلم قرمز',               protein: 1.4, carbs: 7.4,  calories: 31,  category: 'سبزیجات' },
    { name: 'کلم بروکسل',             protein: 3.4, carbs: 9,    calories: 43,  category: 'سبزیجات' },
    { name: 'گوجه فرنگی',             protein: 0.9, carbs: 3.9,  calories: 18,  category: 'سبزیجات' },
    { name: 'خیار',                   protein: 0.7, carbs: 3.6,  calories: 15,  category: 'سبزیجات' },
    { name: 'کاهو',                   protein: 1.4, carbs: 2.9,  calories: 15,  category: 'سبزیجات' },
    { name: 'کاهو رومن',              protein: 1.2, carbs: 3.3,  calories: 17,  category: 'سبزیجات' },
    { name: 'اسفناج',                 protein: 2.9, carbs: 3.6,  calories: 23,  category: 'سبزیجات' },
    { name: 'لوبیا سبز',              protein: 1.8, carbs: 7,    calories: 31,  category: 'سبزیجات' },
    { name: 'نخود فرنگی',             protein: 5,   carbs: 14,   calories: 81,  category: 'سبزیجات' },
    { name: 'بادمجان',                protein: 1,   carbs: 6,    calories: 25,  category: 'سبزیجات' },
    { name: 'فلفل دلمه‌ای',           protein: 0.9, carbs: 6,    calories: 26,  category: 'سبزیجات' },
    { name: 'فلفل قرمز',              protein: 1,   carbs: 7.3,  calories: 31,  category: 'سبزیجات' },
    { name: 'فلفل تند',               protein: 2,   carbs: 9,    calories: 40,  category: 'سبزیجات' },
    { name: 'کدو سبز',                protein: 1.2, carbs: 3.1,  calories: 17,  category: 'سبزیجات' },
    { name: 'قارچ دکمه‌ای',           protein: 3.1, carbs: 3.3,  calories: 22,  category: 'سبزیجات' },
    { name: 'قارچ شیتاکه',            protein: 2.2, carbs: 7,    calories: 34,  category: 'سبزیجات' },
    { name: 'ذرت شیرین',              protein: 3.3, carbs: 19,   calories: 86,  category: 'سبزیجات' },
    { name: 'پیاز',                   protein: 1.1, carbs: 9.3,  calories: 40,  category: 'سبزیجات' },
    { name: 'پیاز قرمز',              protein: 1.1, carbs: 9,    calories: 38,  category: 'سبزیجات' },
    { name: 'سیر',                    protein: 6.4, carbs: 33,   calories: 149, category: 'سبزیجات' },
    { name: 'زنجبیل',                 protein: 1.8, carbs: 18,   calories: 80,  category: 'سبزیجات' },
    { name: 'چغندر',                  protein: 1.6, carbs: 10,   calories: 43,  category: 'سبزیجات' },
    { name: 'شلغم',                   protein: 0.9, carbs: 6.4,  calories: 28,  category: 'سبزیجات' },
    { name: 'کرفس',                   protein: 0.7, carbs: 3,    calories: 14,  category: 'سبزیجات' },
    { name: 'تره‌فرنگی',              protein: 1.5, carbs: 14,   calories: 61,  category: 'سبزیجات' },
    { name: 'جعفری',                  protein: 3,   carbs: 6.3,  calories: 36,  category: 'سبزیجات' },
    { name: 'ریحان',                  protein: 3.2, carbs: 2.7,  calories: 23,  category: 'سبزیجات' },
    { name: 'گشنیز',                  protein: 2.1, carbs: 3.7,  calories: 23,  category: 'سبزیجات' },
    { name: 'شوید',                   protein: 3.5, carbs: 7,    calories: 43,  category: 'سبزیجات' },
    { name: 'تره',                    protein: 2,   carbs: 4,    calories: 28,  category: 'سبزیجات' },
    { name: 'جوانه گندم',             protein: 7.5, carbs: 51,   calories: 302, category: 'سبزیجات' },
    { name: 'آووکادو',                protein: 2,   carbs: 8.5,  calories: 160, category: 'سبزیجات' },
    { name: 'زیتون سبز',              protein: 0.8, carbs: 3.8,  calories: 145, category: 'سبزیجات' },
    { name: 'زیتون سیاه',             protein: 0.8, carbs: 6,    calories: 115, category: 'سبزیجات' },
    { name: 'آرتیشو',                 protein: 3.3, carbs: 11,   calories: 47,  category: 'سبزیجات' },
    { name: 'مارچوبه',                protein: 2.2, carbs: 3.9,  calories: 20,  category: 'سبزیجات' },

    // ─── میوه‌ها ───
    { name: 'سیب',                    protein: 0.3, carbs: 13.8, calories: 52,  category: 'میوه' },
    { name: 'موز',                    protein: 1.1, carbs: 23,   calories: 89,  category: 'میوه' },
    { name: 'پرتقال',                 protein: 0.9, carbs: 11.8, calories: 47,  category: 'میوه' },
    { name: 'انار',                   protein: 1.7, carbs: 19,   calories: 83,  category: 'میوه' },
    { name: 'انگور',                  protein: 0.7, carbs: 18,   calories: 69,  category: 'میوه' },
    { name: 'هندوانه',                protein: 0.6, carbs: 7.6,  calories: 30,  category: 'میوه' },
    { name: 'خربزه',                  protein: 0.8, carbs: 8,    calories: 34,  category: 'میوه' },
    { name: 'هلو',                    protein: 0.9, carbs: 9.5,  calories: 39,  category: 'میوه' },
    { name: 'آلبالو',                 protein: 1,   carbs: 12,   calories: 50,  category: 'میوه' },
    { name: 'گیلاس',                  protein: 1.1, carbs: 16,   calories: 63,  category: 'میوه' },
    { name: 'توت فرنگی',              protein: 0.7, carbs: 7.7,  calories: 32,  category: 'میوه' },
    { name: 'کیوی',                   protein: 1.1, carbs: 15,   calories: 61,  category: 'میوه' },
    { name: 'خرما (مضافتی)',           protein: 2.5, carbs: 75,   calories: 282, category: 'میوه' },
    { name: 'انجیر تازه',             protein: 0.8, carbs: 19,   calories: 74,  category: 'میوه' },
    { name: 'انجیر خشک',              protein: 3.3, carbs: 64,   calories: 249, category: 'میوه' },
    { name: 'زردآلو',                 protein: 1.4, carbs: 11,   calories: 48,  category: 'میوه' },
    { name: 'آلو',                    protein: 0.7, carbs: 11,   calories: 46,  category: 'میوه' },
    { name: 'آلو خشک',               protein: 2.2, carbs: 64,   calories: 240, category: 'میوه' },
    { name: 'لیمو ترش',               protein: 1.1, carbs: 9.3,  calories: 29,  category: 'میوه' },
    { name: 'گریپ‌فروت',              protein: 0.8, carbs: 11,   calories: 42,  category: 'میوه' },
    { name: 'نارنگی',                 protein: 0.6, carbs: 13,   calories: 53,  category: 'میوه' },
    { name: 'توت سفید',               protein: 1.4, carbs: 9.8,  calories: 43,  category: 'میوه' },
    { name: 'توت سیاه',               protein: 1.4, carbs: 9.6,  calories: 43,  category: 'میوه' },
    { name: 'زغال اخته',              protein: 0.7, carbs: 12,   calories: 46,  category: 'میوه' },
    { name: 'بلوبری',                 protein: 0.7, carbs: 14,   calories: 57,  category: 'میوه' },
    { name: 'تمشک',                   protein: 1.2, carbs: 12,   calories: 52,  category: 'میوه' },
    { name: 'کشمش',                   protein: 3.1, carbs: 79,   calories: 299, category: 'میوه' },
    { name: 'انبه',                   protein: 0.8, carbs: 15,   calories: 60,  category: 'میوه' },
    { name: 'آناناس',                 protein: 0.5, carbs: 13,   calories: 50,  category: 'میوه' },
    { name: 'پاپایا',                 protein: 0.5, carbs: 11,   calories: 43,  category: 'میوه' },
    { name: 'گلابی',                  protein: 0.4, carbs: 15,   calories: 57,  category: 'میوه' },
    { name: 'به',                     protein: 0.4, carbs: 15.3, calories: 57,  category: 'میوه' },

    // ─── آجیل و دانه‌ها ───
    { name: 'بادام زمینی',            protein: 26,  carbs: 16,   calories: 567, category: 'آجیل' },
    { name: 'کره بادام زمینی',        protein: 25,  carbs: 20,   calories: 588, category: 'آجیل' },
    { name: 'بادام',                  protein: 21,  carbs: 22,   calories: 579, category: 'آجیل' },
    { name: 'گردو',                   protein: 15,  carbs: 14,   calories: 654, category: 'آجیل' },
    { name: 'پسته',                   protein: 20,  carbs: 28,   calories: 560, category: 'آجیل' },
    { name: 'فندق',                   protein: 15,  carbs: 17,   calories: 628, category: 'آجیل' },
    { name: 'کاجو',                   protein: 18,  carbs: 30,   calories: 553, category: 'آجیل' },
    { name: 'تخمه آفتابگردان',        protein: 21,  carbs: 20,   calories: 584, category: 'آجیل' },
    { name: 'تخمه کدو',               protein: 30,  carbs: 11,   calories: 559, category: 'آجیل' },
    { name: 'کنجد',                   protein: 18,  carbs: 23,   calories: 573, category: 'آجیل' },
    { name: 'دانه چیا',               protein: 17,  carbs: 42,   calories: 486, category: 'آجیل' },
    { name: 'دانه کتان',              protein: 18,  carbs: 29,   calories: 534, category: 'آجیل' },
    { name: 'دانه کنف',               protein: 32,  carbs: 8.7,  calories: 553, category: 'آجیل' },
    { name: 'ماکادمیا',               protein: 7.9, carbs: 14,   calories: 718, category: 'آجیل' },
    { name: 'پکان',                   protein: 9.2, carbs: 14,   calories: 691, category: 'آجیل' },
    { name: 'برزیلی نات',             protein: 14,  carbs: 12,   calories: 659, category: 'آجیل' },
    { name: 'دانه انار',              protein: 1.5, carbs: 19,   calories: 83,  category: 'آجیل' },
    { name: 'دانه زیره',              protein: 18,  carbs: 44,   calories: 375, category: 'آجیل' },

    // ─── غذای ایرانی ───
    // (مقادیر به ازای ۱۰۰ گرم از غذای آماده)
    { name: 'قورمه سبزی',             protein: 12,  carbs: 8,    calories: 180, category: 'غذای ایرانی' },
    { name: 'قیمه',                   protein: 10,  carbs: 12,   calories: 165, category: 'غذای ایرانی' },
    { name: 'فسنجان',                 protein: 15,  carbs: 10,   calories: 280, category: 'غذای ایرانی' },
    { name: 'کباب کوبیده',            protein: 18,  carbs: 2,    calories: 220, category: 'غذای ایرانی' },
    { name: 'کباب برگ',               protein: 22,  carbs: 0,    calories: 250, category: 'غذای ایرانی' },
    { name: 'جوجه کباب',              protein: 25,  carbs: 1,    calories: 195, category: 'غذای ایرانی' },
    { name: 'کباب چنجه',              protein: 24,  carbs: 0,    calories: 240, category: 'غذای ایرانی' },
    { name: 'کباب شیشلیک',            protein: 20,  carbs: 0,    calories: 260, category: 'غذای ایرانی' },
    { name: 'زرشک پلو با مرغ',        protein: 15,  carbs: 45,   calories: 320, category: 'غذای ایرانی' },
    { name: 'لوبیا پلو',              protein: 12,  carbs: 50,   calories: 310, category: 'غذای ایرانی' },
    { name: 'عدس پلو',                protein: 14,  carbs: 52,   calories: 330, category: 'غذای ایرانی' },
    { name: 'باقلا پلو با ماهیچه',    protein: 16,  carbs: 48,   calories: 340, category: 'غذای ایرانی' },
    { name: 'آش رشته',                protein: 8,   carbs: 25,   calories: 150, category: 'غذای ایرانی' },
    { name: 'آبگوشت',                 protein: 16,  carbs: 20,   calories: 220, category: 'غذای ایرانی' },
    { name: 'کله پاچه',               protein: 14,  carbs: 5,    calories: 180, category: 'غذای ایرانی' },
    { name: 'کوکو سبزی',              protein: 8,   carbs: 6,    calories: 140, category: 'غذای ایرانی' },
    { name: 'کوکو سیب‌زمینی',         protein: 5,   carbs: 18,   calories: 160, category: 'غذای ایرانی' },
    { name: 'میرزا قاسمی',            protein: 5,   carbs: 8,    calories: 120, category: 'غذای ایرانی' },
    { name: 'کشک بادمجان',            protein: 4,   carbs: 10,   calories: 95,  category: 'غذای ایرانی' },
    { name: 'ماهی کباب',              protein: 22,  carbs: 1,    calories: 160, category: 'غذای ایرانی' },
    { name: 'ماهی شکم‌پر',            protein: 20,  carbs: 5,    calories: 190, category: 'غذای ایرانی' },
    { name: 'دلمه برگ مو',            protein: 6,   carbs: 22,   calories: 165, category: 'غذای ایرانی' },
    { name: 'دلمه فلفل',              protein: 8,   carbs: 20,   calories: 175, category: 'غذای ایرانی' },
    { name: 'کتلت',                   protein: 12,  carbs: 12,   calories: 220, category: 'غذای ایرانی' },
    { name: 'شامی',                   protein: 13,  carbs: 10,   calories: 210, category: 'غذای ایرانی' },
    { name: 'آش شله قلمکار',          protein: 7,   carbs: 28,   calories: 160, category: 'غذای ایرانی' },
    { name: 'آش ماست',                protein: 5,   carbs: 18,   calories: 120, category: 'غذای ایرانی' },
    { name: 'آش جو',                  protein: 6,   carbs: 22,   calories: 130, category: 'غذای ایرانی' },
    { name: 'سوپ مرغ',                protein: 10,  carbs: 8,    calories: 100, category: 'غذای ایرانی' },
    { name: 'خورش بادمجان',           protein: 9,   carbs: 12,   calories: 180, category: 'غذای ایرانی' },
    { name: 'خورش ریواس',             protein: 10,  carbs: 15,   calories: 185, category: 'غذای ایرانی' },
    { name: 'خورش آلو اسفناج',        protein: 11,  carbs: 14,   calories: 190, category: 'غذای ایرانی' },
    { name: 'مرغ ترش (شمالی)',         protein: 18,  carbs: 10,   calories: 200, category: 'غذای ایرانی' },
    { name: 'سبزی پلو با ماهی',       protein: 18,  carbs: 44,   calories: 330, category: 'غذای ایرانی' },
    { name: 'چلو کباب',               protein: 22,  carbs: 40,   calories: 380, category: 'غذای ایرانی' },
    { name: 'لواشک',                  protein: 1,   carbs: 85,   calories: 340, category: 'غذای ایرانی' },
    { name: 'حلیم',                   protein: 14,  carbs: 28,   calories: 230, category: 'غذای ایرانی' },
    { name: 'حلوا ارده',              protein: 10,  carbs: 48,   calories: 490, category: 'غذای ایرانی' },
    { name: 'کاچی',                   protein: 4,   carbs: 40,   calories: 280, category: 'غذای ایرانی' },
    { name: 'شیربرنج',                protein: 4,   carbs: 32,   calories: 175, category: 'غذای ایرانی' },
    { name: 'فرنی',                   protein: 3.5, carbs: 25,   calories: 140, category: 'غذای ایرانی' },

    // ─── روغن‌ها و چربی‌ها ─── (دسته‌بندی جدید)
    { name: 'روغن زیتون',             protein: 0,   carbs: 0,    calories: 884, category: 'روغن و چربی' },
    { name: 'روغن آفتابگردان',        protein: 0,   carbs: 0,    calories: 884, category: 'روغن و چربی' },
    { name: 'روغن کانولا',            protein: 0,   carbs: 0,    calories: 884, category: 'روغن و چربی' },
    { name: 'روغن نارگیل',            protein: 0,   carbs: 0,    calories: 892, category: 'روغن و چربی' },
    { name: 'روغن کنجد',              protein: 0,   carbs: 0,    calories: 884, category: 'روغن و چربی' },
    { name: 'روغن ذرت',               protein: 0,   carbs: 0,    calories: 884, category: 'روغن و چربی' },
    { name: 'روغن پالم',              protein: 0,   carbs: 0,    calories: 884, category: 'روغن و چربی' },
    { name: 'روغن گردو',              protein: 0,   carbs: 0,    calories: 884, category: 'روغن و چربی' },
    { name: 'روغن بادام',             protein: 0,   carbs: 0,    calories: 884, category: 'روغن و چربی' },
    { name: 'کره گیاهی (مارگارین)',   protein: 0.2, carbs: 0.9,  calories: 717, category: 'روغن و چربی' },
    { name: 'روغن حیوانی',            protein: 0,   carbs: 0,    calories: 898, category: 'روغن و چربی' },
    { name: 'روغن سویا',              protein: 0,   carbs: 0,    calories: 884, category: 'روغن و چربی' },
    { name: 'ارده (کنجد)',            protein: 17,  carbs: 26,   calories: 595, category: 'روغن و چربی' },
    { name: 'کره بادام',              protein: 21,  carbs: 19,   calories: 614, category: 'روغن و چربی' },
    { name: 'مایونز',                 protein: 1,   carbs: 1,    calories: 680, category: 'روغن و چربی' },

    // ─── نوشیدنی‌ها ─── (دسته‌بندی جدید)
    { name: 'آب',                     protein: 0,   carbs: 0,    calories: 0,   category: 'نوشیدنی' },
    { name: 'قهوه (اسپرسو)',           protein: 0.2, carbs: 0.4,  calories: 9,   category: 'نوشیدنی' },
    { name: 'قهوه سیاه',              protein: 0.3, carbs: 0,    calories: 2,   category: 'نوشیدنی' },
    { name: 'چای سیاه',               protein: 0,   carbs: 0.4,  calories: 2,   category: 'نوشیدنی' },
    { name: 'چای سبز',                protein: 0,   carbs: 0.3,  calories: 1,   category: 'نوشیدنی' },
    { name: 'چای شیرین (شکر)',         protein: 0,   carbs: 10,   calories: 40,  category: 'نوشیدنی' },
    { name: 'آب پرتقال تازه',         protein: 0.7, carbs: 10,   calories: 45,  category: 'نوشیدنی' },
    { name: 'آب انار',                protein: 0.3, carbs: 14,   calories: 55,  category: 'نوشیدنی' },
    { name: 'آب هویج',                protein: 0.9, carbs: 9,    calories: 40,  category: 'نوشیدنی' },
    { name: 'آب سیب',                 protein: 0.1, carbs: 11,   calories: 46,  category: 'نوشیدنی' },
    { name: 'دوغ',                    protein: 1.2, carbs: 2,    calories: 20,  category: 'نوشیدنی' },
    { name: 'شیر شکلاتی',             protein: 3.4, carbs: 12,   calories: 83,  category: 'نوشیدنی' },
    { name: 'اسموتی موز',             protein: 1.5, carbs: 18,   calories: 80,  category: 'نوشیدنی' },
    { name: 'نوشابه کولا',            protein: 0,   carbs: 10.6, calories: 42,  category: 'نوشیدنی' },
    { name: 'آبمیوه صنعتی',           protein: 0.2, carbs: 12,   calories: 50,  category: 'نوشیدنی' },
    { name: 'نوشیدنی انرژی‌زا',       protein: 0,   carbs: 11,   calories: 45,  category: 'نوشیدنی' },
    { name: 'پروتئین شیک (وانیل)',     protein: 20,  carbs: 5,    calories: 140, category: 'نوشیدنی' },
    { name: 'گینر (پودر حجمی)',        protein: 15,  carbs: 65,   calories: 380, category: 'نوشیدنی' },
    { name: 'شربت گلاب',              protein: 0,   carbs: 25,   calories: 98,  category: 'نوشیدنی' },
    { name: 'شربت بیدمشک',            protein: 0,   carbs: 24,   calories: 95,  category: 'نوشیدنی' },

    // ─── شیرینی و دسر ─── (دسته‌بندی جدید)
    { name: 'شکر سفید',               protein: 0,   carbs: 100,  calories: 387, category: 'شیرینی و دسر' },
    { name: 'عسل',                    protein: 0.3, carbs: 82,   calories: 304, category: 'شیرینی و دسر' },
    { name: 'مربا (توت فرنگی)',        protein: 0.4, carbs: 67,   calories: 258, category: 'شیرینی و دسر' },
    { name: 'شکلات تلخ (۷۰٪)',        protein: 8,   carbs: 46,   calories: 598, category: 'شیرینی و دسر' },
    { name: 'شکلات شیری',             protein: 5.3, carbs: 60,   calories: 535, category: 'شیرینی و دسر' },
    { name: 'نوتلا',                  protein: 6.3, carbs: 57,   calories: 539, category: 'شیرینی و دسر' },
    { name: 'کیک ساده',               protein: 4,   carbs: 52,   calories: 395, category: 'شیرینی و دسر' },
    { name: 'کلوچه',                  protein: 5,   carbs: 62,   calories: 480, category: 'شیرینی و دسر' },
    { name: 'بیسکویت',                protein: 6,   carbs: 66,   calories: 450, category: 'شیرینی و دسر' },
    { name: 'باقلوا',                 protein: 5,   carbs: 55,   calories: 480, category: 'شیرینی و دسر' },
    { name: 'زولبیا',                 protein: 2,   carbs: 50,   calories: 330, category: 'شیرینی و دسر' },
    { name: 'بامیه',                  protein: 3,   carbs: 48,   calories: 320, category: 'شیرینی و دسر' },
    { name: 'سوهان',                  protein: 6,   carbs: 60,   calories: 500, category: 'شیرینی و دسر' },
    { name: 'گز اصفهانی',             protein: 8,   carbs: 65,   calories: 430, category: 'شیرینی و دسر' },
    { name: 'قند',                    protein: 0,   carbs: 98,   calories: 380, category: 'شیرینی و دسر' },
    { name: 'پودر کاکائو',            protein: 20,  carbs: 58,   calories: 228, category: 'شیرینی و دسر' },
    { name: 'ژله',                    protein: 2,   carbs: 16,   calories: 66,  category: 'شیرینی و دسر' },
    { name: 'پودینگ',                 protein: 3,   carbs: 22,   calories: 120, category: 'شیرینی و دسر' },
    { name: 'دونات',                  protein: 5,   carbs: 44,   calories: 452, category: 'شیرینی و دسر' },
    { name: 'چیپس سیب‌زمینی',         protein: 7,   carbs: 53,   calories: 536, category: 'شیرینی و دسر' },
    { name: 'پاپ‌کورن',               protein: 11,  carbs: 74,   calories: 375, category: 'شیرینی و دسر' },
];

/* ===== 2. CONFIG ===== */
const categoryEmoji = {
    'همه':            '🍽️',
    'پروتئین حیوانی': '🥩',
    'لبنیات':         '🥛',
    'حبوبات':         '🫘',
    'غلات':           '🌾',
    'سبزیجات':        '🥦',
    'میوه':           '🍎',
    'آجیل':           '🥜',
    'غذای ایرانی':    '🍲',
    'روغن و چربی':    '🫙',
    'نوشیدنی':        '🥤',
    'شیرینی و دسر':   '🍯'
};

const mealKeys = {
    breakfast: 'Breakfast',
    lunch:     'Lunch',
    dinner:    'Dinner',
    snack:     'Snacks'
};

const mealIcons = {
    breakfast: '',
    lunch:     '',
    dinner:    '',
    snack:     ''
};

const fitnessConfig = {
    'عضله‌سازی': { icon: '', cls: 'fit-muscle', label: 'Muscle' },
    'کات':       { icon: '', cls: 'fit-cut', label: 'Cut' },
    'حجم‌گیری': { icon: '', cls: 'fit-bulk', label: 'Bulk' },
    'تعادل':     { icon: '', cls: 'fit-balance', label: 'Balanced' }
};

/* ===== 3. UTILS ===== */

/**
 * Escape HTML entities to prevent XSS
 */
function escapeHtml(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(String(str)));
    return div.innerHTML;
}

/**
 * Clamp number between min and max
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Show inline validation message (replaces alert)
 */
function showValidationMsg(msg) {
    const el = document.getElementById('validationMsg');
    if (!el) return;
    el.textContent = msg ? '⚠ ' + msg : '';
}

/**
 * Fitness label logic — improved
 * Priority: high protein → muscle
 *           low cal + low carb → cut
 *           high carb OR (high cal + moderate protein) → bulk
 *           else → balance
 */
function getFitnessLabel(food) {
    const { protein, carbs, calories } = food;
    if (protein >= 15) return '��ضله‌سازی';
    if (calories <= 120 && carbs <= 20) return 'کات';
    if (carbs >= 40) return 'حجم‌گیری';
    return 'تعادل';
}

/* ===== 4. THEME ===== */
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const icon   = document.getElementById('themeIcon');
    const label  = document.getElementById('themeLabel');

    let saved = 'dark';
    try { saved = localStorage.getItem('theme') || 'dark'; } catch (_) {}

    applyTheme(saved);

    // دکمه اصلی (تب finder)
    toggle.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem('theme', next); } catch (_) {}
    });

    // دکمه‌های تب‌های دیگر با data-theme-btn
    document.addEventListener('click', e => {
        const btn = e.target.closest('[data-theme-btn]');
        if (!btn || btn.id === 'themeToggle') return;
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem('theme', next); } catch (_) {}
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';

    // Main button
    const icon  = document.getElementById('themeIcon');
    const label = document.getElementById('themeLabel');
    if (icon)  icon.textContent  = isDark ? '' : '';
    if (label) label.textContent = isDark ? 'Dark' : 'Light';

    // Alt buttons in other tabs
    document.querySelectorAll('.theme-icon-alt').forEach(el => {
        el.textContent = isDark ? '' : '';
    });
    document.querySelectorAll('.theme-label-alt').forEach(el => {
        el.textContent = isDark ? 'Dark' : 'Light';
    });
}

/* ===== 5. SEARCH & FILTERING ===== */
const proteinInput = document.getElementById('protein');
const carbsInput   = document.getElementById('carbs');
const searchBtn    = document.getElementById('searchBtn');
const resultsBox   = document.getElementById('results');

let activeCategory    = 'all';
let lastTargetProtein = null;
let lastTargetCarbs   = null;

/**
 * Block typing numbers > 100 — prevents entry before it happens (keydown),
 * doesn't convert after the fact.
 */
function initInputGuards() {
    [proteinInput, carbsInput].forEach(input => {

        // keydown: block the keystroke before it enters the field
        input.addEventListener('keydown', (e) => {
            // always allow control keys
            const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab', 'Enter', 'Home', 'End'];
            if (allowedKeys.includes(e.key)) return;

            // block anything that isn't a digit
            if (!/^\d$/.test(e.key)) {
                e.preventDefault();
                return;
            }

            const worstCase = input.value + e.key;
            if (parseInt(worstCase, 10) > 100) {
                e.preventDefault();
            }
        });

        // paste: only allow if pasted number is 0–100
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasted = (e.clipboardData || window.clipboardData).getData('text');
            const num    = parseInt(pasted, 10);
            if (!isNaN(num) && num >= 0 && num <= 100) {
                input.value = num;
            }
        });

        // input: catch autofill edge cases
        input.addEventListener('input', () => {
            const val = parseInt(input.value, 10);
            if (input.value !== '' && (isNaN(val) || val < 0)) {
                input.value = '';
            }
            showValidationMsg('');
        });
    });

    // Enter key روی input → جستجو
    [proteinInput, carbsInput].forEach(inp => {
        inp.addEventListener('keydown', e => {
            if (e.key === 'Enter') triggerSearch();
        });
    });

    // دکمه جستجو
    searchBtn.addEventListener('click', triggerSearch);
}

function triggerSearch() {
    const pRaw = proteinInput.value.trim();
    const cRaw = carbsInput.value.trim();

    // Validation — single path, no redundancy
    if (!pRaw && !cRaw) {
        showValidationMsg('لطفاً حداقل یکی از مقادیر را وارد کنید');
        return;
    }

    const pNum = pRaw !== '' ? parseInt(pRaw, 10) : null;
    const cNum = cRaw !== '' ? parseInt(cRaw, 10) : null;

    if ((pNum !== null && pNum <= 0) && (cNum !== null && cNum <= 0)) {
        showValidationMsg('مقدار وارد شده باید بیشتر از صفر باشد');
        return;
    }

    if (pNum === null && cNum === null) {
        showValidationMsg('مقدار وارد شده باید بیشتر از صفر باشد');
        return;
    }

    showValidationMsg('');
    lastTargetProtein = (pNum !== null && pNum > 0) ? pNum : null;
    lastTargetCarbs   = (cNum !== null && cNum > 0) ? cNum : null;

    showSkeleton();
    setTimeout(() => {
        const results = findBestFoods(lastTargetProtein, lastTargetCarbs);
        renderResults(results);
    }, 350);
}

/**
 * Euclidean distance score for match quality
 */
function calcMatchScore(food, targetProtein, targetCarbs) {
    if (targetProtein === null && targetCarbs === null) return null;

    let dist, maxDist;
    if (targetProtein !== null && targetCarbs !== null) {
        dist    = Math.sqrt(Math.pow(food.protein - targetProtein, 2) + Math.pow(food.carbs - targetCarbs, 2));
        maxDist = Math.sqrt(2 * Math.pow(100, 2));
    } else if (targetProtein !== null) {
        dist    = Math.abs(food.protein - targetProtein);
        maxDist = 100;
    } else {
        dist    = Math.abs(food.carbs - targetCarbs);
        maxDist = 100;
    }

    return Math.max(Math.round((1 - dist / maxDist) * 100), 0);
}

function scoreBadgeLabel(score) {
    if (score >= 95) return 'Excellent';
    if (score >= 85) return 'Good';
    if (score >= 70) return 'Fair';
    return 'Low';
}

function findBestFoods(targetProtein, targetCarbs) {
    if (targetProtein === null && targetCarbs === null) return [];

    // فقط غذاهایی که favorite نیستن — اونا تو تب علاقه‌مندی هستن
    const base = activeCategory === 'all'
        ? foods
        : foods.filter(f => f.category === activeCategory);

    const pool = base.filter(f => !isFavorite(f.name));

    const scored = pool.map(food => {
        let distance;
        if (targetProtein !== null && targetCarbs !== null) {
            distance = Math.sqrt(Math.pow(food.protein - targetProtein, 2) + Math.pow(food.carbs - targetCarbs, 2));
        } else if (targetProtein !== null) {
            distance = Math.abs(food.protein - targetProtein);
        } else {
            distance = Math.abs(food.carbs - targetCarbs);
        }
        return { ...food, distance };
    });

    scored.sort((a, b) => a.distance - b.distance);
    return scored.slice(0, 10);
}

/* ===== 5b. PERSIAN NAME SEARCH ===== */

/**
 * آیا کاراکتر فارسی/عربی یا فاصله/نیم‌فاصله است؟
 * رنج یونیکد: U+0600–U+06FF (عربی/فارسی) + U+200C (نیم‌فاصله) + U+FE70–U+FEFF (عربی تکمیلی)
 */
function isPersianChar(ch) {
    const code = ch.charCodeAt(0);
    return (
        (code >= 0x0600 && code <= 0x06FF) ||
        (code >= 0xFB50 && code <= 0xFDFF) ||
        (code >= 0xFE70 && code <= 0xFEFF) ||
        code === 0x200C || // نیم‌فاصله
        code === 0x200B || // zero-width space
        ch === ' '
    );
}

/**
 * فاصله‌گذاری فارسی: حروف مشابه رو یکسان می‌کنه
 * ک/ك → ک  |  ی/ي → ی  |  ه/ة → ه  |  آ/ا → ا
 */
function normalizePersian(str) {
    return str
        .replace(/ك/g, 'ک')
        .replace(/ي/g, 'ی')
        .replace(/ة/g, 'ه')
        .replace(/أ|إ|آ/g, 'ا')
        .replace(/ؤ/g, 'و')
        .replace(/\u200C|\u200B/g, '') // نیم‌فاصله رو حذف کن برای مقایسه
        .trim();
}

/**
 * Levenshtein distance — تعداد ویرایش لازم برای تبدیل a به b
 */
function levenshtein(a, b) {
    const m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    const dp = Array.from({ length: m + 1 }, (_, i) => [i]);
    for (let j = 1; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = a[i - 1] === b[j - 1]
                ? dp[i - 1][j - 1]
                : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
    }
    return dp[m][n];
}

/**
 * امتیاز تطابق fuzzy — ترکیب شامل بودن + فاصله ویرایش
 * بازگشت: عدد بالاتر = تطابق بهتر (0 = بی‌ربط)
 */
function fuzzyScore(query, foodName) {
    const q = normalizePersian(query);
    const n = normalizePersian(foodName);

    if (!q) return 0;

    // شامل بودن دقیق → بالاترین امتیاز
    if (n.includes(q)) return 100;

    // هر کلمه query رو چک کن
    const words = q.split(/\s+/).filter(Boolean);
    const nameWords = n.split(/\s+/).filter(Boolean);

    // اگه هر کلمه‌ای از query در نام غذا باشه
    let wordMatchScore = 0;
    for (const w of words) {
        for (const nw of nameWords) {
            if (nw.includes(w) || w.includes(nw)) {
                wordMatchScore = Math.max(wordMatchScore, 80);
            }
        }
    }
    if (wordMatchScore > 0) return wordMatchScore;

    // Levenshtein روی کل رشته
    const dist = levenshtein(q, n);
    const maxLen = Math.max(q.length, n.length);
    const ratio = 1 - dist / maxLen;

    // Levenshtein روی هر کلمه نام غذا
    let bestWordDist = Infinity;
    for (const nw of nameWords) {
        for (const w of words) {
            const d = levenshtein(w, nw);
            const threshold = Math.max(1, Math.floor(Math.max(w.length, nw.length) * 0.4));
            if (d <= threshold) bestWordDist = Math.min(bestWordDist, d);
        }
    }

    if (bestWordDist <= 2) return Math.round(65 - bestWordDist * 10);
    if (ratio >= 0.6) return Math.round(ratio * 60);

    return 0;
}

/**
 * جستجوی fuzzy فارسی — برمی‌گردونه آیتم‌های مرتب‌شده
 */
function searchByName(query) {
    if (!query || query.length < 1) return [];

    const pool = activeCategory === 'all'
        ? foods
        : foods.filter(f => f.category === activeCategory);

    const scored = pool
        .map(food => ({ ...food, score: fuzzyScore(query, food.name) }))
        .filter(f => f.score > 0)
        .sort((a, b) => b.score - a.score);

    return scored.slice(0, 12);
}

function initNameSearch() {
    const input    = document.getElementById('nameSearch');
    const clearBtn = document.getElementById('nameSearchClear');

    if (!input) return;

    // dropdown رو از HTML جدا کرده و به body منتقل می‌کنیم تا از stacking context فرار کنه
    const dropdown = document.getElementById('nameSearchResults');
    document.body.appendChild(dropdown);
    dropdown.style.position = 'fixed';

    function positionDropdown() {
        const rect = input.closest('.name-search-wrapper').getBoundingClientRect();
        dropdown.style.top    = (rect.bottom + 6) + 'px';
        dropdown.style.left   = rect.left + 'px';
        dropdown.style.width  = rect.width + 'px';
        dropdown.style.right  = 'auto';
    }
    input.addEventListener('keydown', e => {
        const allowedKeys = [
            'Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown',
            'Tab','Enter','Home','End','Escape',' '
        ];
        if (allowedKeys.includes(e.key)) return;

        // کلیدهای کنترلی (Ctrl+A, Ctrl+C, ...)
        if (e.ctrlKey || e.metaKey) return;

        if (!isPersianChar(e.key)) {
            e.preventDefault();
        }
    });

    // paste: فقط محتوای فارسی قبول کن
    input.addEventListener('paste', e => {
        e.preventDefault();
        const pasted = (e.clipboardData || window.clipboardData).getData('text');
        const persianOnly = [...pasted].filter(ch => isPersianChar(ch)).join('');
        if (persianOnly) {
            const pos = input.selectionStart;
            input.value = input.value.slice(0, pos) + persianOnly + input.value.slice(input.selectionEnd);
            // move cursor
            input.setSelectionRange(pos + persianOnly.length, pos + persianOnly.length);
        }
        triggerNameSearch();
    });

    input.addEventListener('input', () => {
        // پاک کردن کاراکترهای غیر فارسی که ممکنه از IME یا autofill بیان
        const cleaned = [...input.value].filter(ch => isPersianChar(ch)).join('');
        if (cleaned !== input.value) input.value = cleaned;

        clearBtn.style.display = input.value ? 'flex' : 'none';
        triggerNameSearch();
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        closeDropdown();
        input.focus();
    });

    // بستن dropdown با کلیک بیرون
    document.addEventListener('click', e => {
        if (!input.closest('.name-search-box').contains(e.target) && !dropdown.contains(e.target)) {
            closeDropdown();
        }
    });

    // navigation با کیبورد
    input.addEventListener('keydown', e => {
        if (!dropdown || dropdown.hidden) return;
        const items = dropdown.querySelectorAll('.ns-item');
        const active = dropdown.querySelector('.ns-item.focused');
        let idx = active ? [...items].indexOf(active) : -1;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            idx = Math.min(idx + 1, items.length - 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            idx = Math.max(idx - 1, 0);
        } else if (e.key === 'Enter' && active) {
            e.preventDefault();
            active.click();
            return;
        } else if (e.key === 'Escape') {
            closeDropdown();
            return;
        } else { return; }

        items.forEach(it => it.classList.remove('focused'));
        if (items[idx]) {
            items[idx].classList.add('focused');
            items[idx].scrollIntoView({ block: 'nearest' });
        }
    });

    function triggerNameSearch() {
        const q = input.value.trim();
        if (!q) { closeDropdown(); return; }
        const results = searchByName(q);
        renderNameDropdown(results, q);
    }

    function renderNameDropdown(results, query) {
        if (!results.length) {
            dropdown.innerHTML = '<div class="ns-empty">نتیجه‌ای یافت نشد</div>';
            positionDropdown();
            dropdown.hidden = false;
            return;
        }

        dropdown.innerHTML = results.map((food, i) => {
            const highlighted = highlightMatch(food.name, query);
            return `<div class="ns-item" role="option" tabindex="-1" data-idx="${i}" data-name="${escapeHtml(food.name)}">
                <span class="ns-name">${highlighted}</span>
                <span class="ns-cat">${categoryEmoji[food.category] || ''} ${escapeHtml(food.category)}</span>
            </div>`;
        }).join('');

        positionDropdown();
        dropdown.hidden = false;

        // کلیک روی آیتم → نمایش کارت
        dropdown.querySelectorAll('.ns-item').forEach((item, i) => {
            item.addEventListener('click', () => {
                const food = results[i];
                input.value = food.name;
                clearBtn.style.display = 'flex';
                closeDropdown();
                renderResults([food]);
                document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    function closeDropdown() {
        if (dropdown) dropdown.hidden = true;
    }

    // reposition on scroll or resize
    window.addEventListener('scroll', () => { if (!dropdown.hidden) positionDropdown(); }, { passive: true });
    window.addEventListener('resize', () => { if (!dropdown.hidden) positionDropdown(); }, { passive: true });
}

/**
 * هایلایت کردن بخش تطابق‌یافته در نام غذا
 */
function highlightMatch(name, query) {
    const q = normalizePersian(query);
    const n = normalizePersian(name);
    const idx = n.indexOf(q);
    if (idx !== -1) {
        return escapeHtml(name.slice(0, idx))
            + `<mark>${escapeHtml(name.slice(idx, idx + q.length))}</mark>`
            + escapeHtml(name.slice(idx + q.length));
    }
    return escapeHtml(name);
}

function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            activeCategory = btn.dataset.category;

            if (proteinInput.value.trim() || carbsInput.value.trim()) {
                triggerSearch();
            }
        });
    });
}

/* ===== 6. RENDERING ===== */

function showSkeleton() {
    const skCard = () => `
        <div class="skeleton-card" aria-hidden="true">
            <div class="sk sk-badge"></div>
            <div class="sk sk-title"></div>
            <div class="sk-circle"></div>
            <div class="sk-macro-row">
                <div class="sk sk-label"></div>
                <div class="sk sk-value"></div>
            </div>
            <div class="sk-macro-row">
                <div class="sk sk-label"></div>
                <div class="sk sk-value"></div>
            </div>
            <div class="sk-macro-row">
                <div class="sk sk-label"></div>
                <div class="sk sk-value"></div>
            </div>
            <div class="sk sk-category"></div>
            <div class="sk sk-button"></div>
        </div>`;
    resultsBox.innerHTML = Array(10).fill(null).map(skCard).join('');
}

function makePieChart(protein, carbs) {
    const total = protein + carbs;
    if (total === 0) {
        return `<div class="pie-wrapper">
            <svg viewBox="0 0 36 36" class="pie-svg" aria-hidden="true">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3.2"/>
            </svg>
        </div>`;
    }

    const C = 99.9;
    const pPct  = (protein / total) * 100;
    const pDash = (pPct / 100) * C;
    const cDash = ((carbs / total) * 100 / 100) * C;

    return `
    <div class="pie-wrapper">
        <svg viewBox="0 0 36 36" class="pie-svg" aria-hidden="true">
            <circle cx="18" cy="18" r="15.9" fill="none"
                stroke="#10b981" stroke-width="3.2"
                stroke-dasharray="${pDash} ${C - pDash}"
                stroke-dashoffset="25"
                transform="rotate(-90 18 18)"/>
            <circle cx="18" cy="18" r="15.9" fill="none"
                stroke="#3b82f6" stroke-width="3.2"
                stroke-dasharray="${cDash} ${C - cDash}"
                stroke-dashoffset="${25 - pDash}"
                transform="rotate(-90 18 18)"/>
            <text x="18" y="20.5" text-anchor="middle" class="pie-center-text">${Math.round(pPct)}%</text>
        </svg>
        <div class="pie-legend">
            <span><span class="pie-dot dot-protein" aria-hidden="true"></span>پروتئین ${protein}g</span>
            <span><span class="pie-dot dot-carbs" aria-hidden="true"></span>کربوهیدرات ${carbs}g</span>
        </div>
    </div>`;
}

function renderResults(list) {
    if (list.length === 0) {
        resultsBox.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🔍</span>
                نتیجه‌ای برای این جستجو یافت نشد
            </div>`;
        return;
    }

    resultsBox.innerHTML = list.map((food, index) => {
        const score    = calcMatchScore(food, lastTargetProtein, lastTargetCarbs);
        const fitKey   = getFitnessLabel(food);
        const fitConf  = fitnessConfig[fitKey];
        const safeName = escapeHtml(food.name);
        const safecat  = escapeHtml(food.category);
        const isFav    = isFavorite(food.name);
        const badgeHTML = score !== null ? `<div class="match-badge">${scoreBadgeLabel(score)} ${score}%</div>` : '';

        return `
        <article class="food-card${isFav ? ' fav-card' : ''}" style="--card-index:${index}" aria-label="${safeName}">
            <div class="card-top-row">
                ${badgeHTML}
                <div class="fitness-label ${fitConf.cls}">${fitConf.label || fitKey}</div>
            </div>
            <button class="fav-btn${isFav ? ' fav-active' : ''}" aria-pressed="${isFav}"
                aria-label="${isFav ? `Remove ${safeName} from favorites` : `Add ${safeName} to favorites`}"
            >${isFav ? '&#9829;' : '&#9825;'}</button>
            <h3>${safeName}</h3>
            ${makePieChart(food.protein, food.carbs)}
            <div class="macro"><span>Protein:</span><span>${food.protein}g</span></div>
            <div class="macro"><span>Carbs:</span><span>${food.carbs}g</span></div>
            <div class="macro"><span>Calories:</span><span>${food.calories}kcal</span></div>
            <div class="category">${safecat}</div>
            <div class="card-actions">
                <button class="add-compare-btn" aria-label="Add ${safeName} to compare">Add to Compare</button>
                <button class="add-meal-btn" data-name="${safeName}" aria-label="Add ${safeName} to meal">+ Meal</button>
            </div>
        </article>`;
    }).join('');
}

/* ===== 6.5 FAVORITES ===== */

/** Set نام‌های favorite — از localStorage load میشه */
let favorites = new Set();

function loadFavorites() {
    try {
        const saved = localStorage.getItem('ff_favorites');
        if (saved) favorites = new Set(JSON.parse(saved));
    } catch (_) { favorites = new Set(); }
}

function saveFavorites() {
    try {
        localStorage.setItem('ff_favorites', JSON.stringify([...favorites]));
    } catch (_) {}
}

function toggleFavorite(foodName) {
    if (favorites.has(foodName)) {
        favorites.delete(foodName);
    } else {
        favorites.add(foodName);
    }
    saveFavorites();
}

function isFavorite(foodName) {
    return favorites.has(foodName);
}

/** Update heart button on card without full re-render */
function updateFavBtn(btn, foodName) {
    const active = isFavorite(foodName);
    btn.setAttribute('aria-pressed', String(active));
    btn.setAttribute('aria-label', active ? `Remove ${foodName} from favorites` : `Add ${foodName} to favorites`);
    btn.classList.toggle('fav-active', active);
    btn.innerHTML = active ? '&#9829;' : '&#9825;';
}

function initFavorites() {
    loadFavorites();

    // event delegation روی resultsBox
    document.addEventListener('click', e => {
        if (!e.target.classList.contains('fav-btn')) return;
        const card     = e.target.closest('.food-card');
        if (!card) return;
        const foodName = card.querySelector('h3').textContent;
        toggleFavorite(foodName);
        updateFavBtn(e.target, foodName);
    });
}

/* ===== 7. COMPARE FEATURE ===== */
let selectedFoods = [];
const MAX_COMPARE = 3;

function initCompare() {
    document.addEventListener('click', e => {
        if (e.target.classList.contains('add-compare-btn')) {
            const card = e.target.closest('.food-card');
            if (!card) return;
            const foodName = card.querySelector('h3').textContent;
            const food = foods.find(f => f.name === foodName);
            if (food) toggleCompare(food, e.target, card);
        }
    });

    document.getElementById('compareBtn').addEventListener('click', showCompareModal);
    document.getElementById('clearCompareBtn').addEventListener('click', clearCompare);
    document.querySelector('.close-modal').addEventListener('click', closeCompareModal);
    document.getElementById('compareModal').addEventListener('click', e => {
        if (e.target.id === 'compareModal') closeCompareModal();
    });

    // Keyboard close (Escape)
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.getElementById('compareModal').classList.contains('show')) {
            closeCompareModal();
        }
    });
}

function toggleCompare(food, btn, card) {
    const index = selectedFoods.findIndex(f => f.name === food.name);

    if (index > -1) {
        selectedFoods.splice(index, 1);
        btn.textContent = 'افزودن به مقایسه';
        btn.setAttribute('aria-label', `افزودن ${food.name} به مقایسه`);
        btn.classList.remove('added');
        card.classList.remove('selected');
        card.removeAttribute('aria-selected');
    } else {
        if (selectedFoods.length >= MAX_COMPARE) {
            showValidationMsg(`حداکثر ${MAX_COMPARE} غذا می‌توانید انتخاب کنید`);
            return;
        }
        selectedFoods.push(food);
        btn.textContent = '✓ اضافه شد';
        btn.setAttribute('aria-label', `حذف ${food.name} از مقایسه`);
        btn.classList.add('added');
        card.classList.add('selected');
        card.setAttribute('aria-selected', 'true');
    }

    updateCompareBar();
}

function updateCompareBar() {
    const bar   = document.getElementById('compareBar');
    const count = document.getElementById('compareCount');
    const btn   = document.getElementById('compareBtn');
    const hasItems = selectedFoods.length > 0;

    count.textContent = `${selectedFoods.length} غذا انتخاب شده`;
    btn.disabled = selectedFoods.length < 2;
    btn.setAttribute('aria-disabled', String(selectedFoods.length < 2));

    bar.classList.toggle('show', hasItems);
    bar.setAttribute('aria-hidden', String(!hasItems));
}

function clearCompare() {
    selectedFoods = [];
    document.querySelectorAll('.add-compare-btn').forEach(btn => {
        btn.textContent = 'افزودن به مقایسه';
        btn.classList.remove('added');
    });
    document.querySelectorAll('.food-card').forEach(card => {
        card.classList.remove('selected');
        card.removeAttribute('aria-selected');
    });
    updateCompareBar();
}

function showCompareModal() {
    if (selectedFoods.length < 2) return;
    renderModalContent();
    const modal   = document.getElementById('compareModal');
    const content = modal.querySelector('.compare-modal-content');
    content.classList.remove('modal-entered', 'modal-leaving');
    modal.classList.add('show');
    modal.removeAttribute('aria-hidden');
    requestAnimationFrame(() => requestAnimationFrame(() => content.classList.add('modal-entered')));
}

function closeCompareModal() {
    const modal   = document.getElementById('compareModal');
    const content = modal.querySelector('.compare-modal-content');
    content.classList.remove('modal-entered');
    content.classList.add('modal-leaving');
    setTimeout(() => {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        content.classList.remove('modal-leaving');
    }, 280);
}

function renderModalContent() {
    const maxProtein  = Math.max(...selectedFoods.map(f => f.protein));
    const maxCarbs    = Math.max(...selectedFoods.map(f => f.carbs));
    const maxCalories = Math.max(...selectedFoods.map(f => f.calories));

    const pct = (val, max) => max === 0 ? 0 : Math.max((val / max) * 100, 4);

    const cardsHTML = selectedFoods.map((food, i) => {
        const isBestProtein = food.protein === maxProtein;
        const safeName = escapeHtml(food.name);
        const safeCat  = escapeHtml(food.category);

        return `
        <div class="modal-food-card" style="animation-delay:${i * 0.07}s">
            <div class="modal-card-header">
                <span class="modal-card-emoji" aria-hidden="true">${categoryEmoji[food.category] || '🍽️'}</span>
                <div>
                    <div class="modal-card-name">${safeName}</div>
                    <div class="modal-card-cat">${safeCat}</div>
                </div>
            </div>
            <div class="modal-stats">
                <div class="modal-stat-row">
                    <div class="modal-stat-label">
                        <span class="modal-stat-left"><span class="modal-dot dot-protein" aria-hidden="true"></span>پروتئین</span>
                        <span class="modal-stat-val ${isBestProtein ? 'stat-best' : ''}">${food.protein}g</span>
                    </div>
                    <div class="modal-bar-track"><div class="modal-bar bar-protein" style="width:${pct(food.protein, maxProtein).toFixed(1)}%"></div></div>
                </div>
                <div class="modal-stat-row">
                    <div class="modal-stat-label">
                        <span class="modal-stat-left"><span class="modal-dot dot-carbs" aria-hidden="true"></span>کربوهیدرات</span>
                        <span class="modal-stat-val">${food.carbs}g</span>
                    </div>
                    <div class="modal-bar-track"><div class="modal-bar bar-carbs" style="width:${pct(food.carbs, maxCarbs).toFixed(1)}%"></div></div>
                </div>
                <div class="modal-stat-row">
                    <div class="modal-stat-label">
                        <span class="modal-stat-left"><span class="modal-dot dot-calories" aria-hidden="true"></span>کالری</span>
                        <span class="modal-stat-val">${food.calories} kcal</span>
                    </div>
                    <div class="modal-bar-track"><div class="modal-bar bar-calories" style="width:${pct(food.calories, maxCalories).toFixed(1)}%"></div></div>
                </div>
            </div>
        </div>`;
    }).join('');

    document.getElementById('compareChart').innerHTML = `
        <div class="modal-cards-grid">${cardsHTML}</div>
        <div class="modal-legend">
            <span><span class="modal-dot dot-protein" aria-hidden="true"></span>پروتئین</span>
            <span><span class="modal-dot dot-carbs" aria-hidden="true"></span>کربوهیدرات</span>
            <span><span class="modal-dot dot-calories" aria-hidden="true"></span>کالری</span>
            <span class="legend-note">↑ بیشترین پروتئین</span>
        </div>`;
    document.getElementById('compareTable').innerHTML = '';
}

/* ===== 8. MEAL PLANNER ===== */

/* ── MealStorage: ذخیره‌سازی per-user با TTL 24 ساعت per-item ── */
const MealStorage = (() => {
    const TTL_MS = 24 * 60 * 60 * 1000;

    function getUserId() {
        try {
            let uid = localStorage.getItem('ff_uid');
            if (!uid) {
                uid = 'u_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
                localStorage.setItem('ff_uid', uid);
            }
            return uid;
        } catch (_) { return 'guest'; }
    }

    function storageKey() { return 'ff_plan_' + getUserId(); }

    function pruneExpired(plan) {
        const now = Date.now();
        Object.keys(plan).forEach(meal => {
            plan[meal] = plan[meal].filter(item =>
                item._addedAt && (now - item._addedAt) < TTL_MS
            );
        });
    }

    function load() {
        const empty = { breakfast: [], lunch: [], dinner: [], snack: [] };
        try {
            const raw = localStorage.getItem(storageKey());
            if (!raw) return empty;
            const parsed = JSON.parse(raw);
            if (typeof parsed !== 'object' || Array.isArray(parsed)) return empty;
            ['breakfast', 'lunch', 'dinner', 'snack'].forEach(k => {
                if (!Array.isArray(parsed[k])) parsed[k] = [];
            });
            pruneExpired(parsed);
            return parsed;
        } catch (_) { return empty; }
    }

    function save(plan) {
        try {
            pruneExpired(plan);
            localStorage.setItem(storageKey(), JSON.stringify(plan));
        } catch (_) {}
    }

    return { load, save, getUserId };
})();

/* mealPlan با داده‌های ذخیره‌شده load میشه */
const mealPlan = MealStorage.load();

function showMealPicker(foodName) {
    const food = foods.find(f => f.name === foodName);
    if (!food) return;

    // Remove any existing overlay
    document.querySelectorAll('.meal-picker-overlay').forEach(p => p.remove());

    // Create overlay (full-screen backdrop)
    const overlay = document.createElement('div');
    overlay.className = 'meal-picker-overlay';

    const picker = document.createElement('div');
    picker.className = 'meal-picker-popup';
    picker.setAttribute('role', 'dialog');
    picker.setAttribute('aria-label', 'انتخاب وعده غذایی');

    picker.innerHTML = `
        <div class="meal-picker-title">Add <span class="meal-picker-foodname">${escapeHtml(food.name)}</span></div>

        <div class="meal-picker-gram-row">
            <label class="meal-picker-gram-label" for="mealPickerGrams">Amount (grams):</label>
            <div class="meal-picker-gram-ctrl">
                <button class="gram-step-btn" data-step="-10" aria-label="Decrease 10g">-</button>
                <input class="meal-picker-gram-input" id="mealPickerGrams" type="text" placeholder="1-1000" inputmode="numeric" autocomplete="off" value="">
                <button class="gram-step-btn" data-step="10" aria-label="Increase 10g">+</button>
            </div>
            <div class="meal-picker-preview" id="mealPickerPreview">
                P: --g / C: --g / --kcal
            </div>
            <div class="meal-picker-gram-warn" id="mealPickerWarn"></div>
        </div>

        <div class="meal-picker-title meal-picker-title--small">Select meal:</div>
        ${Object.entries(mealKeys).map(([key, label]) => `
            <button class="meal-picker-opt" data-meal="${escapeHtml(key)}" role="menuitem">
                ${escapeHtml(label)}
            </button>
        `).join('')}
        <button class="meal-picker-close" role="menuitem">Cancel</button>
    `;

    overlay.appendChild(picker);
    document.body.appendChild(overlay);

    const gramInput = picker.querySelector('#mealPickerGrams');
    const preview   = picker.querySelector('#mealPickerPreview');
    const warn      = picker.querySelector('#mealPickerWarn');

    const closeOverlay = () => overlay.remove();

    function renderPreview(grams) {
        if (!grams || grams < 1) {
            preview.innerHTML = `P: --g / C: --g / --kcal`;
            return;
        }
        const r = grams / 100;
        preview.innerHTML = `P: ${(food.protein * r).toFixed(1)}g / C: ${(food.carbs * r).toFixed(1)}g / ${Math.round(food.calories * r)}kcal`;
    }

    function getVal() { return parseInt(gramInput.value, 10); }

    function tryAdd(mealKey) {
        const val = getVal();
        if (!val || val < 1 || isNaN(val)) {
            warn.textContent = 'Amount must be between 1 and 1000g';
            gramInput.focus();
            return;
        }
        if (val > 1000) {
            warn.textContent = 'Amount must be between 1 and 1000g';
            gramInput.focus();
            return;
        }
        addToMeal(mealKey, food, val);
        closeOverlay();
    }

    // Input guard
    gramInput.addEventListener('keydown', e => {
        const allowedKeys = ['Backspace','Delete','ArrowLeft','ArrowRight','Tab'];
        if (allowedKeys.includes(e.key)) return;
        if (e.key === 'Escape') { closeOverlay(); return; }
        if (!/^\d$/.test(e.key)) { e.preventDefault(); return; }
        // Block leading zero
        if (gramInput.value === '0') {
            e.preventDefault();
            gramInput.value = e.key;
            gramInput.dispatchEvent(new Event('input'));
            return;
        }
        const next = gramInput.value + e.key;
        if (parseInt(next, 10) > 1000) { e.preventDefault(); }
    });

    gramInput.addEventListener('input', () => {
        warn.textContent = '';
        if (gramInput.value.length > 1 && gramInput.value.startsWith('0')) {
            gramInput.value = String(parseInt(gramInput.value, 10));
        }
        const val = getVal();
        renderPreview(isNaN(val) ? 0 : val);
    });

    // On blur: if empty keep empty (placeholder shows), no forced 0
    gramInput.addEventListener('blur', () => {
        const val = getVal();
        if (!isNaN(val) && val > 0) renderPreview(val);
        else renderPreview(0);
    });

    // Step buttons
    picker.querySelectorAll('.gram-step-btn').forEach(stepBtn => {
        stepBtn.addEventListener('click', e => {
            e.stopPropagation();
            const step    = parseInt(stepBtn.dataset.step, 10);
            const current = getVal() || 0;
            const next    = Math.min(1000, Math.max(1, current + step));
            gramInput.value = next;
            warn.textContent = '';
            renderPreview(next);
        });
    });

    // Meal option buttons
    picker.querySelectorAll('.meal-picker-opt').forEach(opt => {
        opt.addEventListener('click', () => tryAdd(opt.dataset.meal));
    });

    picker.querySelector('.meal-picker-close').addEventListener('click', closeOverlay);

    // Click on backdrop closes
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeOverlay();
    });

    // Escape key
    document.addEventListener('keydown', function onEsc(e) {
        if (e.key === 'Escape') { closeOverlay(); document.removeEventListener('keydown', onEsc); }
    });

    // Autofocus immediately — no click needed
    gramInput.focus();
}

function addToMeal(mealKey, food, grams = 100) {
    if (!mealPlan[mealKey]) return;
    const ratio = grams / 100;
    const scaled = {
        ...food,
        grams,
        protein:  parseFloat((food.protein  * ratio).toFixed(1)),
        carbs:    parseFloat((food.carbs    * ratio).toFixed(1)),
        calories: Math.round(food.calories  * ratio),
        _addedAt: Date.now(),
    };
    mealPlan[mealKey].push(scaled);
    MealStorage.save(mealPlan);
    renderPlanner();
    renderGoalTracker();
    switchToTab('planner');
}

function removeFromMeal(mealKey, index) {
    if (!mealPlan[mealKey]) return;
    mealPlan[mealKey].splice(index, 1);
    MealStorage.save(mealPlan);
    renderPlanner();
    renderGoalTracker();
}

function getMealTotals(items) {
    return items.reduce((acc, f) => ({
        protein:  acc.protein  + f.protein,
        carbs:    acc.carbs    + f.carbs,
        calories: acc.calories + f.calories
    }), { protein: 0, carbs: 0, calories: 0 });
}

function getDayTotals() {
    return Object.values(mealPlan).flat().reduce((acc, f) => ({
        protein:  acc.protein  + f.protein,
        carbs:    acc.carbs    + f.carbs,
        calories: acc.calories + f.calories
    }), { protein: 0, carbs: 0, calories: 0 });
}

function renderPlanner() {
    Object.entries(mealPlan).forEach(([key, items]) => {
        const container = document.getElementById('meal-' + key);
        if (!container) return;

        if (items.length === 0) {
            container.innerHTML = `<div class="planner-placeholder"><span>+ غذایی اضافه نشده</span></div>`;
            return;
        }

        const totals = getMealTotals(items);

        container.innerHTML = items.map((food, i) => `
            <div class="meal-item" role="listitem">
                <div class="meal-item-info">
                    <div class="meal-item-name">
                        ${escapeHtml(food.name)}
                        <span class="meal-item-grams">${food.grams || 100}g</span>
                    </div>
                    <div class="meal-item-macros">${food.protein}g پروتئین · ${food.carbs}g کربو · ${food.calories} kcal</div>
                </div>
                <button class="meal-item-remove" data-meal="${escapeHtml(key)}" data-index="${i}" aria-label="حذف ${escapeHtml(food.name)}">×</button>
            </div>
        `).join('') + `
            <div class="meal-col-totals" aria-label="مجموع ${escapeHtml(mealKeys[key])}">
                <span>🔥 ${Math.round(totals.calories)} kcal</span>
                <span>💪 ${totals.protein.toFixed(1)}g</span>
                <span>🌾 ${totals.carbs.toFixed(1)}g</span>
            </div>`;
    });

    // Day totals
    const day      = getDayTotals();
    const dayEl    = document.getElementById('day-totals');
    const total    = Object.values(mealPlan).flat().length;
    if (dayEl) {
        dayEl.innerHTML = total === 0 ? '' : `
            <div class="day-total-row">
                <span class="day-total-label">مجموع روز:</span>
                <span>🔥 <strong>${Math.round(day.calories)}</strong> kcal</span>
                <span>💪 <strong>${day.protein.toFixed(1)}g</strong> پروتئین</span>
                <span>🌾 <strong>${day.carbs.toFixed(1)}g</strong> کربوهیدرات</span>
            </div>`;
    }
}

function initPlanner() {
    renderPlanner();

    document.addEventListener('click', e => {
        if (e.target.classList.contains('add-meal-btn')) {
            e.stopPropagation();
            showMealPicker(e.target.dataset.name);
        }
        if (e.target.classList.contains('meal-item-remove')) {
            removeFromMeal(e.target.dataset.meal, parseInt(e.target.dataset.index, 10));
        }
    });
}

/* ===== 9. TABS ===== */
function switchToTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(b => {
        const isActive = b.dataset.tab === tabName;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', String(isActive));
    });

    document.querySelectorAll('.tab-content').forEach(c => {
        if (c.id.endsWith(tabName)) {
            c.classList.remove('hidden');
            // reset animation تا هر بار از نو اجرا بشه
            c.style.animation = 'none';
            requestAnimationFrame(() => { c.style.animation = ''; });
        } else {
            c.classList.add('hidden');
        }
    });

    if (tabName === 'favorites') renderFavoritesTab();
    if (tabName === 'planner')  renderPlanner();
}

function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchToTab(btn.dataset.tab));
    });
}

/* ===== 10. BMR CALCULATOR + GOAL TRACKER ===== */

// Daily goals — set by BMR calculator, persisted in localStorage
let dailyGoals = null;

const GOAL_MODIFIERS = { cut: 0.80, maintain: 1.0, bulk: 1.15 };

/**
 * Mifflin-St Jeor formula
 * Returns BMR (basal metabolic rate) in kcal/day
 */
function calcBMR(weight, height, age, gender) {
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    }
    return 10 * weight + 6.25 * height - 5 * age - 161;
}

/**
 * Derive protein and carb goals from TDEE and goal modifier
 * Standard sport nutrition ratios:
 *   Protein: 2g per kg bodyweight (muscle-building standard)
 *   Carbs: fills remaining calories after protein + ~25% fat
 */
function deriveGoals(tdee, weight, goalType) {
    const targetCalories = Math.round(tdee * GOAL_MODIFIERS[goalType]);
    const protein        = Math.round(weight * 2);           // 2g/kg
    const fatCalories    = Math.round(targetCalories * 0.25); // 25% fat
    const carbCalories   = targetCalories - (protein * 4) - fatCalories;
    const carbs          = Math.max(Math.round(carbCalories / 4), 50);

    return { calories: targetCalories, protein, carbs };
}

function loadGoals() {
    try {
        const saved = localStorage.getItem('ff_daily_goals');
        if (saved) dailyGoals = JSON.parse(saved);
    } catch (_) {}
}

function saveGoals(goals) {
    dailyGoals = goals;
    try { localStorage.setItem('ff_daily_goals', JSON.stringify(goals)); } catch (_) {}
}

function clearGoals() {
    dailyGoals = null;
    try { localStorage.removeItem('ff_daily_goals'); } catch (_) {}
    renderGoalTracker();
}

/* ── Goal Tracker Renderer ── */
function renderGoalTracker() {
    const el = document.getElementById('goalTracker');
    if (!el) return;

    if (!dailyGoals) {
        el.innerHTML = `
            <div class="goal-tracker-empty">
                برای مشاهده پیشرفت روزانه، ابتدا هدف خود را تنظیم کنید 👆
            </div>`;
        return;
    }

    const day = getDayTotals();

    const bars = [
        { key: 'calories', icon: '🔥', label: 'کالری',       unit: 'kcal', current: Math.round(day.calories),       goal: dailyGoals.calories },
        { key: 'protein',  icon: '💪', label: 'پروتئین',     unit: 'g',    current: parseFloat(day.protein.toFixed(1)), goal: dailyGoals.protein  },
        { key: 'carbs',    icon: '🌾', label: 'کربوهیدرات',  unit: 'g',    current: parseFloat(day.carbs.toFixed(1)),   goal: dailyGoals.carbs    },
    ];

    const barsHTML = bars.map(b => {
        const pct     = Math.min((b.current / b.goal) * 100, 100);
        const isOver  = b.current > b.goal;
        const isDone  = !isOver && pct >= 95;
        const fillCls = isOver ? 'over' : isDone ? 'done' : b.key;

        let badge = '';
        if (isDone)  badge = `<span class="goal-done-badge">✓ رسیدی!</span>`;
        if (isOver)  badge = `<span class="goal-over-badge">↑ بیشتر از هدف</span>`;

        return `
        <div class="goal-bar-row">
            <div class="goal-bar-header">
                <span class="goal-bar-label">${b.icon} ${b.label} ${badge}</span>
                <span class="goal-bar-numbers">
                    <strong>${b.current}</strong> / ${b.goal} ${b.unit}
                    <span class="goal-pct">(${Math.round((b.current / b.goal) * 100)}٪)</span>
                </span>
            </div>
            <div class="goal-track" role="progressbar"
                 aria-valuenow="${b.current}" aria-valuemin="0" aria-valuemax="${b.goal}"
                 aria-label="${b.label}">
                <div class="goal-fill ${fillCls}" style="width:${pct.toFixed(1)}%"></div>
            </div>
        </div>`;
    }).join('');

    el.innerHTML = `
        <div class="goal-tracker-title">📊 پیشرفت هدف روزانه</div>
        <div class="goal-bars">${barsHTML}</div>`;
}

/* ── BMR Modal Logic ── */
let selectedGoalType = 'maintain';

function openBmrModal() {
    const modal   = document.getElementById('bmrModal');
    const content = modal.querySelector('.bmr-modal-content');
    content.classList.remove('modal-entered', 'modal-leaving');
    modal.classList.add('show');
    modal.removeAttribute('aria-hidden');
    requestAnimationFrame(() => requestAnimationFrame(() => content.classList.add('modal-entered')));

    // Pre-fill if goals already set
    if (dailyGoals?.raw) {
        const r = dailyGoals.raw;
        document.getElementById('bmrAge').value    = r.age    || '';
        document.getElementById('bmrWeight').value = r.weight || '';
        document.getElementById('bmrHeight').value = r.height || '';
        document.getElementById('bmrGender').value = r.gender || 'male';
        document.getElementById('bmrActivity').value = r.activity || '1.55';
        selectedGoalType = r.goalType || 'maintain';
        updateGoalBtns();
        showBmrResult(dailyGoals);
    }
}

function closeBmrModal() {
    const modal   = document.getElementById('bmrModal');
    const content = modal.querySelector('.bmr-modal-content');
    content.classList.remove('modal-entered');
    content.classList.add('modal-leaving');
    setTimeout(() => {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        content.classList.remove('modal-leaving');
    }, 280);
}

function updateGoalBtns() {
    document.querySelectorAll('.bmr-goal-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.goal === selectedGoalType);
    });
}

function showBmrResult(goals) {
    const resultEl = document.getElementById('bmrResult');
    const goalLabel = { cut: 'کات', maintain: 'حفظ وزن', bulk: 'حجم‌گیری' }[goals.raw?.goalType || 'maintain'];
    resultEl.innerHTML = `
        <div class="bmr-result-title">نتیجه محاسبه — هدف: ${goalLabel}</div>
        <div class="bmr-result-nums">
            <div class="bmr-result-item">
                <span class="val accent">${goals.calories}</span>
                <span class="lbl">کالری روزانه</span>
            </div>
            <div class="bmr-result-item">
                <span class="val">${goals.protein}g</span>
                <span class="lbl">پروتئین</span>
            </div>
            <div class="bmr-result-item">
                <span class="val">${goals.carbs}g</span>
                <span class="lbl">کربوهیدرات</span>
            </div>
        </div>
        <div class="bmr-result-note">
            این مقادیر بر اساس فرمول Mifflin-St Jeor و نسبت‌های استاندارد تغذیه‌ای محاسبه شده‌اند.
        </div>`;
    resultEl.classList.add('visible');
}

function initBMR() {
    loadGoals();
    renderGoalTracker();

    // Open / close buttons
    document.getElementById('bmrOpenBtn').addEventListener('click', openBmrModal);
    document.getElementById('bmrCloseBtn').addEventListener('click', closeBmrModal);
    document.getElementById('bmrModal').addEventListener('click', e => {
        if (e.target.id === 'bmrModal') closeBmrModal();
    });

    // Goal type selector
    document.querySelectorAll('.bmr-goal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedGoalType = btn.dataset.goal;
            updateGoalBtns();
        });
    });

    // Calculate
    document.getElementById('bmrCalcBtn').addEventListener('click', () => {
        const age      = parseInt(document.getElementById('bmrAge').value, 10);
        const weight   = parseFloat(document.getElementById('bmrWeight').value);
        const height   = parseFloat(document.getElementById('bmrHeight').value);
        const gender   = document.getElementById('bmrGender').value;
        const activity = parseFloat(document.getElementById('bmrActivity').value);

        if (!age || !weight || !height || isNaN(activity)) {
            document.getElementById('bmrResult').innerHTML =
                `<div style="color:var(--danger);font-size:0.85rem;">⚠ لطفاً همه فیلدها را پر کنید</div>`;
            document.getElementById('bmrResult').classList.add('visible');
            return;
        }

        const bmr  = calcBMR(weight, height, age, gender);
        const tdee = bmr * activity;
        const goals = {
            ...deriveGoals(tdee, weight, selectedGoalType),
            raw: { age, weight, height, gender, activity, goalType: selectedGoalType }
        };

        saveGoals(goals);
        showBmrResult(goals);
        renderGoalTracker();

        // Close after short delay so user sees the result
        setTimeout(closeBmrModal, 1400);
    });

    // Reset
    document.getElementById('bmrResetBtn').addEventListener('click', () => {
        clearGoals();
        document.getElementById('bmrResult').classList.remove('visible');
        document.getElementById('bmrResult').innerHTML = '';
        closeBmrModal();
    });

    // Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.getElementById('bmrModal').classList.contains('show')) {
            closeBmrModal();
        }
    });
}

/* ===== 9.5 FAVORITES TAB ===== */
let favSortMode = 'added';

function getFavoriteFoods() {
    return [...favorites].map(n => foods.find(f => f.name === n)).filter(Boolean);
}

function renderFavoritesTab() {
    const grid     = document.getElementById('favResults');
    const subtitle = document.getElementById('favSubtitle');
    const sortBar  = document.getElementById('favSortBar');
    if (!grid) return;

    let list = getFavoriteFoods();
    if (favSortMode === 'protein')  list = [...list].sort((a,b) => b.protein  - a.protein);
    if (favSortMode === 'calories') list = [...list].sort((a,b) => a.calories - b.calories);

    if (subtitle) subtitle.textContent = list.length ? `${list.length} غذا ذخیره شده` : 'غذاهای موردعلاقه‌ات اینجا ذخیره میشن';
    if (sortBar)  sortBar.style.display = list.length > 1 ? 'flex' : 'none';

    if (!list.length) {
        grid.innerHTML = `
            <div class="fav-empty">
                <span class="fav-empty-icon">&#9825;</span>
                <p class="fav-empty-title">No favorites yet</p>
                <p class="fav-empty-desc">Click the heart on any card to save it here</p>
            </div>`;
        return;
    }

    grid.innerHTML = list.map((food, i) => {
        const fitKey  = getFitnessLabel(food);
        const fitConf = fitnessConfig[fitKey];
        const safe    = escapeHtml(food.name);
        const safecat = escapeHtml(food.category);
        return `
        <article class="fav-card-item" style="--card-index:${i}">
            <div class="fav-card-top">
                <div class="fav-card-name-row">
                    <h3 class="fav-card-name">${safe}</h3>
                </div>
                <button class="fav-remove-btn" data-name="${safe}">&#9829;</button>
            </div>
            <div class="fav-fitness-badge ${fitConf.cls}">${fitConf.label || fitKey}</div>
            <div class="fav-macros">
                <div class="fav-macro-item">
                    <span class="fav-macro-val protein-color">${food.protein}g</span>
                    <span class="fav-macro-lbl">Protein</span>
                </div>
                <div class="fav-macro-divider"></div>
                <div class="fav-macro-item">
                    <span class="fav-macro-val carbs-color">${food.carbs}g</span>
                    <span class="fav-macro-lbl">Carbs</span>
                </div>
                <div class="fav-macro-divider"></div>
                <div class="fav-macro-item">
                    <span class="fav-macro-val cal-color">${food.calories}</span>
                    <span class="fav-macro-lbl">kcal</span>
                </div>
            </div>
            <div class="fav-card-footer">
                <span class="fav-card-cat">${safecat}</span>
                <button class="fav-add-meal-btn" data-name="${safe}">+ Meal</button>
            </div>
        </article>`;
    }).join('');
}

function initFavoritesTab() {
    document.getElementById('favClearAllBtn')?.addEventListener('click', () => {
        favorites.clear();
        saveFavorites();
        renderFavoritesTab();
        document.querySelectorAll('.fav-btn').forEach(btn => {
            btn.classList.remove('fav-active');
            btn.innerHTML = '&#9825;';
            btn.closest('.food-card')?.classList.remove('fav-card');
        });
    });

    document.querySelectorAll('.fav-sort-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.fav-sort-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            favSortMode = btn.dataset.sort;
            renderFavoritesTab();
        });
    });

    document.getElementById('favResults')?.addEventListener('click', e => {
        if (e.target.classList.contains('fav-remove-btn')) {
            const name = e.target.dataset.name;
            toggleFavorite(name);
            renderFavoritesTab();
            // sync heart در تب finder
            document.querySelectorAll('.food-card').forEach(card => {
                if (card.querySelector('h3')?.textContent === name) {
                    const btn = card.querySelector('.fav-btn');
                    if (btn) updateFavBtn(btn, name);
                    card.classList.remove('fav-card');
                }
            });
        }
        if (e.target.classList.contains('fav-add-meal-btn')) {
            showMealPicker(e.target.dataset.name);
        }
    });
}

/* ===== 11. CUSTOM CURSOR ===== */
function initCursor() {
    // Only on devices with hover capability
    if (window.matchMedia('(hover: none)').matches) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor animation
    function animateCursor() {
        const ease = 0.15;
        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hover effect on interactive elements
    const interactiveSelectors = 'a, button, input, select, .food-card, .filter-btn, .tab-btn, .planner-item';
    document.querySelectorAll(interactiveSelectors).forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
    
    // Update for dynamically added elements
    const observer = new MutationObserver(() => {
        document.querySelectorAll(interactiveSelectors).forEach(el => {
            if (!el.dataset.cursorBound) {
                el.dataset.cursorBound = 'true';
                el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

/* ===== 12. SMOOTH SCROLL ===== */
function initSmoothScroll() {
    // Add smooth reveal on scroll for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.form-box, .filter-section, .goal-tracker').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        revealObserver.observe(el);
    });
    
    // Trigger initial reveal
    setTimeout(() => {
        document.querySelectorAll('.form-box, .filter-section').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 100);
}

/* ===== 13. INIT ===== */
function init() {
    initTheme();
    initFavorites();
    initInputGuards();
    initCompare();
    initFilters();
    initNameSearch();
    initTabs();
    initPlanner();
    initBMR();
    initFavoritesTab();
    initCursor();
    initSmoothScroll();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
