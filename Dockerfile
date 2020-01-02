# 使用最後一版 node docker image
FROM node:latest

# 建立一個 /api 來放置檔案
RUN mkdir /api

# 將初始工作環境設置在 /api
WORKDIR /api

# 將本機 資料夾 拷貝到 image /api 中
ADD ./ /api

# 跑一次 npm install
RUN npm install

# 啟動伺服器 npm run start
CMD ["npm", "run", "start"]