const services = [
  { name: "کم کردن حجم تصاویر", url: "https://opt.imum.ir/", icon: "fa-tachometer-alt" },
  { name: "  مدیریت مرکزی حمل ونقل", url: "https://utcms.ir/", icon: "fa-compress" },
  { name: "سامانه سیمین هدفمندی", url: "https://simin.hadafmandi.ir/login", icon: "fa-user-graduate" },
  { name: "دانشگاه آزاد اسلامی", url: "https://edu.iau.ac.ir/", icon: "fa-university" },
  { name: "صندوق حمایت وکلا", url: "https://hemayat.sfara.ir/", icon: "fa-gavel" },
  { name: "کتاب‌های درسی", url: "http://irtextbook.ir", icon: "fa-book" },
  { name: "خدمات تأمین اجتماعی", url: "https://eservices.tamin.ir/view/#/", icon: "fa-shield-alt" },
  { name: "ثبت‌نام بیمه تأمین اجتماعی", url: "https://profile.tamin.ir/main/registration", icon: "fa-user-plus" },
  { name: "پرداخت بیمه مشاغل آزاد", url: "https://eservices.tamin.ir/view/#/optional-insurance/freelance-pay-premium", icon: "fa-money-bill-wave" },
  { name: "پرداخت بیمه دانشجویی", url: "https://eservices.tamin.ir/view/#/optional-insurance/freelance-pay-premium-student", icon: "fa-graduation-cap" },
  { name: "مشاهده فیش حقوقی", url: "https://eservices.tamin.ir/view/#/edict-payment", icon: "fa-file-invoice-dollar" },
  { name: "گواهی کسر از حقوق", url: "https://eservices.tamin.ir/view/#/wage-assignment", icon: "fa-file-signature" },
  { name: "سامانه سها (کمیته امداد)", url: "https://soha.emdad.ir/mis/f?p=900:9999", icon: "fa-hands-helping" },
  { name: "کارت سوخت", url: "https://fcs.niopdc.ir/", icon: "fa-gas-pump" },
  { name: "ثبت‌نام نفت سفید", url: "https://newtejaratasan.niopdc.ir/", icon: "fa-fire" },
  { name: "بانک قرض‌الحسنه مهر", url: "https://qbank24.ir/qbankpwa/#/", icon: "fa-piggy-bank" },
  { name: "استعلام گذرنامه زیارتی", url: "https://pwa.police-man.ir/#/getPassport", icon: "fa-passport" },
  { name: "استعلام پاسپورت", url: "https://pwa.police-man.ir/#/passport", icon: "fa-passport" },
  { name: "معاینه فنی خودرو", url: "https://my.upto.ir/Account/Redirect", icon: "fa-car" },
  { name: "خلافی خودرو", url: "https://sakha.epolice.ir/portal/login", icon: "fa-car-crash" },
  { name: "بیمه شخص ثالث", url: "https://www.centinsur.ir/fa-IR/Portal/4987/page/%D8%A7%D8%B3%D8%AA%D8%B9%D9%84%D8%A7%D9%85-%D8%A8%DB%8C%D9%85%D9%87-%D9%86%D8%A7%D9%85%D9%87-", icon: "fa-car-side" },
  { name: "استعلام چک صیادی", url: "https://cbi.ir/EstelamSayad/24090.aspx", icon: "fa-money-check" },

  // چند تا سایت خیلی کاربردی که خودم اضافه کردم
  { name: "سامانه ثنا (قوه قضاییه)", url: "https://adliran.ir/", icon: "fa-balance-scale" },
  { name: "پلیس +۱۰", url: "https://epolice.ir/", icon: "fa-building-shield" },
  { name: "سامانه سخا (سرویس وظیفه)", url: "https://vazifeh.police.ir/", icon: "fa-user-shield" },
  { name: "پست پیشتاز و یافتن مرسوله", url: "https://tracking.post.ir/", icon: "fa-truck" },
  { name: "سامانه ثبت من (ثبت احوال)", url: "https://www.sabteahval.ir/", icon: "fa-id-card" },
  { name: "پرداخت مالیات (امور مالیاتی)", url: "https://payments.tax.gov.ir/", icon: "fa-file-invoice-dollar" },
  { name: "چک صیادی بانک ملی", url: "https://sayad.bmi.ir/auth/signin", icon: "fa-money-check-alt" },
  { name: "چک صیادی بانک توسعه تعاون", url: "https://vb.ttbank.ir/landing/not-found", icon: "fa-money-check-alt" },
  { name: "چک صیادی بانک پارسیان (پیچک)", url: "https://pichak.parsian-bank.ir/", icon: "fa-money-check-alt" },
  { name: "چک صیادی بانک کشاورزی", url: "https://ib.bki.ir/pid162.lmx", icon: "fa-money-check-alt" },
  { name: "چک صیادی بانک پاسارگاد", url: "https://oauth.bpi.ir/Account/LoginMobileNational?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3FauthzId%3DF0175386E71053138A39AA22DC0C21E7B1960491BED5ADA1F78E71909033BCF3", icon: "fa-money-check-alt" },
  // === وام و تسهیلات ===
  { name: "ثبت‌نام وام فرزندآوری", url: "https://ve.cbi.ir/vc/TasRequestVC.aspx", icon: "fa-baby" },
  { name: "وام ودیعه مسکن (سامان)", url: "https://saman.mrud.ir/profile", icon: "fa-home" },
  { name: "ثبت‌نام وام ازدواج", url: "https://ve.cbi.ir/DefaultVE.aspx", icon: "fa-ring" },

  // === تایر و خودرو ===
  { name: "ثبت‌نام کویر تایر", url: "https://www.kavirtire.ir/index.php/esale/register", icon: "fa-car-battery" },
  { name: "فروشگاه ایران تایر", url: "https://eshop.irantire.ir/", icon: "fa-car-battery" },
];

const grid = document.getElementById('services-grid');

services.forEach(service => {
  const col = document.createElement('div');
  col.className = 'col';
  col.setAttribute('data-aos', 'fade-up');

  col.innerHTML = `
    <a href="${service.url}" target="_blank" class="card text-decoration-none h-100 text-center">
      <div class="card-body d-flex flex-column justify-content-center align-items-center">
        <i class="fas ${service.icon} mb-3"></i>
        <h5 class="card-title">${service.name}</h5>
      </div>
    </a>
  `;

  grid.appendChild(col);
});