// require 메서드를 통해 외부 모듈을 가져온다.
const http = require('http');

// 브라우저에 form 태그를 만드는 html이다.
// const formTag = `
//  <form method="GET" action="/login">
//   <input type="text" name="id">
//   <input type="submit">
//   </form> 
//   `;

// 문자를 반환해주는 함수이다.
function greet(fromSubmitString) {
  return `<h1>${fromSubmitString}</h1>`;
}

// local:2080을 입력했을 때 처음 브라우저에 띄워지는 화면이다.
function firstPage() {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      border: 1px solid black;
    }
  </style>
</head>

<body>

  <div id="root"></div>
  <script>
    const root = document.getElementById('root');

    const selectarray = ["이름", "번호"]
    const listarray = new Array(1080);
   

    // 구조 작성 함수
    function makeElement(tagName, parent, addNum) {
      for (let i = 0; i < addNum; i++) {
        const element = document.createElement(tagName);
        parent.appendChild(element);
      }
    }
    //속성 추가 함수
    function makeAttributeText(attriName, attriValue, text, parent) {
      parent.setAttribute(attriName, attriValue);
      parent.innerHTML = text;
    }

    function makeAttribute(attriName, attriValue, parent) {
      parent.setAttribute(attriName, attriValue);
    }
    console.dir(root.style);
    // text 작성 함수
    function makeText(parent, ...text) {
      parent.innerHTML = text;
    }

    // style 작성 함수
    function ObjectmakeStyle(object) {
      for (let i = 0; i < object.firstArray.length; i++) {
        object.element.style[object.firstArray[i]] = object.secondArray[i];
      }
    }

    // 구조 작성 함수 호출
    makeElement('header', root, 1);
    makeElement('nav', root, 1);
    makeElement('select', root.children[1], 1);
    makeElement('option', root.children[1].children[0], selectarray.length)
    makeAttributeText('value', 'name', selectarray[0], root.children[1].children[0].children[0])
    makeAttributeText('value', 'number', selectarray[1], root.children[1].children[0].children[1])
    makeElement('input', root.children[1], 1);
    makeElement('button', root.children[1], 1);
    makeElement('main', root, 1);
    makeElement('ul', root.children[2], 1);
    makeElement('li', root.children[2].children[0], listarray.length);
    makeElement('div', root.children[2], 1);
    makeElement('img', root.children[2].children[1], 1);
    makeElement('div', root.children[2].children[1], 4);
    makeElement('form', root.children[2].children[1], 1);
      
    

    makeElement('input', root.children[2].children[1].children[5], 1);
    makeElement('button', root.children[2].children[1].children[5], 1);
    document.querySelector('form').submit();

    // root style
    const rootStyle = {
      firstArray: ["width", "height"],
      secondArray: ["100vw", "100vh"],
      element: root
    }
    ObjectmakeStyle(rootStyle);

    // header style
    const headerStyle = {
      firstArray: ["width", "height"],
      secondArray: ["100%", "10%"],
      element: root.children[0]
    }
    ObjectmakeStyle(headerStyle);

    // nav style
    const navStyle = {
      firstArray: ["width", "height", "display", "alignItems"],
      secondArray: ["100%", "10%", "flex", "center"],
      element: root.children[1]
    }
    ObjectmakeStyle(navStyle);

    // nav>select
    const navselectStyle = {
      firstArray: ["width", "height", "margin"],
      secondArray: ["20%", "30%", "5%"],
      element: root.children[1].children[0]
    }
    ObjectmakeStyle(navselectStyle);


    // nav>input
    const navinputStyle = {
      firstArray: ["width", "height"],
      secondArray: ["20%", "30%"],
      element: root.children[1].children[1]
    }
    ObjectmakeStyle(navinputStyle);

    // nav>button
    const navbuttonStyle = {
      firstArray: ["width", "height"],
      secondArray: ["5%", "30%"],
      element: root.children[1].children[2]
    }
    ObjectmakeStyle(navbuttonStyle);

    // main style
    const mainStyle = {
      firstArray: ["width", "height", "display"],
      secondArray: ["100%", "80%", "flex", "center", "center"],
      element: root.children[2]
    }
    ObjectmakeStyle(mainStyle);

    // ul style
    const ulstyle = {
      firstArray: ["width", "height", "display", "flexDirection", "justifyContent", "alignItems", "overflow"],
      secondArray: ["40%", "100%", "block", "column", "space-around", "flex-start", "auto"],
      element: root.children[2].children[0]
    }
    ObjectmakeStyle(ulstyle);

    // ul>li style
    for (let liststyle = 0; liststyle < listarray.length; liststyle++) {
      const ulliStyle = {
        firstArray: ["width", "height", "listStyleType", "margin"],
        secondArray: ["80%", "8%", "none", "5%"],
        element: root.children[2].children[0].children[liststyle]
      }
      ObjectmakeStyle(ulliStyle);
      makeText(root.children[2].children[0].children[liststyle], listarray[liststyle])
    }

    // main>div style
    const maindivStyle = {
      firstArray: ["width", "height", "display", "flexDirection", "justifyContent", "alignItems"],
      secondArray: ["60%", "100%", "flex", "column", "space-around", "center"],
      element: root.children[2].children[1]
    }
    ObjectmakeStyle(maindivStyle);

    // main>div>img style
    const maindivimgStyle = {
      firstArray: ["width", "height", "margin"],
      secondArray: ["80%", "60%", "2%"],
      element: root.children[2].children[1].children[0]
    }
    ObjectmakeStyle(maindivimgStyle);

    // main>div>div[i] style
    for (let i = 1; i <= 4; i++) {
      const maindivdivoneStyle = {
        firstArray: ["width", "height", "margin"],
        secondArray: ["80%", "10%", "2%"],
        element: root.children[2].children[1].children[i]
      }
      ObjectmakeStyle(maindivdivoneStyle);
    }

    const maindivdivcommentStyle = {
      firstArray: ["width", "height", "margin", "display"],
      secondArray: ["80%", "5%", "2%", "flex"],
      element: root.children[2].children[1].children[5]
    }
    ObjectmakeStyle(maindivdivcommentStyle);
    makeAttribute('action', './submit-form', root.children[2].children[1].children[5]);
    makeAttribute('method', 'post', root.children[2].children[1].children[5])

    const maindivdivinputStyle = {
      firstArray: ["width", "height"],
      secondArray: ["70%", "100%"],
      element: root.children[2].children[1].children[5].children[0]
    }
    ObjectmakeStyle(maindivdivinputStyle);
    makeAttribute('type', 'text', root.children[2].children[1].children[5].children[0])
    makeAttribute('id' , 'name', root.children[2].children[1].children[5].children[0]);
    makeAttribute('name','name',root.children[2].children[1].children[5].children[0])
  
    const maindivdivbuttonStyle = {
      firstArray: ["width", "height"],
      secondArray: ["30%", "100%"],
      element: root.children[2].children[1].children[5].children[1]
    }
    ObjectmakeStyle(maindivdivbuttonStyle);
    makeAttribute('type', 'submit', root.children[2].children[1].children[5].children[1])
   

    for (let i = 0; i < listarray.length; i++) {
      root.children[2].children[0].children[i].addEventListener('click', function () {

      })
    }
  </script>
