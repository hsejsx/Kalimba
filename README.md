# 🎵 칼림바랑

- [📎 배포 링크 바로 가기](https://main--with-kalimba.netlify.app/)

<br>

## ✨ 프로젝트 소개

개인 프로젝트로, 인터넷에 계이름은 많이 올라와 있지만, 칼림바 악보는 별로 없어서
`~`로 감싸면 해당 부분을 칼림바 악보로 바꿔주는 칼림바 커뮤니티 사이트입니다.<br>
ex) `~도미솔~` -> `135`
firebase의 Authentication, Realtime Database 기능을 이용하여 구글 로그인을 지원하며,<br> 로그인 시 글쓰기가 가능합니다. (모바일은 구현 예정입니다.)

<br>

## 😎 기능 시연

<table width="100%">
<tr>
    <th colspan="2">홈, 로그인</th>
</tr>

<tr>
    <td valign="top" align="center" width="50%">
    <img src="https://github.com/hsejsx/Kalimba/assets/108166730/1266c000-9722-4383-96f6-0d22775a0645"/>
    </td>
    <td valign="top" width="50%">
    <img src="https://github.com/hsejsx/Kalimba/assets/108166730/46bec67b-f007-49a7-b325-2684e8704a6e"/>
    </td>
</tr>
</table>

<table>
<tr>
      <thead>
            <th colspan="2">글, 글작성</th>
      </thead>
</tr>

<tr>
    <td valign="top" align="center">
    <img src="https://github.com/hsejsx/Kalimba/assets/108166730/2780735d-e50d-455c-818d-335aaa02ed93"/>
    </td>
    <td valign="top" align="center">
    <img src="https://github.com/hsejsx/Kalimba/assets/108166730/4986984e-aade-49fc-a6ec-48b417fbfd70"/>
    </td>
</tr>
</table>

<br>

## ⚙️ 개발 환경

<table>
      <thead align="center">
        <tr>
          <th colspan="2" style="text-align:center;"><span style="font-size:16px;">프론트엔드</span></th>
          <th style="text-align:center;"><span style="font-size:16px">배포</span></th>
          <th style="text-align:center;"><span style="font-size:16px">서버</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center" style="text-align:center;">
            <a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579667701/noticon/basd2y5bygpkqjiixuqy.png" alt="React" height="50" /></a>
            <br>
            <code>React</code>
          </td>
          <td align="center" style="text-align:center; margin: 0 auto;">
            <a href="https://tailwindcss.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" alt="tailwindcss" height="50" /></a>
            <br>
            <code>tailwindcss</code>
          </td>
          <td align="center" style="text-align:center;">
            <a href="https://www.netlify.com/" target="_blank"><img style="margin: 10px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1569039210/noticon/yubwjrkj43jpneajrdii.png" alt="Netlify" height="50" /></a>
            <br>
            <code>Netlify</code>
          </td>
          <td align="center" style="text-align:center;">
            <a href="https://firebase.google.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" height="50" /></a>
            <br>
            <code>Firebase</code>
          </td>
        </tr>
      </tbody>
</table>

<br>

### ⛓️ node modules

| 모듈명           | 용도                                  |
| ---------------- | ------------------------------------- |
| react-router-dom | 페이지 라우팅을 위해 사용             |
| tailwindcss      | 스타일 구현의 편의를 위해 사용        |
| react-icons      | 아이콘 사용을 위해 사용               |
| firebase         | 로그인, 데이터 읽기, 쓰기를 위해 사용 |
| uuid             | 고유한 글 id 설정을 위해 사용         |
| react query      | 비동기 함수 처리, 캐싱을 위해 사용    |

<br>

### 💻 코드 컨벤션

```
🛼 컴포넌트로 분리된 파일은 PascalCase으로 작성합니다.

🐫 컴포넌트가 아닌 파일, 함수명, 변수명은 camelCase로 작성합니다.

❓ 만약 변수에 할당되는 값이 boolean인 경우에는 is를 접두사로 붙입니다.

🔚 문장이 종료될 때는 세미콜론을 붙여줍니다.

🧮 연산자 사이에는 공백을 추가하여 가독성을 높입니다.

📠 콤마 다음에 값이 올 경우 공백을 추가하여 가독성을 높입니다.

🏭 함수명은 동사로 작성합니다.

😎 들여쓰기 공백은 2칸으로 합니다.
```

<br>

## 🤗 프로젝트를 진행하면서 겪은 것들

<br>

### 💖 좋았던 점

- 이전에 진행한 `simple youtube` 프로젝트에서는 비즈니스 로직과 UI 로직을 컴포넌트에 몽땅 넣은 상태로 완성해놓고 뿌듯해했는데, 깃허브를 둘러보며 다른 사람들 코드를 보니, `Context`, `Custom Hook`, `Reducer`를 이용하여 비즈니스 로직을 분리해서 컴포넌트를 최대한 단순하게 만든 것을 보고 충격받아, 해당 패턴들에 대해서 공부했지만 잘 와닿지가 않았는데, 이번 프로젝트를 진행하면서 이해도가 많이 올라간 것 같아서 좋았다.

### 💦 문제점과 해결 방법

<br>

#### 1️⃣. 게시글 정렬

- 게시글을 작성 시간 기준으로 정렬하려고 하니까 생각과는 달리 이상한 순서로 불러와져서, 어떻게 해야 시간 순서대로 보여주지.. 고민하면서 다른 커뮤니티 사이트를 둘러보니, 대부분 글 번호가 있었다. 그래서 db에 count를 설정해서, 글을 작성할 때마다 count를 설정 후 1씩 증가시켰다. 이후 글을 불러올 때 count를 기준으로 정렬시키니 원하는 대로 최신 글이 상단에 오도록 정렬시킬 수 있었다.

#### 2️⃣. 계이름 변환

- 이전에 진행했던 `music-converter` 프로젝트에서는 계이름에 포함되는 모든 글자들을 변환해버려서 사족을 제대로 못 썼는데, 이번에는 커뮤니티이니까, 사족도 많이 붙일 것 같아서 다 변환해 버리는 것이 아닌, `~` 물결로 감싸면 변환하는 것으로 만들었다. 다만, 첫 번째 물결과 마지막 물결의 위치를 잡아서 그 사이에 있는 것들만 변환시키는 것이라 물결 이모티콘 사용이 어렵다는 단점이 있다..! `~_~`.. 이 단점을 어떻게 극복할지는 아직 고민 중에 있다.

## 💭 느낀점

- 이번 프로젝트를 진행하면서 또 한 번 느낀 점은, 제작 과정에서 제일 많이 성장한다는 것이다. 디자인 시안을 보고 구현하는 과정도 흥미롭고 자랑스러웠지만, 이번에는 Firebase를 활용하여 서버와의 통신, 로그인 기능, 관리자 체크, 데이터의 읽기, 쓰기, 삭제 등 다양한 기능을 구현하면서 진정한 서비스 개발을 경험할 수 있어서 너무 좋았다. 이번 프로젝트를 계기로, 더욱 다양한 기능과 확장성을 갖춘 웹 사이트를 개발하고 싶은 욕구가 생겨서 Node.js를 익혀 웹 개발의 전반적인 영역에 대한 이해를 넓혀 나가고자 한다. 💪

### 🔥 추가적으로 만들 기능들

- [ ] 수정 기능
- [ ] 댓글 기능
- [ ] 좋아요 기능
- [ ] 모바일 버전(현재 768px 이상만 가능)
