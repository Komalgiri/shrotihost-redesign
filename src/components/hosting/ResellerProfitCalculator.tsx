"use client";

import React, { useState } from "react";
import { Calculator, DollarSign, TrendingUp, Users, ShieldCheck } from "lucide-react";

export const ResellerProfitCalculator: React.FC = () => {
  const [clientCount, setClientCount] = useState<number>(30);
  const [pricePerClient, setPricePerClient] = useState<number>(499);

  // Determine appropriate ShrotiHost plan cost based on client count
  const getPlanCost = (count: number) => {
    if (count <= 25) return { cost: 299, name: "Reseller Starter" };
    if (count <= 50) return { cost: 499, name: "Reseller Growth" };
    if (count <= 100) return { cost: 799, name: "Reseller Pro" };
    return { cost: 1299, name: "Reseller Infinity" };
  };

  const planInfo = getPlanCost(clientCount);
  const totalRevenue = clientCount * pricePerClient;
  const netMonthlyProfit = totalRevenue - planInfo.cost;
  const netAnnualProfit = netMonthlyProfit * 12;
  const marginPercent = Math.round((netMonthlyProfit / totalRevenue) * 100);

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-10 border border-emerald-500/30 shadow-2xl max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-5">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">Agency Reseller Profit Calculator</h3>
          <p className="text-xs sm:text-sm text-slate-400">See how much recurring revenue you can generate by hosting your clients on ShrotiHost.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Sliders */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                Number of Client cPanel Accounts:
              </label>
              <span className="text-base font-extrabold text-indigo-400 font-mono">
                {clientCount} Clients
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              step="5"
              value={clientCount}
              onChange={(e) => setClientCount(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>5 clients</span>
              <span>50 clients</span>
              <span>100 clients</span>
              <span>150+ clients</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                Monthly Price You Charge Each Client:
              </label>
              <span className="text-base font-extrabold text-emerald-400 font-mono">
                ₹{pricePerClient}/mo
              </span>
            </div>
            <input
              type="range"
              min="199"
              max="1499"
              step="50"
              value={pricePerClient}
              onChange={(e) => setPricePerClient(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>₹199/mo (Budget)</span>
              <span>₹499/mo (Standard)</span>
              <span>₹999/mo (Premium)</span>
              <span>₹1,499/mo</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
            <span className="text-slate-400">Recommended ShrotiHost Plan: </span>
            <strong className="text-white font-semibold">{planInfo.name}</strong> (₹{planInfo.cost}/month)
          </div>
        </div>

        {/* Calculation Result Dashboard */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-baseline justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-slate-400">Total Monthly Revenue:</span>
            <span className="text-lg font-bold text-slate-200 font-mono">
              ₹{totalRevenue.toLocaleString()}
            </span>
          </div>

          <div className="flex items-baseline justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-slate-400">ShrotiHost Reseller Cost:</span>
            <span className="text-sm font-medium text-rose-400 font-mono">
              - ₹{planInfo.cost}
            </span>
          </div>

          <div className="pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
              Your Net Monthly Profit:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                ₹{netMonthlyProfit.toLocaleString()}
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {marginPercent}% Margin
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Est. Annual Recurring Profit: <strong className="text-emerald-300 font-mono">₹{netAnnualProfit.toLocaleString()} / year</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

