// 참고: https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#error-codes_3
export const SIGNUP_ERROR_CODES = {
  "auth/email-already-in-use": "이미 존재하는 이메일입니다.",
  "auth/invalid-email": "이메일 형식이 적절하지 않습니다.",
  "auth/weak-password": "비밀번호는 최소 6자리 이상이어야 합니다.",
  "auth/operation-not-allowed": "휴면 계정입니다. 관리자에게 문의하세요.",
};

// 참고: https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithemailandpassword
export const LOGIN_ERROR_CODES = {
  "auth/invalid-email": "이메일 형식이 적절하지 않습니다.",
  "auth/user-disabled": "휴면 계정입니다. 관리자에게 문의하세요.",
  "auth/user-not-found": "존재하지 않는 계정입니다.",
  "auth/wrong-password": "비밀번호를 확인해주세요.",
};
