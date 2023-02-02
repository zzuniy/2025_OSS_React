# CRUD활용 react기반 고용자명단
react + JSON 고용자들의 정보 확인

## 💻 Repo 소개
db.json에 있는 고용자들의 명단을 추가,삭제 등 상태 표시를 할 수 있는 사이트입니다.

### ❌ 에러내용 및 해결
1. 에러내용 : Json-server 설치 오류</br> 터미널에 npm install -g json-server를 하였을 때</br> code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/local/lib/node_modules/json-server
npm ERR! errno -13 의 에러가 발생.</br></br>해결방법 : sudo npm install -g json-server를 입력해줌으로써 관리자버전으로 실행을 시켜주어야했다.</br></br></br>
2. 에러내용 : json-server 사용중 에러 </br> 1번내용의 에러때문에 전역으로 설치가 되지않아 zsh: command not found: json-server의 에러가 발생. </br></br>해결방법 : -g를 붙여서 json-server를 전역으로 설치를 해준다. 그다음 npx json-server --watch db.json를 실행시켜 에디터에 db.json을 받아 올 수 있었다.
