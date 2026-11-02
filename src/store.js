// Preview for "Homemade Cake" (facebook.com/profile.php?id=61594359029077)
// Product names and prices are SAMPLE values until the seller confirms real ones.

export const store = {
  name: "হোমমেড কেক",
  nameLatin: "Homemade Cake",
  tagline: "যাত্রাবাড়ীর ঘরোয়া কিচেন থেকে টাটকা কেক আর বেকারি আইটেম, ঢাকার মধ্যে হোম ডেলিভারি।",
  about:
    "জন্মদিন, বিয়ে, অফিস পার্টি — যেকোনো অনুষ্ঠানের জন্য অর্ডার অনুযায়ী কেক বানাই। ডিজাইন আর লেখা আপনার পছন্দমতো।",

  previewNote: "এটি একটি ডেমো। পণ্যের নাম ও দাম নমুনা — আপনার আসল তথ্য বসিয়ে দেওয়া হবে।",

  whatsapp: "8801410014512",
  messengerUsername: "61594359029077",
  facebookUrl: "https://www.facebook.com/profile.php?id=61594359029077",
  phoneDisplay: "০১৪১০-০১৪৫১২",
  address: "শেখপাড়া, দক্ষিণ যাত্রাবাড়ী, ঢাকা ১২০৫",
  hours: "অর্ডার নেওয়া হয় প্রতিদিন",

  delivery: [
    { id: "near", label: "যাত্রাবাড়ী ও আশেপাশে", fee: 60, time: "অর্ডারের দিন" },
    { id: "dhaka", label: "ঢাকার অন্য এলাকায়", fee: 120, time: "১ দিন" },
  ],
  payment: ["ক্যাশ অন ডেলিভারি", "বিকাশ"],

  lang: "bn",
  builtBy: "Kazi Marzuk",
  builtByUrl: "https://wa.me/8801700000000",

  categories: [
    { id: "cake", label: "কেক" },
    { id: "party", label: "অনুষ্ঠানের কেক" },
    { id: "small", label: "কাপকেক ও অন্যান্য" },
  ],

  products: [
    {
      id: "h1",
      name: "স্পেশাল বার্থডে কেক (১ পাউন্ড)",
      category: "cake",
      price: 700,
      image: "photos/h1.jpg",
      description: "ঘরে বানানো স্পঞ্জ কেক, ক্রিম ডিজাইন আর নাম লেখা সহ।",
      tag: "জনপ্রিয়",
    },
    {
      id: "h2",
      name: "লেয়ার্ড অনুষ্ঠানের কেক",
      category: "party",
      price: 3200,
      image: "photos/h2.jpg",
      description: "বিয়ে, গায়ে হলুদ বা বড় অনুষ্ঠানের জন্য। অন্তত ২ দিন আগে অর্ডার দিন।",
      tag: "অর্ডারে তৈরি",
    },
    {
      id: "h3",
      name: "ক্রিম ডিজাইন কেক (২ পাউন্ড)",
      category: "cake",
      price: 1350,
      image: "photos/h3.jpg",
      description: "পরিবারের ছোট অনুষ্ঠানের জন্য উপযুক্ত সাইজ।",
    },
    {
      id: "h4",
      name: "চকলেট কেক (১ পাউন্ড)",
      category: "cake",
      price: 800,
      image: "photos/h4.jpg",
      description: "চকলেট স্পঞ্জ আর চকলেট ক্রিম।",
    },
    {
      id: "h5",
      name: "কাস্টম লেখা কেক (১ পাউন্ড)",
      category: "party",
      price: 750,
      image: "photos/h5.jpg",
      description: "যেকোনো শুভেচ্ছা বা নাম লিখে দেওয়া হয়। নোটে লেখাটা জানিয়ে দিন।",
    },
    {
      id: "h6",
      name: "কাপকেক (৬ পিস)",
      category: "small",
      price: 480,
      image: "photos/h6.jpg",
      description: "বাচ্চাদের পার্টি বা অফিসের জন্য। ১২ পিসও অর্ডার করা যায়।",
    },
  ],
};
