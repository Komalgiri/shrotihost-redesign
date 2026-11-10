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
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-5">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950">Agency Reseller Profit Calculator</h3>
          <p className="text-xs sm:text-sm text-slate-500">See how much recurring revenue you can generate by hosting your clients on ShrotiHost.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Sliders */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-800">
                Number of Client cPanel Accounts:
              </label>
              <span className="text-base font-extrabold text-indigo-700 font-mono">
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
              className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>5 clients</span>
              <span>50 clients</span>
              <span>100 clients</span>
              <span>150+ clients</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-800">
                Monthly Price You Charge Each Client:
              </label>
              <span className="text-base font-extrabold text-emerald-700 font-mono">
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
              className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>₹199/mo (Budget)</span>
              <span>₹499/mo (Standard)</span>
              <span>₹999/mo (Premium)</span>
              <span>₹1,499/mo</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <span className="text-slate-500">Recommended ShrotiHost Plan: </span>
            <strong className="text-slate-950 font-semibold">{planInfo.name}</strong> (₹{planInfo.cost}/month)
          </div>
        </div>

        {/* Calculation Result Dashboard */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-4">
          <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
            <span className="text-xs text-slate-500">Total Monthly Revenue:</span>
            <span className="text-lg font-bold text-slate-900 font-mono">₹{totalRevenue.toLocaleString()}</span>
          </div>

          <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
            <span className="text-xs text-slate-500">ShrotiHost Infrastructure Cost:</span>
            <span className="text-sm font-semibold text-slate-700 font-mono">- ₹{planInfo.cost}</span>
          </div>

          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Estimated Monthly Net Profit
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-slate-950 font-mono">
                ₹{netMonthlyProfit.toLocaleString()}
              </span>
              <span className="text-xs text-slate-500">/month</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs flex items-center justify-between">
            <span className="text-slate-600">Annual Profit Potential:</span>
            <strong className="text-emerald-700 font-bold font-mono">₹{netAnnualProfit.toLocaleString()}/yr</strong>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Estimated Gross Margin: <strong className="text-slate-900">{marginPercent}%</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
