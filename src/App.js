import React from "react";

class App extends React.Component { //React.Component 를 확장시켜 App이 상속받았으니 이제 App 도 React.Component 이다
  constructor(props) { //class가 생성될 때 호출되는 함수, js에서 왔음
    super(props);
    console.log('constructed');
  };
  //class Component를 사용하는 이유는 state를 가졌기 때문!  
  //state 안에는 data를 넣을 공간이 있고 이 데이터는 변한다. 그래서 state를 써야한다!
  state = {
    count : 0
  }
  add = ({count}) => {
    console.log('add');
    this.setState(current => ({ count : current.count + 1})); //setState를 쓰지 않으면 render method 가 다시 실행되지 않는다
    //current를 쓰는 것! state를 set할 때 외부의 상태에 의존하지 않는 가장 좋은 방법
  };
  minus = (count) => {
    console.log('minus');
    this.setState(current => ({ count : current.count - 1}));
  };
  componentDidMount() { //render method가 한번 호출되고 난 후에 호출되는 함수, 최초에 한번만 호출
    console.log('component did mount');
  }
  componentDidUpdate() { //setState등 '내'가 상태를 변경, 업데이트한 후에 호출되는 함수
    console.log('component did update');
  }
  componentWillUnmount() { //페이지를 이동하거나 무언가를 하고 component가 죽었을 때 호출되는 함수
    console.log('Good bye...');
  }
  render() { //react는 자동적으로 class component 안의 render mothod를 실행
    console.log('I am rendering'); //constructor()보다 늦게 호출됨
    return (
      <div>
        <h3>The number is : {this.state.count}</h3>
        <button onClick={this.add}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;

//mounting : == updating
//unmounting : component die. (when the page is changed and other ways)