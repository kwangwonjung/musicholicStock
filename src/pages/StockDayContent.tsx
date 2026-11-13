import { useState } from 'react';
import { Search, Plus, Save, ChevronDown } from 'lucide-react';

export default function StockDayContent() {
  const [selectedStockIdx, setSelectedStockIdx] = useState(3); // 기본 선택된 종목 (맥쿼리인프라 예시)

  // 좌측 종목 리스트 데이터
  const stockList = [
    { sort: 0, code: 'KOSPI', name: '코스피', sector: '-', regNo: '-', divFilter: '', hold: true },
    { sort: 20, code: '000080', name: '하이트진로', sector: '[309]음료', regNo: '1101110028591', divFilter: '', hold: true },
    { sort: 30, code: '029780', name: '삼성카드', sector: '[337]카드', regNo: '1101110346901', divFilter: '', hold: true },
    { sort: 50, code: '005935', name: '삼성전자우', sector: '[278]반도체와반도체장비', regNo: '1301110006246', divFilter: '우선주', hold: true },
    { sort: 70, code: '088980', name: '맥쿼리인프라', sector: '-', regNo: '1101112672586', divFilter: '', hold: true },
    { sort: 101, code: '003555', name: 'LG우', sector: '[276]복합기업', regNo: '1101110003543', divFilter: '우선주', hold: true },
    { sort: 120, code: '066575', name: 'LG전자우', sector: '[307]전자제품', regNo: '1101112487050', divFilter: '우선주', hold: true },
    { sort: 140, code: '005389', name: '현대차3우B', sector: '[273]자동차', regNo: '1101110085450', divFilter: '3우선주', hold: true },
    { sort: 150, code: '035420', name: 'NAVER', sector: '[300]양방향미디어와서비스', regNo: '1101111707178', divFilter: '', hold: true },
    { sort: 180, code: '032640', name: 'LG유플러스', sector: '[333]무선통신서비스', regNo: '1101111296676', divFilter: '', hold: true },
    { sort: 210, code: '035250', name: '강원랜드', sector: '[317]호텔,레스토랑,레저', regNo: '144910001666', divFilter: '', hold: true },
    { sort: 250, code: '267250', name: 'HD현대', sector: '-', regNo: '170110638661', divFilter: '', hold: true },
    { sort: 260, code: '017670', name: 'SK텔레콤', sector: '-', regNo: '1101110371346', divFilter: '', hold: true },
    { sort: 340, code: '017800', name: '현대엘리베이터', sector: '-', regNo: '1344110001519', divFilter: '', hold: true },
    { sort: 350, code: '030000', name: '제일기획', sector: '-', regNo: '1101110139017', divFilter: '', hold: true },
    { sort: 350, code: '344820', name: 'kCC글라스', sector: '-', regNo: '1101117342473', divFilter: '', hold: true },
    { sort: 990, code: '294870', name: 'HDC현대산업개발', sector: '-', regNo: '1101116740008', divFilter: '', hold: true },
    { sort: 10, code: '024110', name: '기업은행', sector: '[301]은행', regNo: '1101350000903', divFilter: '', hold: false },
    { sort: 40, code: '016360', name: '삼성증권', sector: '[321]증권', regNo: '1101110335649', divFilter: '', hold: false },
    { sort: 60, code: '005930', name: '삼성전자', sector: '[278]반도체와반도체장비', regNo: '1301110006246', divFilter: '', hold: false },
    { sort: 80, code: '000660', name: 'SK하이닉스', sector: '[278]반도체와반도체장비', regNo: '1344110001387', divFilter: '', hold: false },
    { sort: 90, code: '033780', name: 'KT&G', sector: '[275]담배', regNo: '1601110067804', divFilter: '', hold: false },
    { sort: 100, code: '003550', name: 'LG', sector: '[276]복합기업', regNo: '1101110003543', divFilter: '', hold: false },
    { sort: 110, code: '066570', name: 'LG전자', sector: '[307]전자제품', regNo: '1101112487050', divFilter: '', hold: false },
    { sort: 130, code: '005380', name: '현대차', sector: '[273]자동차', regNo: '1101110085450', divFilter: '', hold: false },
    { sort: 160, code: '012330', name: '현대모비스', sector: '[270]자동차부품', regNo: '110110215536', divFilter: '', hold: false },
    { sort: 170, code: '069960', name: '현대백화점', sector: '[264]백화점과일반상점', regNo: '1101112644725', divFilter: '', hold: false },
    { sort: 180, code: '030200', name: 'KT', sector: '-', regNo: '1101111468754', divFilter: '', hold: false },
    { sort: 190, code: '086790', name: '하나금융지주', sector: '[301]은행', regNo: '1101113352004', divFilter: '', hold: false },
    { sort: 200, code: '105560', name: 'KB금융', sector: '[301]은행', regNo: '1101113975517', divFilter: '', hold: false },
    { sort: 220, code: '026960', name: '동서', sector: '[268]식품', regNo: '1101110180888', divFilter: '', hold: false },
    { sort: 230, code: '373220', name: 'LG에너지솔루션', sector: '-', regNo: '1101117701356', divFilter: '', hold: false },
  ];

  // 우측 배당 상세 내역 데이터
  const dividendDetailList = [
    { recordDate: '2026-06-30', payDate: '2026-08-28', payAmount: '350', changeDate: '', basePrice: '' },
    { recordDate: '2025-12-31', payDate: '2026-02-27', payAmount: '380', changeDate: '', basePrice: '' },
    { recordDate: '2025-06-30', payDate: '2025-08-29', payAmount: '380', changeDate: '', basePrice: '' },
    { recordDate: '2024-12-31', payDate: '2025-02-28', payAmount: '380', changeDate: '', basePrice: '' },
    { recordDate: '2024-06-30', payDate: '2024-08-30', payAmount: '380', changeDate: '', basePrice: '' },
    { recordDate: '2023-12-31', payDate: '2024-02-29', payAmount: '390', changeDate: '', basePrice: '' },
    { recordDate: '2023-06-30', payDate: '2023-08-28', payAmount: '385', changeDate: '', basePrice: '' },
    { recordDate: '2022-12-31', payDate: '2023-02-28', payAmount: '390', changeDate: '', basePrice: '11,150' },
    { recordDate: '2022-06-30', payDate: '2022-08-29', payAmount: '380', changeDate: '', basePrice: '13,050' },
    { recordDate: '2021-12-31', payDate: '2022-02-28', payAmount: '380', changeDate: '', basePrice: '13,950' },
    { recordDate: '2021-06-30', payDate: '2021-08-27', payAmount: '370', changeDate: '', basePrice: '12,500' },
    { recordDate: '2020-12-31', payDate: '2021-02-26', payAmount: '360', changeDate: '', basePrice: '10,850' },
    { recordDate: '2020-06-30', payDate: '2020-08-31', payAmount: '360', changeDate: '', basePrice: '11,450' },
    { recordDate: '2019-12-31', payDate: '2020-02-28', payAmount: '350', changeDate: '', basePrice: '11,650' },
    { recordDate: '2019-06-30', payDate: '2019-08-30', payAmount: '350', changeDate: '', basePrice: '11,850' },
    { recordDate: '2018-12-31', payDate: '2019-02-28', payAmount: '312', changeDate: '', basePrice: '9,220' },
    { recordDate: '2018-06-30', payDate: '2018-08-31', payAmount: '310', changeDate: '', basePrice: '8,870' },
    { recordDate: '2017-12-31', payDate: '2018-02-28', payAmount: '290', changeDate: '', basePrice: '8,200' },
    { recordDate: '2017-06-30', payDate: '2017-08-28', payAmount: '250', changeDate: '', basePrice: '8,650' },
  ];

  return (
    <div className="flex-1 min-w-0 flex flex-col overflow-hidden bg-white">
      
      {/* 상단 검색 및 액션 버튼 컨트롤 바 (생성기간 + 상단 왼쪽으로 이동한 버튼 3개) */}
      <div className="px-6 py-3 border-b border-slate-200 flex items-center justify-between flex-wrap gap-4 text-xs bg-white shrink-0">
        <div className="flex items-center gap-4 flex-wrap">
          {/* 생성기간 */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">생성기간</span>
            <div className="flex items-center gap-2 border border-slate-300 rounded px-2.5 py-1 bg-white shadow-2xs">
              <span>2026/01</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <span>~</span>
            <div className="flex items-center gap-2 border border-slate-300 rounded px-2.5 py-1 bg-white shadow-2xs">
              <span>2026/10</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          {/* 상단 왼쪽으로 이동된 데이터 생성 관련 버튼 3개 (모두 녹색 테마) */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-semibold cursor-pointer shadow-xs transition-colors">
              <Plus className="w-3.5 h-3.5 text-white" /> 생성
            </button>
            <button className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-semibold cursor-pointer shadow-xs transition-colors">
              50일선 생성
            </button>
            <button className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-semibold cursor-pointer shadow-xs transition-colors">
              배당 데이터 생성
            </button>
          </div>
        </div>
      </div>

      {/* 좌우 분할 그리드 메인 영역 */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* 좌측 종목 리스트 그리드 영역 */}
        <div className="flex-1 flex flex-col border-r border-slate-300 overflow-hidden bg-white">
          
          {/* 좌측 상단 바 ([종목코드/명] 필터, [조회] 버튼, [저장] 버튼) */}
          <div className="px-4 py-2 bg-[#f8fafc] border-b border-slate-300 flex items-center justify-between shrink-0">
            {/* 종목코드/명 및 조회 버튼 */}
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-slate-700">종목코드/명</span>
              <input
                type="text"
                className="border border-slate-300 rounded px-3 py-1 w-48 bg-white focus:outline-none focus:border-blue-500 shadow-2xs"
              />
              <button className="flex items-center gap-1.5 px-4 py-1 bg-[#0066e6] hover:bg-[#0055c2] text-white rounded font-semibold cursor-pointer shadow-xs transition-colors">
                <Search className="w-3.5 h-3.5 text-white" /> 조회
              </button>
            </div>

            {/* 저장 버튼 */}
            <button className="flex items-center gap-1.5 px-6 py-1 bg-[#0066e6] hover:bg-[#0055c2] text-white rounded font-semibold text-xs cursor-pointer shadow-xs transition-colors">
              <Save className="w-3.5 h-3.5 text-white" /> 저장
            </button>
          </div>

          {/* 테이블 본문 */}
          <div className="flex-1 overflow-auto">
            <table className="w-full text-left border-collapse text-[12px]">
              <thead className="sticky top-0 z-10 bg-[#f1f5f9] text-slate-700 font-semibold border-b border-slate-300">
                <tr>
                  <th className="py-2 px-2.5 w-10 text-center border-r border-slate-300">
                    <input type="checkbox" defaultChecked className="rounded border-slate-300 w-3.5 h-3.5 text-blue-600" />
                  </th>
                  <th className="py-2 px-3 text-center border-r border-slate-300 w-16">Sort</th>
                  <th className="py-2 px-3 border-r border-slate-300 w-24">종목코드</th>
                  <th className="py-2 px-3 border-r border-slate-300">종목명</th>
                  <th className="py-2 px-3 border-r border-slate-300 w-44">업종</th>
                  <th className="py-2 px-3 border-r border-slate-300 w-36">법인번호</th>
                  <th className="py-2 px-3 border-r border-slate-300 w-24">배당필터</th>
                  <th className="py-2 px-3 text-center w-14">보유</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {stockList.map((item, idx) => {
                  const isSelected = selectedStockIdx === idx;
                  return (
                    <tr
                      key={idx}
                      onClick={() => setSelectedStockIdx(idx)}
                      className={`cursor-pointer transition-colors ${
                        isSelected ? 'bg-blue-100/70' : 'hover:bg-blue-50/40'
                      }`}
                    >
                      <td className="py-1.5 px-2.5 text-center border-r border-slate-200" onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" defaultChecked={item.hold} className="rounded border-slate-300 w-3.5 h-3.5 text-blue-600" />
                      </td>
                      <td className="py-1.5 px-3 text-center text-slate-700 border-r border-slate-200">{item.sort}</td>
                      <td className="py-1.5 px-3 font-mono font-medium text-blue-600 border-r border-slate-200">{item.code}</td>
                      <td className="py-1.5 px-3 text-slate-900 border-r border-slate-200 font-medium">{item.name}</td>
                      <td className="py-1.5 px-3 text-slate-700 border-r border-slate-200 flex items-center justify-between">
                        <span>{item.sector}</span>
                        {item.sector !== '-' && <ChevronDown className="w-3 h-3 text-slate-400" />}
                      </td>
                      <td className="py-1.5 px-3 font-mono text-slate-700 border-r border-slate-200">{item.regNo}</td>
                      <td className="py-1.5 px-3 text-slate-700 border-r border-slate-200">{item.divFilter}</td>
                      <td className="py-1.5 px-3 text-center" onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" defaultChecked={item.hold} className="rounded border-slate-300 text-blue-600 w-3.5 h-3.5" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 우측 배당 상세 내역 그리드 영역 */}
        <div className="w-130 flex flex-col overflow-hidden bg-white">
          
          {/* 우측 상단 저장 버튼 바 (좌측과 동일한 높이 및 디자인) */}
          <div className="px-3 py-2 bg-[#f8fafc] border-b border-slate-300 flex justify-end shrink-0">
            <button className="flex items-center gap-1.5 px-6 py-1 bg-[#0066e6] hover:bg-[#0055c2] text-white rounded font-semibold text-xs cursor-pointer shadow-xs transition-colors">
              <Save className="w-3.5 h-3.5 text-white" /> 저장
            </button>
          </div>

          {/* 테이블 본문 */}
          <div className="flex-1 overflow-auto">
            <table className="w-full text-left border-collapse text-[12px]">
              <thead className="sticky top-0 z-10 bg-[#f1f5f9] text-slate-700 font-semibold border-b border-slate-300">
                <tr>
                  <th className="py-2 px-3 text-center border-r border-slate-300 w-28">배당기준일</th>
                  <th className="py-2 px-3 text-center border-r border-slate-300 w-28">배당지급일</th>
                  <th className="py-2 px-3 text-right border-r border-slate-300 w-24">배당지급액</th>
                  <th className="py-2 px-3 text-center border-r border-slate-300 w-28">배당기준일_변경</th>
                  <th className="py-2 px-3 text-right">배당기준가격</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {dividendDetailList.map((div, idx) => {
                  const isFirstRow = idx === 0;
                  return (
                    <tr key={idx} className={`transition-colors ${isFirstRow ? 'bg-blue-50/80 font-medium' : 'hover:bg-blue-50/40'}`}>
                      <td className={`py-1.5 px-3 text-center border-r border-slate-200 ${isFirstRow ? 'text-blue-700 font-semibold bg-blue-200/50' : 'text-slate-800'}`}>
                        {div.recordDate}
                      </td>
                      <td className="py-1.5 px-3 text-center text-slate-800 border-r border-slate-200">{div.payDate}</td>
                      <td className="py-1.5 px-3 text-right font-medium text-slate-900 border-r border-slate-200">{div.payAmount}</td>
                      <td className="py-1.5 px-3 text-center text-slate-400 border-r border-slate-200">{div.changeDate}</td>
                      <td className="py-1.5 px-3 text-right text-slate-800">{div.basePrice}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}