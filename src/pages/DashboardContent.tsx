import { useState } from 'react';
import { Calendar as CalendarIcon, ChevronDown, RefreshCw } from 'lucide-react';

interface FilterState {
  kospi100: boolean;
  kospi200: boolean;
  krx100: boolean;
  koreaValue: boolean;
  holding: boolean;
  targetPrice: boolean;
  highDividend50: boolean;
  dividendGrowth50: boolean;
  krxReits: boolean;
}

interface DashboardContentProps {
  isReadOnly: boolean;
}

export default function DashboardContent({ isReadOnly }: DashboardContentProps) {
  const [dividendYear, setDividendYear] = useState('2023');

  // 지수 필터 상태
  const [filters, setFilters] = useState<FilterState>({
    kospi100: false,
    kospi200: false,
    krx100: false,
    koreaValue: false,
    holding: true,
    targetPrice: false,
    highDividend50: false,
    dividendGrowth50: false,
    krxReits: false,
  });

  const toggleFilter = (key: keyof FilterState) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // 테이블 데이터
  const stockData = [
    {
      flag: 'OOOO | XXX', targetBadge: '목표', holdCount: 0, sector: '-', name: 'HD현대',
      divAvg: '3.02', div1: '3.21', close: '124,800', avg50: '184,740.4', diff50: '-59,940.4',
      avg: '241,920.9', diff3: '-117,120.9', rate3: '-48.41',
      t85_1: '', t89: '', target: '',
      div2: '2.88', div3: '2.96', amt1: '4000', amt2: '3600', amt3: '3700', isUp: false
    },
    {
      flag: 'OOOO | OOX', targetBadge: '목표', holdCount: 0, sector: '자동차', name: '현대차3우B',
      divAvg: '7.78', div1: '6.99', close: '143,700', avg50: '167,619.2', diff50: '-23,919.2',
      avg: '226,768.1', diff3: '-83,068.1', rate3: '-36.63',
      t85_1: '', t89: '', target: '',
      div2: '8.39', div3: '7.97', amt1: '10050', amt2: '12050', amt3: '11450', isUp: false
    },
    {
      flag: 'OOOX | XOX', targetBadge: '목표', holdCount: 0, sector: '양방향...', name: 'NAVER',
      divAvg: '0.96', div1: '1.52', close: '172,500', avg50: '192,915.4', diff50: '-20,415.4',
      avg: '221,895.6', diff3: '-49,395.6', rate3: '-22.26',
      t85_1: '', t89: '', target: '',
      div2: '0.66', div3: '0.7', amt1: '2630', amt2: '1130', amt3: '1205', isUp: false
    },
    {
      flag: 'OOXX | OOX', targetBadge: '목표', holdCount: 0, sector: '카드', name: '삼성카드',
      divAvg: '6.65', div1: '6.9', close: '40,600', avg50: '43,292.3', diff50: '-2,692.3',
      avg: '51,410.2', diff3: '-10,810.2', rate3: '-21.03',
      t85_1: '', t89: '', target: '',
      div2: '6.9', div3: '6.16', amt1: '2800', amt2: '2800', amt3: '2500', isUp: false
    },
    {
      flag: 'OOOX | XXX', targetBadge: '목표', holdCount: 0, sector: '전자제품', name: 'LG전자우',
      divAvg: '2.12', div1: '2.7', close: '51,900', avg50: '66,528.8', diff50: '-14,628.8',
      avg: '64,015.9', diff3: '-12,115.9', rate3: '-18.93',
      t85_1: '', t89: '', target: '',
      div2: '2.02', div3: '1.64', amt1: '1400', amt2: '1050', amt3: '850', isUp: false
    },
    {
      flag: '', targetBadge: '목표', holdCount: 0, sector: '-', name: '코스피[하락장]',
      divAvg: '', div1: '0', close: '5,284.5', avg50: '6,316.9', diff50: '-1,032.4',
      avg: '6,512.4', diff3: '-1,228', rate3: '-18.86',
      t85_1: '', t89: '', target: '',
      div2: '0', div3: '0', amt1: '0', amt2: '0', amt3: '0', isUp: false
    },
    {
      flag: 'XOXO | OXX', targetBadge: '목표', holdCount: 0, sector: '-', name: '현대엘리베이터',
      divAvg: '11.42', div1: '20.42', close: '68,600', avg50: '71,380.8', diff50: '-2,780.8',
      avg: '83,525.3', diff3: '-14,925.3', rate3: '-17.87',
      t85_1: '', t89: '', target: '',
      div2: '8.02', div3: '5.83', amt1: '14010', amt2: '5500', amt3: '4000', isUp: false
    },
    {
      flag: 'OOOO | OXX', targetBadge: '목표', holdCount: 0, sector: '호텔,레...', name: '강원랜드',
      divAvg: '7.28', div1: '6.81', close: '13,960', avg50: '14,363.3', diff50: '-403.3',
      avg: '16,169.5', diff3: '-2,209.5', rate3: '-13.66',
      t85_1: '', t89: '', target: '',
      div2: '8.38', div3: '6.66', amt1: '950', amt2: '1170', amt3: '930', isUp: false
    },
    {
      flag: 'OOOX | XOX', targetBadge: '목표', holdCount: 0, sector: '복합기업', name: 'LG우',
      divAvg: '5.22', div1: '5.22', close: '60,300', avg50: '66,388.5', diff50: '-6,088.5',
      avg: '69,451.6', diff3: '-9,151.6', rate3: '-13.18',
      t85_1: '', t89: '', target: '',
      div2: '5.22', div3: '5.22', amt1: '3150', amt2: '3150', amt3: '3150', isUp: false
    },
    {
      flag: 'XXXX | OXX', targetBadge: '목표', holdCount: 0, sector: '-', name: 'kCC글라스',
      divAvg: '8.43', div1: '7.22', close: '22,150', avg50: '23,546.2', diff50: '-1,396.2',
      avg: '25,412.9', diff3: '-3,262.9', rate3: '-12.84',
      t85_1: '', t89: '', target: '',
      div2: '8.13', div3: '9.93', amt1: '1600', amt2: '1800', amt3: '2200', isUp: false
    },
    {
      flag: 'XXXX | XXO', targetBadge: '목표', holdCount: 0, sector: '-', name: '맥쿼리인프라',
      divAvg: '7.79', div1: '7.74', close: '9,820', avg50: '9,758.5', diff50: '61.5',
      avg: '10,768.1', diff3: '-948.1', rate3: '-8.8',
      t85_1: '', t89: '', target: '',
      div2: '7.74', div3: '7.89', amt1: '760', amt2: '760', amt3: '775', isUp: true
    },
    {
      flag: 'XOXO | OXX', targetBadge: '목표', holdCount: 0, sector: '-', name: '제일기획',
      divAvg: '6.33', div1: '6.55', close: '18,790', avg50: '18,877.9', diff50: '-87.9',
      avg: '19,598.8', diff3: '-808.8', rate3: '-4.13',
      t85_1: '', t89: '', target: '',
      div2: '6.55', div3: '5.91', amt1: '1230', amt2: '1230', amt3: '1110', isUp: false
    },
    {
      flag: 'XOXX | XXX', targetBadge: '목표', holdCount: 0, sector: '음료', name: '하이트진로',
      divAvg: '4.91', div1: '4.39', close: '15,940', avg50: '15,470', diff50: '470',
      avg: '16,367.6', diff3: '-427.6', rate3: '-2.61',
      t85_1: '', t89: '', target: '',
      div2: '4.39', div3: '5.96', amt1: '700', amt2: '700', amt3: '950', isUp: true
    },
    {
      flag: 'OOOO | OXX', targetBadge: '목표', holdCount: 0, sector: '-', name: 'SK 텔레콤',
      divAvg: '3.46', div1: '1.97', close: '84,200', avg50: '84,603.8', diff50: '-403.8',
      avg: '86,358.2', diff3: '-2,158.2', rate3: '-2.5',
      t85_1: '', t89: '', target: '',
      div2: '4.2', div3: '4.2', amt1: '1660', amt2: '3540', amt3: '3540', isUp: false
    },
    {
      flag: 'OOOX | OXX', targetBadge: '목표', holdCount: 0, sector: '무선통...', name: 'LG유플러스',
      divAvg: '4.2', div1: '4.24', close: '15,550', avg50: '14,822.3', diff50: '727.7',
      avg: '15,390.1', diff3: '159.9', rate3: '1.04',
      t85_1: '', t89: '', target: '',
      div2: '4.18', div3: '4.18', amt1: '660', amt2: '650', amt3: '650', isUp: true
    },
    {
      flag: 'OOOX | XXX', targetBadge: '목표', holdCount: 0, sector: '반도체...', name: '삼성전자우',
      divAvg: '0.89', div1: '0.98', close: '170,100', avg50: '184,575', diff50: '-14,475',
      avg: '164,373.1', diff3: '5,726.9', rate3: '3.48',
      t85_1: '', t89: '', target: '',
      div2: '0.85', div3: '0.85', amt1: '1669', amt2: '1447', amt3: '1445', isUp: true
    },
    {
      flag: '', targetBadge: '목표', holdCount: 0, sector: '-', name: 'HDC현대산업개발',
      divAvg: '2.87', div1: '2.87', close: '24,400', avg50: '23,165.4', diff50: '1,234.6',
      avg: '21,479', diff3: '2,921', rate3: '13.6',
      t85_1: '', t89: '', target: '',
      div2: '2.87', div3: '2.87', amt1: '700', amt2: '700', amt3: '700', isUp: true
    },
  ];

  return (
    <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
      {/* 상단 컨트롤 바 */}
      <header className="h-14 bg-white border-b border-slate-200/80 px-6 flex items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-4 min-w-0">
          <h1 className="text-[17px] font-bold text-slate-900 tracking-tight whitespace-nowrap shrink-0">
            종목별 투자지표
          </h1>

          {/* 조회 기간 박스 */}
          <div className="hidden md:flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 whitespace-nowrap shrink-0">
            <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-medium">2025/11/01</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
            <span className="text-slate-400 mx-0.5">~</span>
            <span className="font-medium">2026/08/31</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </div>

          {/* 파란색 조회 버튼 */}
          <button className="bg-[#0066e6] hover:bg-[#0055c2] text-white text-xs font-semibold px-4 py-1.5 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer">
            조회
          </button>
        </div>

        <div className="flex items-center gap-2.5 text-xs text-slate-400 whitespace-nowrap shrink-0">
          {isReadOnly && (
            <span className="px-2 py-0.5 bg-amber-50 text-amber-600 border border-amber-200 rounded text-[11px] font-medium">
              게스트(조회전용)
            </span>
          )}
          <span>2026.08.31 기준</span>
          <button
            title="새로고침"
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* 본문 카드형 컨테이너 영역 */}
      <main className="flex-1 p-4 overflow-hidden flex flex-col">
        <div className="w-full bg-white rounded-xl border border-slate-200/80 shadow-xs flex-1 flex flex-col overflow-hidden">
          
          {/* 카드 상단 필터 바 */}
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

              {/* 보유종목 및 목표주가 체크박스 영역 */}
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1.5 cursor-pointer select-none font-semibold text-slate-800">
                  <input
                    type="checkbox"
                    checked={filters.holding}
                    onChange={() => toggleFilter('holding')}
                    className="rounded border-slate-300 text-[#0066e6] focus:ring-0 w-3.5 h-3.5"
                  />
                  <span>보유종목</span>
                </label>

                <label className="flex items-center gap-1.5 cursor-pointer select-none font-semibold text-slate-800">
                  <input
                    type="checkbox"
                    checked={filters.targetPrice}
                    onChange={() => toggleFilter('targetPrice')}
                    className="rounded border-slate-300 text-[#0066e6] focus:ring-0 w-3.5 h-3.5"
                  />
                  <span>목표주가</span>
                </label>
              </div>
            </div>

            {/* 두 번째 줄 필터 */}
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
                <span className="text-slate-500 font-medium ml-2">총 {stockData.length}개 종목</span>
              </div>
            </div>
          </div>

          {/* 컴팩트 데이터 테이블 및 헤더 */}
          <div className="flex-1 overflow-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap text-[12px]">
              <thead className="sticky top-0 z-10 bg-[#f8fafc] text-slate-600 font-semibold border-b border-slate-200/80">
                <tr>
                  <th className="py-2.5 px-3 text-center border-r border-slate-200">깃발/상태</th>
                  <th className="py-2.5 px-3 text-center border-r border-slate-200">목표</th>
                  <th className="py-2.5 px-3 text-center border-r border-slate-200">보유</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">업종</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">종목명</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">배당평균</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">배당(%)-1</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">종가</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">평균(50)</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">50차이[④]</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">평균</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">차이[③]</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">Rate[③] ▾</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">Target(85%)</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">Target(89%)</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">Target</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">배당(%)-2</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">배당(%)-3</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">배당(금액)-1</th>
                  <th className="py-2.5 px-3 text-right border-r border-slate-200">배당(금액)-2</th>
                  <th className="py-2.5 px-3 text-right">배당(금액)-3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {stockData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-2 px-3 text-center text-xs text-slate-500 font-mono border-r border-slate-100">{row.flag}</td>
                    <td className="py-2 px-3 text-center border-r border-slate-100">
                      <span className="px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-medium">{row.targetBadge}</span>
                    </td>
                    <td className="py-2 px-3 text-center font-semibold text-slate-900 border-r border-slate-100">{row.holdCount}</td>
                    <td className="py-2 px-3 text-slate-600 border-r border-slate-100">{row.sector}</td>
                    <td className="py-2 px-3 font-semibold text-[#0066e6] hover:underline cursor-pointer border-r border-slate-100">
                      {row.name}
                    </td>
                    <td className="py-2 px-3 text-right text-slate-700 border-r border-slate-100">{row.divAvg}</td>
                    <td className="py-2 px-3 text-right text-slate-700 border-r border-slate-100">{row.div1}</td>
                    <td className="py-2 px-3 text-right font-medium text-slate-900 border-r border-slate-100">{row.close}</td>
                    <td className="py-2 px-3 text-right text-slate-700 border-r border-slate-100">{row.avg50}</td>
                    <td className="py-2 px-3 text-right font-medium text-red-500 border-r border-slate-100">{row.diff50}</td>
                    <td className="py-2 px-3 text-right text-slate-700 border-r border-slate-100">{row.avg}</td>
                    <td className="py-2 px-3 text-right font-medium text-red-500 border-r border-slate-100">{row.diff3}</td>
                    <td className={`py-2 px-3 text-right font-medium border-r border-slate-100 ${row.isUp ? 'text-blue-600' : 'text-red-500'}`}>
                      {row.rate3}
                    </td>
                    <td className="py-2 px-3 text-right text-slate-400 border-r border-slate-100">{row.t85_1}</td>
                    <td className="py-2 px-3 text-right text-slate-400 border-r border-slate-100">{row.t89}</td>
                    <td className="py-2 px-3 text-right text-slate-400 border-r border-slate-100">{row.target}</td>
                    <td className="py-2 px-3 text-right text-slate-700 border-r border-slate-100">{row.div2}</td>
                    <td className="py-2 px-3 text-right text-slate-700 border-r border-slate-100">{row.div3}</td>
                    <td className="py-2 px-3 text-right text-slate-700 border-r border-slate-100">{row.amt1}</td>
                    <td className="py-2 px-3 text-right text-slate-700 border-r border-slate-100">{row.amt2}</td>
                    <td className="py-2 px-3 text-right text-slate-700">{row.amt3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}