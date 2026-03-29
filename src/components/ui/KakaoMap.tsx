"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  address: string;
  className?: string;
}

export default function KakaoMap({ address, className }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initMap = () => {
      window.kakao.maps.load(() => {
        if (!mapRef.current) return;

        const map = new window.kakao.maps.Map(mapRef.current, {
          center: new window.kakao.maps.LatLng(37.4750, 126.6430),
          level: 4,
        });

        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch("서진테크 CCTV", (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            const marker = new window.kakao.maps.Marker({
              map,
              position: coords,
            });

            map.setCenter(coords);
          }
        });
      });
    };

    if (window.kakao && window.kakao.maps) {
      initMap();
      return;
    }

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=7986ff3caaa30b47463b918598f000ec&libraries=services&autoload=false`;
    script.async = true;
    script.onload = initMap;
    script.onerror = () => {
      console.error("카카오맵 스크립트 로드 실패");
    };
    document.head.appendChild(script);
  }, [address]);

  return <div ref={mapRef} className={className} />;
}
