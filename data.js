// 바이브코딩 허브 설정/데이터
window.HUB_CONFIG = {
  // 구글 시트 [파일 > 공유 > 웹에 게시 > 해당 시트 > CSV] 로 만든 주소를 여기에 붙여넣으세요.
  // 비워 두면 아래 FALLBACK 데이터를 사용합니다.
  SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/1bstlV31P7lFPJriGjn-JNMbtpxa4mIy5ffDdZq6S0qA/export?format=csv&gid=447767859",
  // 자동 새로고침 주기(초). 0이면 끔
  REFRESH_SEC: 60
};

// 시트 주소가 없거나 불러오기 실패 시 사용하는 예비 데이터 (출처: 바이브코딩_참석자명단.xlsx)
window.HUB_FALLBACK = [
  { company: "유진IT서비스", dept: "AI혁신팀", name: "고정우", url: "https://saykima02-glitch.github.io/dept-portal/" }
];
