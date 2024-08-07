# 패스트캠퍼스 개인프로젝트

## 🌸 꽃 시장을 주제로 회원가입/ 로그인 페이지 만들기

### 🌼 사용 스택

Next.js , tailwind CSS, CVA ,Zod, Prizma, Sqlite,bcrypt, iron-seccion

### 🌼 주요기능

#### 💐 Zod와 Prisma Studio를 이용한 유효성 검사

- 회원가입 / 로그인시 Zod 를 이용해 유효성 검사를 하고 Prisma 를 이용해 만든 데이터 베이스로 닉네임/ 이메일 중복검사를 구현했습니다

  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FB79Pe%2FbtsIqz0M4vg%2F1HDePeyqB9VeLuLPJrPO11%2Fimg.png)

#### 💐 bcrypt 를 이용한 비밀번호 해싱

- bcrypt 를 이용해서 회원 가입시 비밀번호를 해싱 하여 저장 하고 로그인시 해싱된 비밀번호를 비교하여 로그인 할수있도록 구현 하였습니다.

  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbuJ5Tp%2FbtsIqDa9MPz%2FDLVOi8cQl1t1mY2EMQhUzK%2Fimg.png)

#### 💐세션에 해당 유저의 쿠키 저장

- 로그인하면 세션에 해당 유저의 쿠키를 저장하게끔 했습니다.

- Next.js 의 쿠키 받아 오는 기능을 사용해 손쉽게 구현 했습니다.

  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAdx16%2FbtsIsMEddEp%2FKFsXGc7OZy9bCCJRZxUE21%2Fimg.png)

#### 💐 공공데이터 포탈에서 오늘의 꽃 불러오기

- 매일 달라지는 ''오늘의 꽃'' API를 이용해 매일 달라지는 꽃을 받아오고 볼 수 있도록 했습니다.

  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLUaau%2FbtsIqUqarRJ%2FHRJiVjwOzgVdJh3rFbkDoK%2Fimg.png)

### 🌼 아쉬운 점

#### 💐 장바구니 기능 미구현

- 처음 계획할때 장바구니 기능도 추가 하고 싶었지만, 컨디션조절 실패와 새로운것을 배우는데 시간이 너무 많이걸려서 최소 기능만 구현 했습니다.
- 세션에 쿠키 넣은것도 해당 기능 때문에 해본거였는데 쿠키만 넣고 기능 구현을 못해서 아쉽습니다.

#### 💐 처음에 계획했던 것 과 다른 DB 사용

- 처음에 Firebase를 사용하기 위해 개발 환경을 세팅했으나, 중간에 다른것을 써보고싶어 Prisma 를 이용한 로컬 sqlite 를 사요앴습니다.
  - 로그인/ 회원 가입 기능이 편해서 처음에 firebase를 사용했던건데, 썼던것을 다시 쓰는것보다는 새로운것을 써보는것이 개인프로젝트의 이점이 아닐까 해서 중간에 바꿨습니다.

### 🌼 배운점

#### 💐 Next.js

- 전에 프로젝트에서도 로그인 / 회원 가입 기능을 구현했었는데요, useState를 쓰지않고 서버 사이드에서 처리 할 수 있는 방법을 배울수 있어서 좋았습니다.
- 유효성 검사도 전에는 손수 한땀한땀 했는데 zod 를 이용해 검사해서 행복했습니다 (?..?)

#### 💐 기타 등등

- 개인프로젝트로 진행했었는데 사람이 조금 게을러지기도하고 많이 외롭기도(?) 했습니다. 혼자 공부해서 좋은 면도 있었지만, 팀별로 진행해도 좋았겠다 라는 생각을 하게되었습니다.
