// import { firestore } from './firebaseConfig'; // Import cấu hình Firebase của bạn
// import { useEffect, useState } from 'react';

// function ChatScreen({ chatId }) {
//     const [messages, setMessages] = useState([]);

//     useEffect(() => {
//         const messagesRef = firestore.collection('chats').doc(chatId).collection('messages').orderBy('timestamp', 'asc');

//         // Thiết lập listener real-time
//         const unsubscribe = messagesRef.onSnapshot((snapshot) => {
//             const newMessages = [];
//             snapshot.forEach((doc) => {
//                 newMessages.push({
//                     messageId: doc.id,
//                     ...doc.data()
//                 });
//             });
//             setMessages(newMessages);
//         });

//         // Hủy listener khi component unmount
//         return () => unsubscribe();
//     }, [chatId]);

//     // ... (UI để hiển thị tin nhắn)
// }