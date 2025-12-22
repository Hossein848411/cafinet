const services = [
  // ===================== سیم‌کارت و اینترنت =====================
  { name: "داشبورد رایتل", url: "https://my.rightel.ir/main/dashboard", icon: "fa-tachometer-alt", category: "simcard" },
  { name: "سیم‌کارت رایتل", url: "https://my.rightel.ir/main/dashboard", icon: "fa-sim-card", category: "simcard" },
  { name: "سیم‌کارت ایرانسل", url: "https://my.irancell.ir/", icon: "fa-sim-card", category: "simcard" },
  { name: "سیم‌کارت همراه اول", url: "https://mci.ir/", icon: "fa-sim-card", category: "simcard" },

  // ===================== قبض و پرداخت =====================
  { name: "قبض رایتل", url: "https://billing.rightel.ir/payment/login", icon: "fa-file-invoice-dollar", category: "simcard" },
  { name: "قبض ایرانسل", url: "https://shop.irancell.ir/fa/bill-payment", icon: "fa-file-invoice-dollar", category: "simcard" },
  { name: "قبض تلفن ثابت", url: "https://my.tci.ir/dashboard/home", icon: "fa-phone", category: "simcard" },
  { name: "پرداخت مالیات", url: "https://payments.tax.gov.ir/", icon: "fa-file-invoice-dollar", category: "simcard" },

  // ===================== خدمات قضایی و ثنا =====================
  { name: "ثبت‌نام ثنا", url: "https://sana.adliran.ir/Sana/RealRegister", icon: "fa-user-check", category: "justice" },
  { name: "مشاهده ابلاغ قضایی", url: "https://iehraz.adliran.ir/Login/Authenticate?ReturnUrl=http://eblagh.adliran.ir/Dashboard/NoticeIndex&SystemName=ENoticeServices", icon: "fa-envelope-open-text", category: "justice" },
  { name: "تغییر مشخصات ثنا", url: "https://sana.adliran.ir/", icon: "fa-user-edit", category: "justice" },
  { name: "گواهی عدم سوءپیشینه", url: "https://iehraz.adliran.ir/Login/Authenticate?ReturnUrl=http://adliran.ir/JssClearanceCertRequest/SelfIndex&SystemName=JssClearanceCertRequestService&isSelectNaturalPerson=True&isSelectNaturalForigenPerson=False&isSelectLegalPerson=False&isSelectJudPerson=False&LoginTitle=%d8%ab%d8%a8%d8%aa%20%d8%af%d8%b1%d8%ae%d9%88%d8%a7%d8%b3%d8%aa%20%da%af%d9%88%d8%a7%d9%87%db%8c%20%d8%b9%d8%af%d9%85%20%d8%b3%d9%88%d8%a1%20%d9%be%db%8c%d8%b4%db%8c%d9%86%d9%87", icon: "fa-id-card-clip", category: "justice" },
  { name: "سامانه ثنا", url: "https://adliran.ir/", icon: "fa-balance-scale", category: "justice" },
  { name: "پلیس +۱۰", url: "https://epolice.ir/", icon: "fa-building-shield", category: "justice" },
  { name: "سامانه سخا (وظیفه)", url: "https://vazifeh.police.ir/", icon: "fa-user-shield", category: "justice" },
  { name: "استعلام گذرنامه زیارتی", url: "https://pwa.police-man.ir/#/getPassport", icon: "fa-passport", category: "justice" },
  { name: "استعلام پاسپورت", url: "https://pwa.police-man.ir/#/passport", icon: "fa-passport", category: "justice" },

  // ===================== خودرو و حمل‌ونقل =====================
  { name: "ایران خودرو", url: "https://ikco.ir/", icon: "fa-car", category: "car" },
  { name: "سایپا", url: "https://saipa.iranecar.com/", icon: "fa-car", category: "car" },
  { name: "بهمن موتور", url: "https://bahman.ir/", icon: "fa-car", category: "car" },
  { name: "خلافی خودرو", url: "https://sakha.epolice.ir/portal/login", icon: "fa-car-crash", category: "car" },
  { name: "معاینه فنی", url: "https://my.upto.ir/Account/Redirect", icon: "fa-car-side", category: "car" },
  { name: "کارت سوخت", url: "https://fcs.niopdc.ir/", icon: "fa-gas-pump", category: "car" },
  { name: "ثبت‌نام کویر تایر", url: "https://www.kavirtire.ir/index.php/esale/register", icon: "fa-car-battery", category: "car" },
  { name: "فروشگاه ایران تایر", url: "https://eshop.irantire.ir/", icon: "fa-car-battery", category: "car" },
  { name: "مدیریت مرکزی حمل‌ونقل", url: "https://utcms.ir/", icon: "fa-truck", category: "car" },

  // ===================== بیمه و تأمین اجتماعی =====================
  { name: "خدمات تأمین اجتماعی", url: "https://eservices.tamin.ir/view/#/", icon: "fa-shield-alt", category: "insurance" },
  { name: "ثبت‌نام بیمه تأمین اجتماعی", url: "https://profile.tamin.ir/main/registration", icon: "fa-user-plus", category: "insurance" },
  { name: "پرداخت بیمه مشاغل آزاد", url: "https://eservices.tamin.ir/view/#/optional-insurance/freelance-pay-premium", icon: "fa-money-bill-wave", category: "insurance" },
  { name: "پرداخت بیمه دانشجویی", url: "https://eservices.tamin.ir/view/#/optional-insurance/freelance-pay-premium-student", icon: "fa-graduation-cap", category: "insurance" },
  { name: "مشاهده فیش حقوقی", url: "https://eservices.tamin.ir/view/#/edict-payment", icon: "fa-file-invoice-dollar", category: "insurance" },
  { name: "گواهی کسر از حقوق", url: "https://eservices.tamin.ir/view/#/wage-assignment", icon: "fa-file-signature", category: "insurance" },
  { name: "بیمه شخص ثالث", url: "https://www.centinsur.ir/fa-IR/Portal/4987/page/%D8%A7%D8%B3%D8%AA%D8%B9%D9%84%D8%A7%D9%85-%D8%A8%DB%8C%D9%85%D9%87-%D9%86%D8%A7%D9%85%D9%87-", icon: "fa-car-side", category: "insurance" },
  { name: "بیمه سلامت", url: "https://csp.ihio.gov.ir/", icon: "fa-heartbeat", category: "insurance" }, // لینک اصلی لاگین بیمه سلامت

  // ===================== وام و تسهیلات =====================
  { name: "وام فرزندآوری", url: "https://ve.cbi.ir/vc/TasRequestVC.aspx", icon: "fa-baby", category: "loan" },
  { name: "وام ازدواج", url: "https://ve.cbi.ir/DefaultVE.aspx", icon: "fa-ring", category: "loan" },
  { name: "وام ودیعه مسکن", url: "https://saman.mrud.ir/profile", icon: "fa-home", category: "loan" },
  { name: "بانک قرض‌الحسنه مهر", url: "https://qbank24.ir/qbankpwa/#/", icon: "fa-piggy-bank", category: "loan" },
  { name: "استعلام چک صیادی", url: "https://cbi.ir/EstelamSayad/24090.aspx", icon: "fa-money-check", category: "loan" },

  // ===================== کد پستی و پست =====================
  { name: "تاییدیه کد پستی", url: "https://amlak.mrud.ir/", icon: "fa-map-marker-alt", category: "other" },
  { name: "مشاهده کد پستی", url: "https://gnaf.post.ir/portal/", icon: "fa-map-marked-alt", category: "other" },
  { name: "پست پیشتاز و مرسوله", url: "https://tracking.post.ir/", icon: "fa-truck", category: "other" },
  { name: "سایت احراز نشانی پست", url: "https://ehraz.post.ir/", icon: "fa-map-pin", category: "other" },

  // ===================== سایر خدمات عمومی =====================
  { name: "سامانه ثبت من (احوال)", url: "https://www.sabteahval.ir/", icon: "fa-id-card", category: "other" },
  { name: "سامانه سها (امداد)", url: "https://soha.emdad.ir/mis/f?p=900:9999", icon: "fa-hands-helping", category: "other" },
  { name: "ثبت‌نام نفت سفید", url: "https://newtejaratasan.niopdc.ir/", icon: "fa-fire", category: "other" },

  // ===================== آموزش و کتاب =====================
  { name: "دانشگاه آزاد اسلامی", url: "https://edu.iau.ac.ir/", icon: "fa-university", category: "other" },
  { name: "کتاب‌های درسی", url: "http://irtextbook.ir", icon: "fa-book", category: "other" },
  { name: "اعتراض به یارانه", url: "https://hemayat.sfara.ir/", icon: "fa-user-graduate", category: "other" },
  { name: "جداسازی یارانه", url: "http://ncr.ir/", icon: "fa-user-graduate", category: "other" },

  // ===================== ابزارهای کاربردی =====================
  { name: "کم کردن حجم تصاویر", url: "https://opt.imum.ir/", icon: "fa-images", category: "other" },
  { name: "قرعه‌کشی مشتریان", url: "lottery.html", icon: "fa-dice-six", category: "other" },
  { name: "فروش پاورپوینت", url: "https://fan.sellfile.ir/", icon: "fa-file", category: "other" },
  { name: "دوگانه سوز خودرو", url: "http://gcr.niopdc.ir/", icon: "fa-car", category: "car" },
  { name: "سامانه واکسن", url: "https://vcr.salamat.gov.ir/fa", icon: "fa-syringe", category: "other" },

  // ===================== خدمات جدید اضافه شده =====================
  { name: "سامانه سیمین", url: "https://simin.hadafmandi.ir/login", icon: "fa-database", category: "other" },
  { name: "فیش حکم بازنشستگان کشوری", url: "https://auth.cspf.ir/Auth/login", icon: "fa-file-invoice", category: "insurance" },
  { name: "ایران خودرو (فروش)", url: "https://ikcosales.ir/login", icon: "fa-car", category: "car" },
  { name: "سایت استخدامی دستگاه های اجرایی", url: "https://hrtc.ir/", icon: "fa-briefcase", category: "other" },
  { name: "سازمان سنجش", url: "https://sanjesh.org/fa-IR/sanjesh/4955/page/%D8%AB%D8%A8%D8%AA-%D9%86%D8%A7%D9%85-%D8%B3%D8%B1%D8%A7%D8%B3%D8%B1%DB%8C", icon: "fa-graduation-cap", category: "other" },
  { name: "تبدیل خودرو به گازسوز", url: "https://gcr.niopdc.ir/Login", icon: "fa-gas-pump", category: "car" },
  { name: "پروانه اشتغال رانندگان", url: "https://utcms.ir/DriverDefault.aspx", icon: "fa-id-card", category: "car" },
  { name: "سامانه سهام عدالت", url: "https://sahamedalat.ir/", icon: "fa-hand-holding-usd", category: "loan" },
];

// ساخت کارت
function createCard(service) {
  const col = document.createElement('div');
  col.className = 'col';
  col.innerHTML = `
    <a href="${service.url}" target="_blank" class="card text-decoration-none h-100 text-center">
      <div class="card-body d-flex flex-column justify-content-center align-items-center">
        <i class="fas ${service.icon} fa-2x mb-3"></i>
        <h5 class="card-title">${service.name}</h5>
      </div>
    </a>
  `;
  return col;
}

// پخش کارت‌ها در بخش‌های مربوطه
services.forEach(service => {
  const grid = document.getElementById(service.category + "-grid");
  if (grid) {
    grid.appendChild(createCard(service));
  } else {
    console.warn(`Grid نه پیدا شد: ${service.category}-grid برای ${service.name}`);
  }
});