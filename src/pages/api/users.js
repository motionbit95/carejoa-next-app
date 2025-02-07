// pages/api/users.js
import database from "@/lib/firebase";
import { ref, push, set } from "firebase/database"; // ref, push, set을 가져옵니다.

export default async function handler(req, res) {
  if (req.method === "GET") {
    // 사용자 목록을 반환
    res
      .status(200)
      .json({ users: [{ name: "John Doe" }, { name: "Jane Doe" }] });
  } else if (req.method === "POST") {
    const { name, email } = req.body;

    try {
      // Firebase Realtime Database에 사용자 데이터 추가
      // Firebase Realtime Database에 사용자 데이터 추가
      const newUserRef = push(ref(database, "users")); // "users" 경로에 새 데이터 추가
      await set(newUserRef, {
        name,
        email,
      });

      res.status(200).json({ message: "User added successfully" });
    } catch (error) {
      console.error("Firebase error:", error);
      res.status(500).json({ error: "Failed to add user" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
