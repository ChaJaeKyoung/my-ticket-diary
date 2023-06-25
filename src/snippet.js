//Read 스니펫
//firebase에 등록한 글 읽는 스니펫

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, deleteDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2kab9tq9ZppSAw3vRDnpf75OZkr0TcNA",
  authDomain: "my-ticket-diary-8b675.firebaseapp.com",
  projectId: "my-ticket-diary-8b675",
  storageBucket: "my-ticket-diary-8b675.appspot.com",
  messagingSenderId: "955544464735",
  appId: "1:955544464735:web:3079d776ea062e709cdaea",
  measurementId: "G-D27S0B5CS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const docRef = doc(db, "tickets", "ticket0");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}




//파일 업로드
//파일 지우기
//티켓 글쓰기
//티켓 수정하기
//티켓 지우기
//티켓 읽기 --> 해결
//티켓 글쓰기에 파일 넣기

//저장을 눌렀을 떄 일어나야하는 일
//storage에 파일 업로드 -> 업로드 후 정보 획득 -> 파일의 주소를 티켓 정보에 입력 -> 티켓 글쓰기