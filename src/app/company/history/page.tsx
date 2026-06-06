import PageHero from "@/components/ui/PageHero";
import { COMPANY } from "@/constants/company";

export const metadata = {
  title: `연혁 | ${COMPANY.name}`,
};

const HISTORY = [
  { year: "2025", events: ["2선식 전원라인 통신방식(PLC) 수위감지기 MCU 개발용역 (주식회사 수덕레벨)"] },
  { year: "2024", events: ["연기 종류의 구별이 가능한 다신호 아날로그 화재감지기 개발용역 (리더스테크(주))"] },
  { year: "2022", events: ["아날로그방식 무선화재감지기(400개 연동) 및 중계기 시스템 개발용역 (리더스테크(주))"] },
  { year: "2018", events: ["무선방식 단독형 화재감지기 MCU 개발용역 (리더스테크(주))"] },
  { year: "2014", events: ["RFID 무선 데이터 전송 시스템 단말기·중계기 MCU 개발용역 (건륭테크놀로지(주))"] },
  { year: "2013", events: ["RFID 제품 이력조회 단말기 MCU 개발용역 (건륭테크놀로지(주))"] },
  { year: "2012", events: ["인체감지 자동 음성메시지 출력 신디사이저 시스템 MCU 개발용역 (유진테크)"] },
  { year: "2011", events: ["핸드폰 연동(BLE) 동글 이어폰 MCU 개발용역 (건륭테크놀로지(주))"] },
  { year: "2010", events: ["청각 장애인용 피팅 가능한 보청기 MCU 개발용역 (건륭테크놀로지(주))"] },
  { year: "2009", events: ["자판기용 3권종 지폐식별기 Controller 및 MCU 개발용역 (근영테크)"] },
  { year: "2008", events: ["고급형 비데 시스템 Controller 및 MCU 개발용역 (유진금속(주))"] },
  { year: "2007", events: ["J/K 온도 센서를 사용한 핸디타입 온도측정기 MCU 개발용역 (한영전자(주))"] },
  { year: "2006", events: ["BMI 산출방식 HANDY TYPE 체지방계(의료기기) MCU 개발용역 (케이맥(주))"] },
  { year: "2005", events: ["오실로메트릭방식 손목형 전자혈압계(의료기기) MCU 개발용역 (케이맥(주))"] },
  { year: "2004", events: ["현대자동차 순정용 LOGIC DECK + CD CHANGER 기능 카스테레오 MCU 개발용역 (현대모비스(주))"] },
  { year: "2003", events: ["수출용 RDS 문자방송 하이파이 오디오 시스템 MCU 개발용역 (롯데전자(주))"] },
  { year: "2002", events: ["가정용 하이파이 콤포넌트 오디오 시스템 MCU 개발용역 (롯데전자(주))"] },
  { year: "2001", events: ["가라오케 비디오 자막 처리 System Board 및 MCU 개발용역 (영풍전자(주))"] },
  { year: "2000", events: ["보일러 컨트롤러 MCU 개발용역 (고려디지털(주))"] },
  { year: "1999", events: ["RADAR DETECTOR(X-Band) 차량용 과속감지기 MCU 개발용역 (대륭정밀(주))"] },
  { year: "1998", events: ["코드리스(CORDLESS) 무선전화기(46/49MHz) MCU 개발용역 (나우정밀(주))"] },
  { year: "1997", events: ["전세계 대응 가능한 카 스테레오용 MCU 개발용역 (남성전기(주))"] },
  { year: "1996", events: ["LMR(LAND MOBILE RADIO) 무전기용 MCU 개발용역 (맥슨전자(주))"] },
  { year: "1995", events: ["시티즌 밴드(CB) 전세계 대응 무전기용 MCU 개발용역 (맥슨전자(주))"] },
  { year: "1994.08", events: ["일본 SANYO 반도체 MCU 업체 전문 개발용역 및 개발 MDS TOOL 지원/공급"] },
  { year: "1994.06", events: ["대양전자 설립 및 일본 SANYO 반도체 MCU 디자인하우스 계약"] },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero title="회사소개" description="연혁" image="/images/company_top.png" imagePosition="center" />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {HISTORY.map((item) => (
            <div key={item.year} className="flex gap-8 mb-10">
              <div className="text-2xl font-bold text-[var(--color-primary)] w-24 shrink-0">
                {item.year}
              </div>
              <div className="border-l-2 border-[var(--color-primary)] pl-6 pb-2">
                {item.events.map((event, i) => (
                  <p key={i} className="text-[var(--color-gray-600)] mb-2">
                    {event}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
