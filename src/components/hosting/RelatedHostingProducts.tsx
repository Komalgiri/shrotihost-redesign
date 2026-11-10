import React from "react";
import Link from "next/link";
import { Server, Flame, Infinity, Users, Terminal, Globe, Layers, ArrowRight } from "lucide-react";

interface RelatedHostingProductsProps {
  currentSlug?: string;
  currentHref?: string;
}

export const RelatedHostingProducts: React.FC<RelatedHostingProductsProps> = ({ currentSlug, currentHref }) => {
  const activeIdentifier = currentSlug || (currentHref ? currentHref.replace(/^\//, "") : "");

  const allProducts = [
    {
      slug: "shared-hosting",
      title: "NVMe Shared Hosting",
      price: "₹49/mo",
      description: "Fast cPanel hosting with LiteSpeed web servers and same renewal price.",
      icon: <Server className="w-5 h-5 text-indigo-600" />
    },
    {
      slug: "wordpress-hosting",
      title: "Managed WordPress",
      price: "₹69/mo",
      description: "Pre-configured LiteSpeed Cache, AccelerateWP, and Redis object cache.",
      icon: <Flame className="w-5 h-5 text-amber-500" />
    },
    {
      slug: "unlimited-hosting",
      title: "Unlimited NVMe",
      price: "₹69/mo",
      description: "Unmetered storage and bandwidth under transparent Fair Use Policy.",
      icon: <Infinity className="w-5 h-5 text-cyan-600" />
    },
    {
      slug: "reseller-hosting",
      title: "Reseller Hosting",
      price: "₹299/mo",
      description: "White-label WHM/cPanel accounts with free WHMCS on annual billing.",
      icon: <Users className="w-5 h-5 text-emerald-600" />
    },
    {
      slug: "master-reseller-hosting",
      title: "Master Reseller Hosting",
      price: "₹599/mo",
      description: "Multi-tier WHM authority to sell both cPanel accounts and WHM Reseller packages.",
      icon: <Layers className="w-5 h-5 text-indigo-600" />
    },
    {
      slug: "vps",
      title: "Cloud VPS Servers",
      price: "₹499/mo",
      description: "Dedicated vCPU, full root SSH access, 1 Gbps port, and weekly backups.",
      icon: <Terminal className="w-5 h-5 text-purple-600" />
    },
    {
      slug: "domains",
      title: "Domain Names",
      price: "₹714/yr",
      description: "Search, register, and transfer .in, .com, .org with free DNS management.",
      icon: <Globe className="w-5 h-5 text-indigo-600" />
    }
  ];

  const related = allProducts.filter((p) => p.slug !== activeIdentifier).slice(0, 3);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
              Explore More Infrastructure
            </span>
            <h3 className="text-2xl font-bold text-[#F9FAFB] mt-1">Related Hosting Solutions</h3>
          </div>
          <Link
            href="/"
            className="mt-2 sm:mt-0 text-xs font-bold text-[#9CA3AF] hover:text-[#06B6D4] inline-flex items-center gap-1 transition-colors"
          >
            <span>Compare All Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((prod) => (
            <Link
              key={prod.slug}
              href={`/${prod.slug}`}
              className="bg-[#111827] rounded-2xl border border-white/10 p-6 flex flex-col justify-between group shadow-card hover:bg-[#1F2937] hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center shrink-0">
                    {prod.icon}
                  </div>
                  <span className="text-xs font-bold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/30 px-2.5 py-1 rounded-full font-mono">
                    {prod.price}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#F9FAFB] group-hover:text-[#06B6D4] transition-colors mb-1.5">
                  {prod.title}
                </h4>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  {prod.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#06B6D4] group-hover:text-[#22D3EE]">
                <span>View Plans & Specs</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
