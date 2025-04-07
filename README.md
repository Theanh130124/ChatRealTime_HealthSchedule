# ChatRealTime_HealthSchedule
Một chức năng chat real time cho SpringMVC HealthSchedule

npm install -g firebase-tools

firebase init functions

-Chọn mục use .... rồi chọn project đã tạo trên firebase

```text

  "chats": {
    "$chatId": { // ID duy nhất cho mỗi cuộc trò chuyện (ví dụ: kết hợp ID bệnh nhân và bác sĩ)
      "participants": {
        "$userId1": true, // ID của bệnh nhân
        "$userId2": true  // ID của bác sĩ
      },
      "messages": {
        "$messageId": {
          "senderId": "$userId",
          "text": "Nội dung tin nhắn",
          "imageUrl": "URL hình ảnh (nếu có)",
          "timestamp": 1678886400000 // Unix timestamp
        }
      }
    }
  },
  "users": {
    "$userId": {
      "name": "Tên người dùng",
      "role": "patient" | "doctor"
      // Các thông tin khác của người dùng
    }
  }
}
```
![image](https://github.com/user-attachments/assets/0b4e8af3-adb1-4e25-934a-c2a035e32a11)


![image](https://github.com/user-attachments/assets/ecf7de24-8de1-41fd-bbb7-8cc2a885ccac)

```text
cd function -> npm run serve

npm install express cors

```


Vao trong project setting trong firebase
