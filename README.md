# codestates-fe-advanced-course (SEB_PART_06_김태현)

## 완성된 GIF 파일 및 배포 링크

## 프로젝트 실행 방법
1. `cd client` : 터미널에서 client 디렉토리로 접근<br />
2. `npm run start` : 로컬 환경에서 프로젝트 실행

## 사용한 스택 목록
- Typescript : v4.7.4
- React : v18.2.0
- Recoil : v0.7.4
- Tailwind CSS : v3.1.6
- axios : v0.27.2
- Figma

## 구현한 기능 목록
- 게시판 메인
  - 게시물 리스트
  - 페이지 사이즈 조절 드롭다운
  - 게시물 검색바
  - 하단 페이지 네비게이션 (이전 페이지, 다음 페이지, 페이지 번호 이동, 페이지 그룹 이동)
  
- 게시물 상세 페이지
  - 게시물 상세 정보
  - 댓글 리스트
  - 댓글 페이지네이션 (페이지 당 3개씩 렌더링)
  
- 공통
  - 모든 API 요청에 커스텀 훅 제작하여 사용
  - 레이아웃 컴포넌트
  - 헤더 컴포넌트
  - 로딩 컴포넌트
  - 에러 컴포넌트
  - 경고 모달
  
## 구현 방법 혹은 구현하면서 어려웠던 점
- 전체적인 구조
 
  - 크게는 게시판 메인으로 연결되는 `<Main />` 컴포넌트와 게시물 상세 페이지로 연결되는 `<Post />` 컴포넌트로 분리했습니다. <br />
  - `<App />`에 라우트를 정의하는 것이 직관적이지 않은 것 같아 `<Router />`라는 컴포넌트를 만들어, 그 곳에 두 개의 라우트를 정의했습니다. <br />
  - 연결되는 path는 각각 게시판 메인(`<Main />`)은 index path인 "/" 로, 게시물 상세 페이지(`<Post />`)는 "/post/:id" 로 path 파라미터를 통해 <br /> 동적으로 라우팅시켰습니다.
  - 라우트가 연결된 위 두가지 컴포넌트 내에서는 비슷한 UI가 반복되거나 의미 맥락 상 구분이 필요한 단위를 구분하여 <br /> 세분화된 컴포넌트들로 구성하였습니다.
  
- 레이아웃 및 디자인

  - 페이지마다 공통적으로 반복되는 레이아웃(헤더, 최대 너비 등)은 `<Layout />` 컴포넌트를 만들어 ReactNode 타입의 children prop을 받도록 구성했습니다.
  - CSS는 클래스 명을 구분하지 않아도 되고, 인라인 방식, 축약형으로 프로토타입을 빠르게 구현할 수 있는 tailwind CSS 라이브러리를 선택했습니다.
  
- 어려웠던 점
  - useEffect 훅을 쓸 때 dependency 룰을 완벽하게 지키는 것이 조금 어려운 부분이었습니다.
  
## 직접 작성한 Wireframe 혹은 Prototype
- UI 디자인

  - 기본적으로 Figma 툴을 사용하여 화면을 그렸습니다.
  - primary 컬러는 코드스테이츠 로고의 컬러를 차용했습니다.
  - 전체적인 UI 디자인은 엘포인트의 고객센터 공지사항 게시판을 레퍼런스했습니다. [레퍼런스 링크](https://www.lpoint.com/app/center/LHDA100100.do)
  
## 성능 최적화에 대해서 고민하고 개선한 방법
- useEffect

## 추가 구현 사항에 대한 구현 방법과 설명
- 페이지네이션 개요

  - `<PageNavigation />`이라는 컴포넌트를 제작하여 재사용할 수 있도록 제작했습니다.
  - `pageSize`, `numberOfPagesPerGroup`, `dataLength`, `currentPage`, `setCurrentPage` , `setModal`을<br />props로 받도록 했습니다. 각 prop의 명세는 아래와 같습니다.
  - `pageSize` : 한 페이지에 렌더링 될 아이템의 개수를 정합니다.
  - `numberOfPagesPerGroup` : 한 페이지당 보이는 페이지 번호 개수입니다. 본 과제에서는 10개를 사용했습니다.
  - `dataLength` : page개수를 정하게 될 data(배열)의 총 길이(length) 입니다.
  - `currentPage` : 현재 선택된 페이지 번호입니다.
  - `setCurrentPage` : 현재 선택된 페이지를 이동시킬 수 있는 상태 변경 함수입니다.
  - `setModal` : 더이상 페이지가 없을 경우 나타나는 모달에 대한 상태 변경 함수입니다.

- 페이지네이션 기본 동작

  - `pageGroup` 변수를 사용해 `currentPage`에서 `numberOfPagesGroup`을 나누고 `Math.ceil`을 통해 올림한 값을 관리합니다. 
  
## 기타 구현 사항
- API 요청

  - 필요한 요청의 base url이 모두 같았기 때문에, axios 인스턴스를 하나 생성하여 baseUrl 속성에 같은 url을 정의해 반복을 줄였습니다.
  - 필요한 데이터는 모두 GET 요청으로 불러와야 했고, 공통적으로 loading 상태와 error 상태가 필요했습니다.
  - 이 때문에, 위에서 만든 axios 인스턴스와 `useState`, `useEffect`를 활용하여, general하게 모든 GET 요청을 처리할 수 있는 `useFetch`라는 함수를 만들었습니다.
  - `useFetch`는 url과 get요청에 사용되는 params 두 가지를 파라미터로 받아 `{data, loading, error}` 형태의 객체를 리턴하도록 만들었습니다.
  - `useFetch` 내에서 상태로 관리되는 data는 필요한 GET 요청마다 형태가 달랐기 때문에 제네릭 타입을 활용하여 이를 해결했습니다.
  - `useFetch` 함수를 활용하여 전체 게시물 리스트, 특정 게시물 정보, 댓글 리스트를 불러오는 api 요청을 각각 <br />
  `usePostList` `usePost` `useCommentList`의 커스텀 훅으로 제작했습니다.
  - UI와 관련된 로직과 API 요청 로직을 분리하고 조금 더 직관적으로 이해할 수 있도록<br />
  위에서 제작한 커스텀 훅들은 컴포넌트 내에 정의하지 않고 외부에 정의하여 필요에 따라서 import 시켜와 사용했습니다.
  
