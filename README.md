## 영화 검색 사이트 구축

**팀원 역할 및 담당 업무**

| 이름   | 역할 | 담당 업무             | 담당 페이지 및 기능                          |
| ------ | ---- | --------------------- | -------------------------------------------- |
| 김혜란 | 팀장 | - 프로젝트 매니저(PM) | - 메인 페이지                                |
|        |      | - UI/UX 담당          | - 찜 목록 페이지 및 모든 페이지 찜 기능 구현 |
|        |      | - 기능 구현 담당      | - 다크모드 구현                              |
|        |      | - 깃허브 관리자       |                          |
|        |      | - 시연 영상 및 발표   |                                              |
| 박세진 | 팀원 | - 기능 구현 담당      | - 검색 페이지                                |
|        |      | - 결과 보고서 작성    | - 로딩 애니메이션                            |
| 최승이 | 팀원 | - 기능 구현 담당      | - 검색 결과 페이지                           |
|        |      | - QA 및 테스트 담당   |                                              |
| 형주희 | 팀원 | - 기능 구현 담당      | - 영화 상세정보 페이지                       |
|        |      | - 결과 보고서 작성    |                                              |

<br/>

---

### 📍 완료된 작업

**필수 기능** 
- [x]  영화 제목으로 검색가능하게 하세요.
- [x] 검색된 결과페이지에서 영화 목록을 출력하세요.
- [x] 영화목록에서 각 영화의 상세정보 페이지를 구성하세요.
    - [x]  제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등
- [x]  검색사이트 서비스를 배포하세요. (GitHub Pages, Netlify, Vercel 등)

**선택 기능** 

- [x]  영화 개봉연도로 검색할 수 있게 하세요.
- [x]  영화 상세정보를 고해상도로 출력하세요.
- [x]  영화와 관련된 기타 기능을 넣어보세요.

---

### 📍 남은 작업

**선택 기능** 

- [ ]  더보기로 영화목록을 추가로 불러오도록 하세요.
- [ ]  영화 목록 검색하는 동안 로딩애니메이션 넣으세요.
- [ ]  영화 포스터가 없을 경우 대체 이미지를 넣으세요.

### 📍 남은 작업 상세 내용

`최승이`

- [ ]  결과 페이지의 더 보기 버튼 클릭 시 10개씩 데이터를 호출하는 기능을 추가
- [ ]  scss/base 폴더에 mixin.scss 파일을 추가하여, @mixin responsive를 만들고 max-width 기준으로 설정한 후, 결과 페이지의 반응형 작업을 1024px, 768px 기준으로 진행

`형주희`

- [ ]  scss/base 폴더에 mixin.scss를 추가하여, 폼 요소를 재사용할 수 있도록 크기별, 타입별로 mixin 함수를 정의
- [ ]  1번 마무리되면 detail.js 코드 세분화

`박세진`

- [x]  이미지가 없을 경우 대체 이미지 설정
- [x]  스크롤 끝 도달 시 추가 데이터 10개씩 호출
- [x]  용도별 로딩 애니메이션 구현
         -> 전체 화면을 로딩하는 로딩 애니메이션 구현
         -> div의 요소로 활용 가능한 로딩 애니메이션 구현
- [x]  실시간으로 데이터를 여러 번 요청하다 보니 과도한 요청으로 성능이 저하되고 있어서
제가 입력 후 3초 뒤에 검색 결과가 나오도록 설정했으니,
결과가 표시되기 전 검색창 아래에 "Now searching for movies..."라는 문구를 추가
    -> 검색모달 사용시 UI를 애니메이션으로 처리하여 사용자에게 로딩을 중을 표현
- [x] 초기에만 검색 전용 no-data 처리, 검색 후 결과 없음 시 공통 no-data 처리
    -> 초기 검색시 또는 검색할 제목이 없는경우 "Search for something..." 적용(피그마 참조)
       검색 후 결과 없음 시 공동 no-data 처리 적용.

`김혜란`

- [ ] 더 보기 버튼 노출 조건 수정
- [ ] 메인 페이지 및 찜 목록 페이지 input focus 효과 추가
- [ ] 찜 목록 페이지 전용 no-data 처리
- [ ] 모든 페이지 데이터 완전 렌더링 후 화면 노출 (opacity: 0 → opacity: 1)
- [ ] 메인 페이지 및 찜 목록 페이지 반응형 작업

---

**배포 URL**

https://hyeran0513.github.io/moviepedia/

**배포 QR 코드**

![image](https://github.com/user-attachments/assets/22ab9382-8020-4be7-a20d-55ddeb6c5190)
