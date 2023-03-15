const pokemon = require('pokemon')

    
    
    const root = document.getElementById('root');

    // 구조 작성 함수
    function makeElement(tagName, parent) {
      const element = document.createElement(tagName);
      parent.appendChild(element);
    }
    // 구조 작성 함수 호출
    makeElement('header', root);                   //root.children[0]
    makeElement('nav', root);                      //root.children[1]
    makeElement('select', root.children[1]);
    makeElement('textarea', root.children[1]);
    makeElement('button', root.children[1]);
    makeElement('main', root);                     //root.children[2]
    makeElement('ul', root.children[2]);
    for (let list = 0; list < 10; list++) {
      makeElement('li', root.children[2].children[0]);
    }
    makeElement('div', root.children[2]);
    makeElement('img', root.children[2].children[1]);
    makeElement('div', root.children[2].children[1]);
    makeElement('div', root.children[2].children[1]);

    // 배열 선언해서 style 작성 함수
    // function makeStyle(arrayKey, arrayValue, element) {
    //   for (let i = 0; i < arrayKey.length; i++) {
    //     element.style[arrayKey[i]] = arrayValue[i];
    //   }
    // }
    function ObjectmakeStyle(object) {
      for (let i = 0; i < object.firstArray.length; i++) {
        object.element.style[object.firstArray[i]] = object.secondArray[i];
      }
    }
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

    // nav>textarea
    const navtextareaStyle = {
      firstArray: ["width", "height"],
      secondArray: ["20%", "30%"],
      element: root.children[1].children[1]
    }
    ObjectmakeStyle(navselectStyle);

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
      firstArray: ["width", "height", "display", "flexDirection", "justifyContent", "alignItems"],
      secondArray: ["40%", "100%", "flex", "column", "space-around", "flex-start"],
      element: root.children[2].children[0]
    }
    ObjectmakeStyle(ulstyle);

    // ul>li style
    for (let liststyle = 0; liststyle < 10; liststyle++) {
      const ulliStyle = {
        firstArray: ["width", "height", "listStyleType"],
        secondArray: ["80%", "8%", "none"],
        element: root.children[2].children[0].children[liststyle]
      }
      ObjectmakeStyle(ulliStyle);
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
      firstArray: ["width", "height"],
      secondArray: ["80%", "60%"],
      element: root.children[2].children[1].children[0]
    }
    ObjectmakeStyle(maindivimgStyle);

    // main>div>div[0] style
    const maindivdivoneStyle = {
      firstArray: ["width", "height"],
      secondArray: ["80%", "15%"],
      element: root.children[2].children[1].children[1]
    }
    ObjectmakeStyle(maindivdivoneStyle);

    // main>div>div[1] style
    const maindivdivtwoStyle = {
      firstArray: ["width", "height"],
      secondArray: ["80%", "15%"],
      element: root.children[2].children[1].children[2]
    }
    ObjectmakeStyle(maindivdivtwoStyle);

  