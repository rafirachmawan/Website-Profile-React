import React, { useState, useEffect } from "react";
import { 
  Wifi, 
  Battery, 
  Signal, 
  ArrowLeft, 
  Check, 
  Lock, 
  User, 
  ShoppingCart, 
  Coffee, 
  CreditCard, 
  ChevronRight, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  Plus, 
  Minus, 
  Trash2, 
  Loader2, 
  Car, 
  Gauge, 
  Zap, 
  Compass, 
  Sparkles,
  Smartphone,
  Info
} from "lucide-react";

const MobileEmulator = ({ project, onClose }) => {
  // Determine which app to open initially
  const getInitialApp = () => {
    if (!project) return "spp";
    const title = project.title.toLowerCase();
    if (title.includes("spp")) return "spp";
    if (title.includes("kasir") || title.includes("pos")) return "kasir";
    if (title.includes("rental") || title.includes("mobil")) return "rental";
    return "spp";
  };

  const [activeApp, setActiveApp] = useState(getInitialApp());

  // App 1: SPP States
  const [sppScreen, setSppScreen] = useState("login"); // login, faceid, dashboard, payment, success
  const [faceIdSuccess, setFaceIdSuccess] = useState(false);
  const [sppPaid, setSppPaid] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("dana");
  const [sppProcessing, setSppProcessing] = useState(false);

  // App 2: Kasir States
  const [kasirScreen, setKasirScreen] = useState("catalog"); // catalog, cart, receipt
  const [cart, setCart] = useState([]);
  const [cashPaid, setCashPaid] = useState(100000);
  const [receiptNumber, setReceiptNumber] = useState("INV-98231");

  // App 3: Rental States
  const [rentalScreen, setRentalScreen] = useState("list"); // list, booking, status
  const [selectedCar, setSelectedCar] = useState(null);
  const [rentalDays, setRentalDays] = useState(2);
  const [rentalProcessing, setRentalProcessing] = useState(false);

  // Time clock inside the phone
  const [currentTime, setCurrentTime] = useState("09:41");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Handlers for SPP
  const handleSppLogin = () => {
    setSppScreen("faceid");
    setFaceIdSuccess(false);
    setTimeout(() => {
      setFaceIdSuccess(true);
      setTimeout(() => {
        setSppScreen("dashboard");
      }, 1000);
    }, 2000);
  };

  const handleSppPay = () => {
    setSppProcessing(true);
    setTimeout(() => {
      setSppProcessing(false);
      setSppPaid(true);
      setSppScreen("success");
    }, 1800);
  };

  const resetSpp = () => {
    setSppPaid(false);
    setSppScreen("dashboard");
  };

  // Handlers for Kasir POS
  const products = [
    { id: 1, name: "Espresso", price: 18000, category: "Coffees" },
    { id: 2, name: "Cappuccino", price: 25000, category: "Coffees" },
    { id: 3, name: "Matcha Latte", price: 28000, category: "Non-Coffees" },
    { id: 4, name: "Croissant", price: 22000, category: "Snacks" },
  ];

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const updateQty = (id, change) => {
    setCart(cart.map((item) => {
      if (item.id === id) {
        const newQty = item.qty + change;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getSubtotal = () => cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const getTax = () => Math.round(getSubtotal() * 0.1);
  const getTotal = () => getSubtotal() + getTax();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setReceiptNumber(`INV-${Math.floor(10000 + Math.random() * 90000)}`);
    setKasirScreen("receipt");
  };

  const resetKasir = () => {
    setCart([]);
    setKasirScreen("catalog");
  };

  // Handlers for Rental
  const cars = [
    { id: 1, name: "Porsche 911 Carrera", price: 4500000, image: "🏎️", speed: "308 km/h", power: "385 HP", fuel: "Petrol" },
    { id: 2, name: "Tesla Model S Plaid", price: 3500000, image: "⚡", speed: "322 km/h", power: "1020 HP", fuel: "Electric" },
    { id: 3, name: "Ford Mustang GT", price: 3000000, image: "🐎", speed: "250 km/h", power: "460 HP", fuel: "Petrol" },
  ];

  const handleSelectCar = (car) => {
    setSelectedCar(car);
    setRentalScreen("booking");
  };

  const handleConfirmRental = () => {
    setRentalProcessing(true);
    setTimeout(() => {
      setRentalProcessing(false);
      setRentalScreen("status");
    }, 1800);
  };

  return (
    <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-all duration-300">
      {/* Container Grid: Kiri Penjelasan, Kanan Phone */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors cursor-pointer"
        >
          ✕
        </button>

        {/* LEFT PANEL: DETAILS & APP SELECTOR */}
        <div className="w-full md:w-1/2 flex flex-col justify-between h-full text-white">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs px-3 py-1 rounded-full font-semibold tracking-wide uppercase flex items-center gap-1">
                <Smartphone size={12} /> Interactive Emulator
              </span>
              <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs px-3 py-1 rounded-full font-semibold uppercase flex items-center gap-1">
                <Sparkles size={12} /> Live Demo
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Demo Aplikasi <span className="text-blue-400">Interaktif</span>
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Silakan mencoba langsung aplikasi di dalam emulator handphone di sebelah kanan! Ini adalah simulasi alur kerja aplikasi mobile riil yang telah saya kembangkan. Klik, ketik, dan rasakan animasi micro-interactions di dalamnya.
            </p>

            {/* SELEKTOR APP MANUAL */}
            <div className="space-y-3 mb-6">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Pilih Aplikasi untuk Dicoba:</p>
              
              <button 
                onClick={() => { setActiveApp("spp"); setSppScreen("login"); }}
                className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition ${
                  activeApp === "spp" 
                    ? "bg-blue-600/10 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.15)]" 
                    : "bg-gray-800/40 border-gray-800 text-gray-400 hover:bg-gray-800/60 hover:text-white"
                }`}
              >
                <div>
                  <h4 className="text-sm font-semibold">Sistem Pembayaran SPP (Mobile)</h4>
                  <p className="text-xs opacity-75">Simulasi FinTech tagihan sekolah & scanner Face ID</p>
                </div>
                <ChevronRight size={16} />
              </button>

              <button 
                onClick={() => { setActiveApp("kasir"); setKasirScreen("catalog"); }}
                className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition ${
                  activeApp === "kasir" 
                    ? "bg-blue-600/10 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.15)]" 
                    : "bg-gray-800/40 border-gray-800 text-gray-400 hover:bg-gray-800/60 hover:text-white"
                }`}
              >
                <div>
                  <h4 className="text-sm font-semibold">Aplikasi Kasir POS Cafe</h4>
                  <p className="text-xs opacity-75">Pesan kopi, kelola keranjang belanja & cetak struk</p>
                </div>
                <ChevronRight size={16} />
              </button>

              <button 
                onClick={() => { setActiveApp("rental"); setRentalScreen("list"); }}
                className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition ${
                  activeApp === "rental" 
                    ? "bg-blue-600/10 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.15)]" 
                    : "bg-gray-800/40 border-gray-800 text-gray-400 hover:bg-gray-800/60 hover:text-white"
                }`}
              >
                <div>
                  <h4 className="text-sm font-semibold">LuxRide Car Rental App</h4>
                  <p className="text-xs opacity-75">Katalog supercar, booking hari & status live</p>
                </div>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 flex gap-2 items-start text-xs text-gray-500 leading-normal">
            <Info size={16} className="text-blue-500 shrink-0 mt-0.5" />
            <p>Dibangun menggunakan React Tailwind v4 modular dengan integrasi state internal responsif tinggi.</p>
          </div>
        </div>

        {/* RIGHT PANEL: PHONE EMULATOR (iPhone 15 Pro) */}
        <div className="w-full md:w-1/2 flex justify-center">
          {/* Phone Shell */}
          <div className="relative w-[290px] aspect-[9/19.5] bg-gray-950 border-[6px] border-gray-800 rounded-[45px] shadow-[0_0_40px_rgba(0,255,255,0.25),0_15px_35px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between select-none">
            
            {/* Dynamic Island */}
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-5.5 bg-black rounded-full z-40 flex items-center justify-center text-white text-[9px] hover:w-32 hover:h-6 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-blue-900 absolute right-4"></div>
              {/* Glowing camera lens */}
              <div className="text-gray-500 font-semibold tracking-widest text-[7px]">Kamera</div>
            </div>

            {/* iOS Status Bar */}
            <div className="bg-gray-950 text-white text-[10px] font-semibold px-6 pt-2 pb-1.5 flex justify-between items-center z-30">
              <span>{currentTime}</span>
              <div className="flex items-center gap-1.5">
                <Signal size={10} className="text-white" />
                <Wifi size={10} className="text-white" />
                <Battery size={12} className="text-white rotate-0" />
              </div>
            </div>

            {/* SCREEN CONTENT */}
            <div className="flex-1 bg-gray-950 relative flex flex-col overflow-y-auto text-white overflow-x-hidden">
              
              {/* ======================================= */}
              {/* SCREEN 1: SPP PAYMENT SYSTEM */}
              {/* ======================================= */}
              {activeApp === "spp" && (
                <div className="flex-1 flex flex-col bg-slate-900 justify-between">
                  {/* APP HEADER */}
                  <div className="bg-slate-800 p-4 pt-3 flex items-center justify-between shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-600 p-1 rounded-md text-xs font-bold text-white">SP</span>
                      <span className="font-bold text-xs tracking-tight">SPP-Pay Portal</span>
                    </div>
                    {sppScreen !== "login" && (
                      <button 
                        onClick={() => setSppScreen("login")}
                        className="text-[10px] text-red-400 hover:text-red-300 font-semibold flex items-center gap-0.5 cursor-pointer"
                      >
                        Keluar
                      </button>
                    )}
                  </div>

                  {/* APP BODY */}
                  <div className="flex-1 p-4 flex flex-col justify-center">
                    {/* Screen: Login */}
                    {sppScreen === "login" && (
                      <div className="space-y-4">
                        <div className="text-center space-y-1 mb-2">
                          <div className="inline-block p-3 bg-blue-600/10 rounded-full border border-blue-500/20 text-blue-400">
                            <Lock size={24} />
                          </div>
                          <h4 className="text-sm font-bold">Portal Keuangan Siswa</h4>
                          <p className="text-[10px] text-gray-400">Aman, Cepat & Terintegrasi</p>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Username</label>
                          <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 flex items-center gap-2">
                            <User size={12} className="text-gray-500" />
                            <input 
                              type="text" 
                              value="rafirachmawan" 
                              disabled 
                              className="bg-transparent text-xs text-white focus:outline-none w-full cursor-not-allowed" 
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Password</label>
                          <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 flex items-center gap-2">
                            <Lock size={12} className="text-gray-500" />
                            <input 
                              type="password" 
                              value="••••••••••••••" 
                              disabled 
                              className="bg-transparent text-xs text-white focus:outline-none w-full cursor-not-allowed" 
                            />
                          </div>
                        </div>

                        <button 
                          onClick={handleSppLogin}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-xs transition duration-200 mt-2 cursor-pointer active:scale-95 flex items-center justify-center gap-1 shadow-lg shadow-blue-600/30"
                        >
                          <Smartphone size={12} /> Login FaceID
                        </button>
                      </div>
                    )}

                    {/* Screen: Face ID Scanning */}
                    {sppScreen === "faceid" && (
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="relative w-20 h-20 flex items-center justify-center">
                          {/* FaceID Scanning frame */}
                          <div className={`absolute inset-0 border-2 rounded-full ${faceIdSuccess ? "border-green-500 scale-105" : "border-blue-500 border-t-transparent animate-spin"} transition-all duration-300`}></div>
                          <div className="bg-slate-800 p-4 rounded-full">
                            <User size={28} className={faceIdSuccess ? "text-green-500" : "text-blue-400 animate-pulse"} />
                          </div>
                        </div>
                        <p className="text-[11px] font-semibold text-center text-gray-300">
                          {faceIdSuccess ? "Face ID Dikenali!" : "Memindai Wajah..."}
                        </p>
                      </div>
                    )}

                    {/* Screen: Dashboard */}
                    {sppScreen === "dashboard" && (
                      <div className="space-y-4 text-left flex-1 flex flex-col justify-between">
                        {/* Student Info */}
                        <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                            R
                          </div>
                          <div>
                            <h5 className="text-xs font-bold leading-none">Rafi Rachmawan</h5>
                            <span className="text-[9px] text-gray-400">NISN: 004812398</span>
                          </div>
                        </div>

                        {/* Bill Card */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-3 shadow-lg flex flex-col justify-between aspect-video">
                          <div>
                            <p className="text-[9px] text-blue-100 font-semibold uppercase tracking-wider">Tagihan SPP Aktif</p>
                            <h4 className="text-lg font-extrabold mt-0.5">
                              {sppPaid ? "Rp 0" : "Rp 500.000"}
                            </h4>
                          </div>
                          <div className="flex justify-between items-end text-[9px] text-blue-100">
                            <div>
                              <p className="opacity-75">Bulan Tagihan</p>
                              <p className="font-bold">Mei 2026</p>
                            </div>
                            <span className={`px-2 py-0.5 rounded-full font-bold uppercase text-[8px] ${
                              sppPaid ? "bg-green-500 text-white" : "bg-yellow-400 text-slate-900"
                            }`}>
                              {sppPaid ? "Lunas" : "Belum Bayar"}
                            </span>
                          </div>
                        </div>

                        {/* History */}
                        <div className="space-y-1">
                          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Riwayat Pembayaran</p>
                          <div className="space-y-1.5 max-h-20 overflow-y-auto">
                            {sppPaid && (
                              <div className="bg-slate-800/50 p-2 rounded-lg flex items-center justify-between border border-green-500/20">
                                <span className="text-[10px]">SPP Mei 2026</span>
                                <span className="text-[9px] font-bold text-green-400 flex items-center gap-0.5"><Check size={8} /> Lunas</span>
                              </div>
                            )}
                            <div className="bg-slate-800/50 p-2 rounded-lg flex items-center justify-between">
                              <span className="text-[10px]">SPP April 2026</span>
                              <span className="text-[9px] font-bold text-green-400 flex items-center gap-0.5"><Check size={8} /> Lunas</span>
                            </div>
                            <div className="bg-slate-800/50 p-2 rounded-lg flex items-center justify-between">
                              <span className="text-[10px]">SPP Maret 2026</span>
                              <span className="text-[9px] font-bold text-green-400 flex items-center gap-0.5"><Check size={8} /> Lunas</span>
                            </div>
                          </div>
                        </div>

                        {/* Pay Button */}
                        {!sppPaid && (
                          <button 
                            onClick={() => setSppScreen("payment")}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-xs mt-2 cursor-pointer flex items-center justify-center gap-1 active:scale-95"
                          >
                            <CreditCard size={12} /> Bayar Sekarang
                          </button>
                        )}
                      </div>
                    )}

                    {/* Screen: Payment Options */}
                    {sppScreen === "payment" && (
                      <div className="space-y-4 text-left flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1 mb-3 cursor-pointer" onClick={() => setSppScreen("dashboard")}>
                            <ArrowLeft size={12} className="text-gray-400" />
                            <span className="text-[10px] text-gray-400">Kembali</span>
                          </div>

                          <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Metode Pembayaran</h5>

                          <div className="space-y-2">
                            <div 
                              onClick={() => setSelectedPayment("dana")}
                              className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition ${
                                selectedPayment === "dana" ? "bg-slate-800 border-blue-500 text-white" : "bg-slate-800/40 border-transparent text-gray-400 hover:bg-slate-800/60"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-[10px]">D</span>
                                <span className="text-xs font-semibold">DANA Wallet</span>
                              </div>
                              {selectedPayment === "dana" && <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center"><Check size={8} className="text-white" /></div>}
                            </div>

                            <div 
                              onClick={() => setSelectedPayment("gopay")}
                              className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition ${
                                selectedPayment === "gopay" ? "bg-slate-800 border-blue-500 text-white" : "bg-slate-800/40 border-transparent text-gray-400 hover:bg-slate-800/60"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-[10px]">G</span>
                                <span className="text-xs font-semibold">GoPay</span>
                              </div>
                              {selectedPayment === "gopay" && <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center"><Check size={8} className="text-white" /></div>}
                            </div>

                            <div 
                              onClick={() => setSelectedPayment("bca")}
                              className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition ${
                                selectedPayment === "bca" ? "bg-slate-800 border-blue-500 text-white" : "bg-slate-800/40 border-transparent text-gray-400 hover:bg-slate-800/60"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-[10px]">B</span>
                                <span className="text-xs font-semibold">Virtual Account BCA</span>
                              </div>
                              {selectedPayment === "bca" && <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center"><Check size={8} className="text-white" /></div>}
                            </div>
                          </div>
                        </div>

                        {/* Pay Confirm */}
                        <button 
                          onClick={handleSppPay}
                          disabled={sppProcessing}
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg text-xs mt-2 cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 disabled:bg-slate-700 disabled:cursor-not-allowed"
                        >
                          {sppProcessing ? (
                            <>
                              <Loader2 size={12} className="animate-spin" /> Memproses...
                            </>
                          ) : (
                            <>
                              <CheckCircle2 size={12} /> Konfirmasi Pembayaran
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {/* Screen: Success SPP */}
                    {sppScreen === "success" && (
                      <div className="space-y-4 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full flex items-center justify-center animate-bounce">
                          <CheckCircle2 size={36} />
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-green-400">Pembayaran Sukses!</h4>
                          <p className="text-[10px] text-gray-400">Tagihan SPP Mei 2026 berhasil dibayar</p>
                        </div>

                        <div className="w-full bg-slate-800 rounded-xl p-3 border border-slate-700 text-left space-y-1.5 text-[9px] text-gray-300 font-mono">
                          <div className="flex justify-between">
                            <span>ID Transaksi:</span>
                            <span>TX-882319082</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tanggal:</span>
                            <span>17-05-2026 15:40</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Jumlah:</span>
                            <span className="text-green-400">Rp 500.000</span>
                          </div>
                          <div className="flex justify-between border-t border-slate-700/60 pt-1.5 font-bold">
                            <span>Status:</span>
                            <span className="text-green-400 uppercase">Lunas</span>
                          </div>
                        </div>

                        <button 
                          onClick={resetSpp}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-xs mt-2 cursor-pointer active:scale-95"
                        >
                          Kembali
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ======================================= */}
              {/* SCREEN 2: KASIR POINT-OF-SALE */}
              {/* ======================================= */}
              {activeApp === "kasir" && (
                <div className="flex-1 flex flex-col bg-neutral-900 justify-between">
                  {/* APP HEADER */}
                  <div className="bg-neutral-800 p-3 flex items-center justify-between border-b border-neutral-700">
                    <div className="flex items-center gap-1.5">
                      <Coffee size={14} className="text-amber-500" />
                      <span className="font-bold text-[11px] tracking-wide uppercase">Kopi-Ku POS</span>
                    </div>
                    {kasirScreen === "catalog" && cart.length > 0 && (
                      <button 
                        onClick={() => setKasirScreen("cart")}
                        className="bg-amber-600 text-white px-2 py-0.5 rounded text-[8px] font-bold flex items-center gap-1 animate-pulse cursor-pointer"
                      >
                        <ShoppingCart size={8} /> Keranjang ({cart.reduce((s,i) => s+i.qty, 0)})
                      </button>
                    )}
                  </div>

                  {/* APP BODY */}
                  <div className="flex-1 p-3 flex flex-col justify-start">
                    
                    {/* Screen: POS Catalog */}
                    {kasirScreen === "catalog" && (
                      <div className="space-y-3 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider text-left">Daftar Menu:</p>
                          
                          <div className="grid grid-cols-2 gap-2">
                            {products.map((p) => {
                              const inCart = cart.find(item => item.id === p.id);
                              return (
                                <div key={p.id} className="bg-neutral-800/80 border border-neutral-800 p-2.5 rounded-xl text-left flex flex-col justify-between space-y-2 relative">
                                  {inCart && (
                                    <span className="absolute -top-1 -right-1 bg-amber-600 text-white w-4 h-4 rounded-full text-[8px] flex items-center justify-center font-bold">
                                      {inCart.qty}
                                    </span>
                                  )}
                                  <div>
                                    <span className="text-[8px] text-amber-500 font-bold uppercase">{p.category}</span>
                                    <h5 className="text-[10px] font-bold mt-0.5">{p.name}</h5>
                                    <p className="text-[9px] text-gray-400 mt-0.5">Rp {p.price.toLocaleString("id")}</p>
                                  </div>
                                  <button 
                                    onClick={() => addToCart(p)}
                                    className="w-full bg-neutral-700 hover:bg-amber-600 text-white font-bold py-1 rounded text-[9px] transition active:scale-95 flex items-center justify-center gap-0.5 cursor-pointer"
                                  >
                                    <Plus size={10} /> Tambah
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Bottom Total Bar */}
                        {cart.length > 0 && (
                          <div className="bg-neutral-800 p-2.5 rounded-xl border border-neutral-700 flex items-center justify-between mt-4">
                            <div>
                              <p className="text-[8px] text-gray-400 leading-none">Subtotal POS</p>
                              <span className="text-[11px] font-bold text-amber-500">Rp {getSubtotal().toLocaleString("id")}</span>
                            </div>
                            <button 
                              onClick={() => setKasirScreen("cart")}
                              className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-lg text-[9px] font-bold active:scale-95 cursor-pointer"
                            >
                              Checkout
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Screen: Shopping Cart */}
                    {kasirScreen === "cart" && (
                      <div className="space-y-3 text-left flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1 mb-2 cursor-pointer" onClick={() => setKasirScreen("catalog")}>
                            <ArrowLeft size={11} className="text-gray-400" />
                            <span className="text-[9px] text-gray-400 font-bold">Menu</span>
                          </div>

                          <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Keranjang Belanja</h5>

                          {/* Cart Items list */}
                          <div className="space-y-2 max-h-36 overflow-y-auto">
                            {cart.length === 0 ? (
                              <p className="text-[9px] text-gray-500 italic text-center py-4">Keranjang masih kosong.</p>
                            ) : (
                              cart.map((item) => (
                                <div key={item.id} className="bg-neutral-800 p-2 rounded-lg flex items-center justify-between text-xs">
                                  <div>
                                    <h6 className="text-[10px] font-bold leading-tight">{item.name}</h6>
                                    <span className="text-[8px] text-gray-400">Rp {item.price.toLocaleString("id")}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="flex items-center bg-neutral-700 rounded-md">
                                      <button 
                                        onClick={() => updateQty(item.id, -1)}
                                        className="p-1 text-white hover:text-amber-500 cursor-pointer"
                                      >
                                        <Minus size={8} />
                                      </button>
                                      <span className="text-[10px] font-bold px-1.5">{item.qty}</span>
                                      <button 
                                        onClick={() => updateQty(item.id, 1)}
                                        className="p-1 text-white hover:text-amber-500 cursor-pointer"
                                      >
                                        <Plus size={8} />
                                      </button>
                                    </div>
                                    <button 
                                      onClick={() => removeFromCart(item.id)}
                                      className="text-red-500 hover:text-red-400 cursor-pointer"
                                    >
                                      <Trash2 size={10} />
                                    </button>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </div>

                        {/* Calculation summary */}
                        {cart.length > 0 && (
                          <div className="space-y-3">
                            <div className="border-t border-neutral-800 pt-2 space-y-1 text-[9px] text-gray-400">
                              <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>Rp {getSubtotal().toLocaleString("id")}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Pajak (10%):</span>
                                <span>Rp {getTax().toLocaleString("id")}</span>
                              </div>
                              <div className="flex justify-between text-white font-bold text-[10px] border-t border-neutral-800/80 pt-1">
                                <span>TOTAL:</span>
                                <span className="text-amber-500">Rp {getTotal().toLocaleString("id")}</span>
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[8px] text-gray-500 font-bold uppercase">Uang Tunai Pelanggan</label>
                              <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-1.5 flex items-center gap-1.5">
                                <span className="text-[10px] text-gray-500">Rp</span>
                                <input 
                                  type="number" 
                                  value={cashPaid}
                                  onChange={(e) => setCashPaid(Number(e.target.value))}
                                  className="bg-transparent text-[10px] text-white focus:outline-none w-full font-semibold font-mono" 
                                />
                              </div>
                            </div>

                            <button 
                              onClick={handleCheckout}
                              disabled={cashPaid < getTotal()}
                              className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-neutral-800 disabled:text-gray-600 disabled:border-neutral-800 text-white border border-transparent font-bold py-2 rounded-lg text-xs cursor-pointer flex items-center justify-center gap-1 active:scale-95"
                            >
                              <FileText size={12} /> Cetak Struk Kasir
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Screen: Physical-like Thermal Receipt */}
                    {kasirScreen === "receipt" && (
                      <div className="flex-1 flex flex-col justify-between text-black text-left">
                        {/* Simulated Thermal Printer Receipt */}
                        <div className="bg-white rounded p-3 font-mono text-[8px] space-y-2 shadow-inner border border-gray-300 animate-[slideUp_0.8s_ease-out] max-h-48 overflow-y-auto">
                          <div className="text-center font-bold">
                            <h5 className="text-[9px]">KOPI-KU CAFE & RESTO</h5>
                            <p className="font-normal text-[7px] text-gray-500 leading-none mt-0.5">Jl. Tech Portofolio No. 1, React City</p>
                          </div>

                          <div className="border-b border-dashed border-gray-400 py-1 space-y-0.5 text-gray-600 text-[7px]">
                            <div className="flex justify-between">
                              <span>No: {receiptNumber}</span>
                              <span>Kasir: Rafi</span>
                            </div>
                            <div>Tanggal: 17-05-2026 15:42</div>
                          </div>

                          <div className="space-y-1 border-b border-dashed border-gray-400 pb-1">
                            {cart.map((item) => (
                              <div key={item.id} className="flex justify-between">
                                <span>{item.name} x{item.qty}</span>
                                <span>Rp {(item.price * item.qty).toLocaleString("id")}</span>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-0.5 text-right font-bold text-gray-700">
                            <div className="flex justify-between">
                              <span>Pajak (10%):</span>
                              <span>Rp {getTax().toLocaleString("id")}</span>
                            </div>
                            <div className="flex justify-between text-[9px] text-black">
                              <span>TOTAL:</span>
                              <span>Rp {getTotal().toLocaleString("id")}</span>
                            </div>
                          </div>

                          <div className="space-y-0.5 border-t border-dashed border-gray-400 pt-1 text-gray-600 text-[7px]">
                            <div className="flex justify-between">
                              <span>Tunai:</span>
                              <span>Rp {cashPaid.toLocaleString("id")}</span>
                            </div>
                            <div className="flex justify-between text-black font-bold">
                              <span>Kembalian:</span>
                              <span>Rp {(cashPaid - getTotal()).toLocaleString("id")}</span>
                            </div>
                          </div>

                          <div className="text-center text-[7px] text-gray-500 font-bold pt-2 uppercase">
                            *** TERIMA KASIH ***
                          </div>
                        </div>

                        <button 
                          onClick={resetKasir}
                          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 rounded-lg text-xs mt-3 cursor-pointer active:scale-95"
                        >
                          Transaksi Baru
                        </button>
                      </div>
                    )}

                  </div>
                </div>
              )}

              {/* ======================================= */}
              {/* SCREEN 3: CAR RENTAL APP */}
              {/* ======================================= */}
              {activeApp === "rental" && (
                <div className="flex-1 flex flex-col bg-zinc-950 justify-between">
                  {/* APP HEADER */}
                  <div className="bg-zinc-900 p-3.5 flex items-center justify-between border-b border-zinc-800">
                    <div className="flex items-center gap-1.5">
                      <Car size={14} className="text-cyan-500" />
                      <span className="font-extrabold text-[11px] tracking-widest text-cyan-400 uppercase">LuxRide</span>
                    </div>
                    {rentalScreen !== "list" && (
                      <button 
                        onClick={() => setRentalScreen("list")}
                        className="text-[9px] text-gray-400 hover:text-white font-bold uppercase flex items-center gap-0.5 cursor-pointer"
                      >
                        Batal
                      </button>
                    )}
                  </div>

                  {/* APP BODY */}
                  <div className="flex-1 p-3.5 flex flex-col justify-start">
                    
                    {/* Screen: Car Catalogue */}
                    {rentalScreen === "list" && (
                      <div className="space-y-3 text-left">
                        <div className="space-y-0.5">
                          <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">Supercar Rental</h5>
                          <p className="text-[8px] text-gray-400">Berkendara dengan gengsi & performa tinggi</p>
                        </div>

                        <div className="space-y-3 max-h-52 overflow-y-auto pr-0.5">
                          {cars.map((car) => (
                            <div key={car.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2 flex flex-col justify-between relative group hover:border-cyan-500/50 transition">
                              <span className="absolute top-2 right-2 text-xl">{car.image}</span>
                              <div>
                                <h6 className="text-[10px] font-extrabold text-white leading-tight">{car.name}</h6>
                                <p className="text-[9px] text-cyan-400 mt-0.5">Rp {car.price.toLocaleString("id")} <span className="text-[8px] text-gray-500">/ hari</span></p>
                              </div>
                              
                              <div className="flex gap-3 text-[8px] text-gray-400">
                                <span className="flex items-center gap-0.5"><Gauge size={8} /> {car.speed}</span>
                                <span className="flex items-center gap-0.5"><Zap size={8} /> {car.power}</span>
                              </div>

                              <button 
                                onClick={() => handleSelectCar(car)}
                                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-1 rounded-lg text-[9px] transition active:scale-95 cursor-pointer mt-1"
                              >
                                Sewa Mobil
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Screen: Booking details */}
                    {rentalScreen === "booking" && selectedCar && (
                      <div className="space-y-3 text-left flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1 mb-2 cursor-pointer" onClick={() => setRentalScreen("list")}>
                            <ArrowLeft size={11} className="text-gray-400" />
                            <span className="text-[9px] text-gray-400 font-bold">Katalog</span>
                          </div>

                          <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Formulir Sewa</h5>

                          {/* Car Summary */}
                          <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl flex items-center justify-between text-xs mb-3">
                            <div>
                              <h6 className="text-[10px] font-bold text-white leading-none">{selectedCar.name}</h6>
                              <span className="text-[8px] text-cyan-400 mt-1 block">Rp {selectedCar.price.toLocaleString("id")} / hari</span>
                            </div>
                            <span className="text-2xl">{selectedCar.image}</span>
                          </div>

                          <div className="space-y-2">
                            <div className="space-y-1">
                              <label className="text-[8px] text-gray-500 font-bold uppercase">Durasi Sewa (Hari)</label>
                              <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg p-1">
                                <button 
                                  onClick={() => setRentalDays(Math.max(1, rentalDays - 1))}
                                  className="p-1 text-white hover:text-cyan-400 cursor-pointer"
                                >
                                  <Minus size={10} />
                                </button>
                                <span className="text-[10px] font-bold">{rentalDays} Hari</span>
                                <button 
                                  onClick={() => setRentalDays(rentalDays + 1)}
                                  className="p-1 text-white hover:text-cyan-400 cursor-pointer"
                                >
                                  <Plus size={10} />
                                </button>
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[8px] text-gray-500 font-bold uppercase">Lokasi Pengambilan</label>
                              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-[9px] text-gray-300 font-semibold flex items-center gap-1.5">
                                <Compass size={10} className="text-cyan-500" />
                                <span>Garasi LuxRide Pusat, Jakarta</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Booking confirm button */}
                        <div className="space-y-2">
                          <div className="border-t border-zinc-900 pt-2 flex justify-between items-center text-[9px]">
                            <span className="text-gray-400 font-bold">Total Pembayaran:</span>
                            <span className="text-cyan-400 font-extrabold text-xs">Rp {(selectedCar.price * rentalDays).toLocaleString("id")}</span>
                          </div>

                          <button 
                            onClick={handleConfirmRental}
                            disabled={rentalProcessing}
                            className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-zinc-800 text-white font-bold py-2 rounded-lg text-xs cursor-pointer flex items-center justify-center gap-1.5 active:scale-95"
                          >
                            {rentalProcessing ? (
                              <>
                                <Loader2 size={12} className="animate-spin" /> Memproses...
                              </>
                            ) : (
                              <>
                                <Calendar size={12} /> Konfirmasi Sewa
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Screen: Status live tracking */}
                    {rentalScreen === "status" && selectedCar && (
                      <div className="space-y-4 flex flex-col items-center justify-center text-center">
                        <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                          <Car size={28} />
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-sm font-extrabold text-cyan-400">Pemesanan Berhasil!</h4>
                          <p className="text-[9px] text-gray-400">Silakan ambil mobil di lokasi garasi kami</p>
                        </div>

                        {/* Progress visual tracker */}
                        <div className="w-full space-y-2 bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-left">
                          <h6 className="text-[8px] font-bold text-gray-500 uppercase tracking-wider leading-none mb-1">Status Live Tracking:</h6>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-3.5 h-3.5 rounded-full bg-cyan-500 text-black flex items-center justify-center font-bold text-[7px]"><Check size={8} /></div>
                              <span className="text-[9px] font-bold text-white">Mobil Dipesan</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3.5 h-3.5 rounded-full bg-cyan-500 text-black flex items-center justify-center font-bold text-[7px]"><Check size={8} /></div>
                              <span className="text-[9px] font-bold text-white">Pembersihan & Inspeksi</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3.5 h-3.5 rounded-full bg-zinc-800 text-cyan-400 border border-cyan-500/30 animate-pulse flex items-center justify-center font-bold text-[7px]">•</div>
                              <span className="text-[9px] font-bold text-cyan-400">Siap untuk Diambil</span>
                            </div>
                          </div>
                        </div>

                        <button 
                          onClick={() => setRentalScreen("list")}
                          className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 rounded-lg text-xs mt-2 cursor-pointer active:scale-95"
                        >
                          Kembali ke Katalog
                        </button>
                      </div>
                    )}

                  </div>
                </div>
              )}

            </div>

            {/* iOS Home Indicator Bar */}
            <div className="bg-gray-950 p-2.5 flex justify-center z-30">
              <div className="w-24 h-1 bg-white/40 rounded-full"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default MobileEmulator;