</body>

</html>
  `
}

// request는 요청에 관한 정보를 담고 있고, respond는 응답에 관한 정보를 담고 있다.
const server = http.createServer(function(request, response){
  // 최초접속
  if(request.method === 'GET' && request.url === '/') {
    // 200 은 상태코드 이고 그 오른쪽은 헤더 정보이다. 상태코드는 HTTP 상태코드를 말하는데 200,404같은 것들이다. 'text/html'은 응답의 콘텐츠 형식이 HTML이라는 의미이다.
    response.writeHead(200, {'Content-Type': 'text/html'});
    let page = firstPage();
    // 본문(body)에 보여지는 부분을 쓰는 메서드이다.
    response.write(page);
    // 응답을 종료하는 메서드이다.
    response.end();
  }
  // 무언가
  // startsWith(searchValue, start-index)는 searchValue에 찾으려는 문자열을 입력하고 start-index는 탐색을 시작하려는 인덱스 값을 의미한다.
  // if(request.method === 'GET' && request.url.startsWith('/login')) {
  //   // split(separator,limit)는 separator를 기준으로 문자열을 분할 하여 배열로 넘겨준다.
  //   const name = decodeURI(request.url).split('&').join('=').split('=')[1];
  //   encodeURIComponent(name);
  //   response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  //   let page = firstPage(greet(name))
  //   response.write(page);
  //   response.end();
  // }
});
// 서버 포트 설정
// 서버와 연결할 포트를 2080으로 지정하고 , 포트 연결 완료 후 실행된 콜백함수를 입력하면 된다.
server.listen(2080, function(error) {
  if(error) {
    console.error('서버 안돌아감') 
  } else {
    console.log('서버 돌아감'); 
  }
});

