import React, { useState, useEffect } from 'react';


export default function InvestmentPlatform() {
  
  const [user, setUser] = useState({ id: 1, name: "Juan Dela Cruz", balance: 0, collateral: 0, position: 2 });
  const [table, setTable] = useState([
    { pos: 1, name: "Winner_Admin", status: "9/10", invites: 9 },
    { pos: 2, name: "Juan Dela Cruz", status: "Waiting", invites: 0 },
    { pos: 3, name: "Maria_02", status: "Waiting", invites: 0 },
    { pos: 4, name: "Pending...", status: "Empty", invites: 0 }
  ]);
  const [adminEarnings, setAdminEarnings] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [refNo, setRefNo] = useState("");

  
  const currentSlots = table.length;
  const isWinner = user.position === 1;

  
  const handleDeposit = () => {
    if (!refNo) return alert("Ilagay ang GCash Reference Number!");
    alert(`Deposit Received: ₱50. Reference: ${refNo}. Admin is verifying...`);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans p-4">
      
      <header className="max-w-md mx-auto flex justify-between items-center mb-8 bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-700">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            ROUND TABLE PRO
          </h1>
          <p className="text-xs text-slate-400">Stable • Secure • Transparent</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-400">Your Balance</p>
          <p className="text-lg font-bold text-emerald-400">₱{user.balance}.00</p>
        </div>
      </header>

      <main className="max-w-md mx-auto space-y-6">
        
        
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-sm uppercase tracking-widest text-slate-400 mb-2">Table Progress</h2>
            <div className="flex items-end justify-between mb-2">
              <span className="text-4xl font-black">{table[0].invites}/10</span>
              <span className="text-emerald-400 text-sm font-medium">₱500.00 Total Pot</span>
            </div>
            
          
            <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden mb-6">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full transition-all duration-1000" 
                style={{ width: `${(table[0].invites / 10) * 100}%` }}
              ></div>
            </div>

            
            {isWinner && table[0].invites === 9 ? (
              <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
                SELF INVITE (UNLOCK ₱450)
              </button>
            ) : (
              <button 
                onClick={() => setShowModal(true)}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all active:scale-95"
              >
                DEPOSIT ₱50 TO JOIN
              </button>
            )}
          </div>
        </section>

        
        <section className="bg-slate-800 rounded-3xl p-4 border border-slate-700">
          <h3 className="text-sm font-semibold mb-4 px-2">Table Queue</h3>
          <div className="space-y-2">
            {table.map((row, i) => (
              <div key={i} className={`flex items-center justify-between p-4 rounded-2xl ${i === 0 ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-slate-700/30'}`}>
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${i === 0 ? 'bg-emerald-500 text-slate-900' : 'bg-slate-600'}`}>
                    {row.pos}
                  </span>
                  <span className={i === 0 ? 'font-bold' : 'text-slate-300'}>{row.name}</span>
                </div>
                <span className="text-xs font-mono text-slate-400">{row.status}</span>
              </div>
            ))}
          </div>
        </section>

      
        <p className="text-center text-[10px] text-slate-500 uppercase tracking-tighter">
          Payout Schedule: Daily 6:00 PM - 9:00 PM • Admin Fee: ₱50
        </p>
      </main>

      
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-slate-800 w-full max-w-sm rounded-3xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold mb-4">Send Deposit</h2>
            <div className="bg-slate-900 p-4 rounded-2xl mb-4 border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Admin GCash</p>
              <p className="text-lg font-mono font-bold text-blue-400 underline">09XX-XXX-XXXX</p>
              <p className="text-[10px] mt-2 text-slate-500 italic">*Mag-send ng eksaktong ₱50.00 para ma-verify.</p>
            </div>
            <input 
              type="text" 
              placeholder="GCash Ref Number"
              className="w-full bg-slate-900 border border-slate-700 p-4 rounded-2xl mb-4 focus:outline-none focus:border-emerald-500 transition-all"
              value={refNo}
              onChange={(e) => setRefNo(e.target.value)}
            />
            <div className="flex gap-2">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 text-slate-400 font-medium">Cancel</button>
              <button onClick={handleDeposit} className="flex-2 px-8 py-3 bg-emerald-500 text-slate-900 font-bold rounded-xl">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
