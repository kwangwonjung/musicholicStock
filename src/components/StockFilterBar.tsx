import type { Dispatch, SetStateAction } from 'react';

export interface FilterState {
  kospi100: boolean;
  kospi200: boolean;
  krx100: boolean;
  koreaValue: boolean;
  holding: boolean;
  highDividend50: boolean;
  dividendGrowth50: boolean;
  krxReits: boolean;
}

interface StockFilterBarProps {
  filters: FilterState;
  setFilters: Dispatch<SetStateAction<FilterState>>;
  dividendYear: string;
  setDividendYear: (year: string) => void;
  totalCount: number;
}

export default function StockFilterBar({
  filters,
  setFilters,
  dividendYear,
  setDividendYear,
  totalCount,
}: StockFilterBarProps) {
  const toggleFilter = (key: keyof FilterState) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="px-5 py-3 border-b border-slate-100 flex flex-col gap-2 text-xs">
      {/* 첫 번째 줄 필터 */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3.5 text-slate-600 flex-wrap">
          <span className="text-slate-400 font-semibold">※</span>
          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filters.kospi100}
              onChange={() => toggleFilter('kospi100')}
              className="rounded border-slate-300 text-blue-600 focus:ring-0 w-3.5 h-3.5"
            />
            <span>KOSPI 100</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filters.kospi200}
              onChange={() => toggleFilter('kospi200')}
              className="rounded border-slate-300 text-blue-600 focus:ring-0 w-3.5 h-3.5"
            />
            <span>KOSPI 200</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filters.krx100}
              onChange={() => toggleFilter('krx100')}
              className="rounded border-slate-300 text-blue-600 focus:ring-0 w-3.5 h-3.5"
            />
            <span>KRX 100</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filters.koreaValue}
              onChange={() => toggleFilter('koreaValue')}
              className="rounded border-slate-300 text-blue-600 focus:ring-0 w-3.5 h-3.5"
            />
            <span>KOREA VALUE</span>
          </label>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-1.5 cursor-pointer select-none font-semibold text-slate-800">
            <input
              type="checkbox"
              checked={filters.holding}
              onChange={() => toggleFilter('holding')}
              className="rounded border-slate-300 text-[#0066e6] focus:ring-0 w-3.5 h-3.5"
            />
            <span>보유종목</span>
          </label>
        </div>
      </div>

      {/* 두 번째 줄 필터 (고배당 50, 배당성장 50, KRX 부동산리츠인프라) */}
      <div className="flex items-center justify-between flex-wrap gap-3 pt-1">
        <div className="flex items-center gap-3.5 text-slate-600 flex-wrap">
          <span className="text-slate-400 font-semibold">※</span>
          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filters.highDividend50}
              onChange={() => toggleFilter('highDividend50')}
              className="rounded border-slate-300 text-blue-600 focus:ring-0 w-3.5 h-3.5"
            />
            <span>고배당 50</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filters.dividendGrowth50}
              onChange={() => toggleFilter('dividendGrowth50')}
              className="rounded border-slate-300 text-blue-600 focus:ring-0 w-3.5 h-3.5"
            />
            <span>배당성장 50</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filters.krxReits}
              onChange={() => toggleFilter('krxReits')}
              className="rounded border-slate-300 text-blue-600 focus:ring-0 w-3.5 h-3.5"
            />
            <span>KRX 부동산리츠인프라</span>
          </label>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-slate-600">
            <span>배당(%) :</span>
            <select
              value={dividendYear}
              onChange={(e) => setDividendYear(e.target.value)}
              className="bg-transparent font-semibold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
          <span className="text-slate-500 font-medium ml-2">총 {totalCount}개 종목</span>
        </div>
      </div>
    </div>
  );
}