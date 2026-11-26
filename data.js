// 바이브코딩 허브 설정/데이터
window.HUB_CONFIG = {
  // 같은 폴더의 엑셀 명단 파일 (첫 번째 시트의 계열사/소속부서/성명/배포 URL 열을 읽습니다)
  // 비워 두면 아래 FALLBACK 데이터를 사용합니다.
  XLSX_URL: "바이브코딩_참석자명단.xlsx",
  // 자동 새로고침 주기(초). 0이면 끔
  REFRESH_SEC: 60
};

// 엑셀 파일이 없거나 불러오기 실패 시 사용하는 예비 데이터 (출처: 바이브코딩_참석자명단.xlsx)
window.HUB_FALLBACK = [
  { company: "유진IT서비스", dept: "AI혁신팀", name: "고정우", url: "https://saykima02-glitch.github.io/dept-portal/" }
];
