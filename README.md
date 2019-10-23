# Movie App

React JS Fundamentals Course 2019

## JSX

- 간단하게 `javascript`+`HTML` 결합


## Props 
- 부모 컴포넌트에서 자식 컴포넌트에게 data를 보내는 방법

- `props` 이름 설정
    ~~~javascript
        <Test fav="kimchi"/>
    ~~~

- `props` 를 사용하는 컴포넌트  
    ~~~javascript
    function Test({fav}) {
        return (
            <div>
                <h1>{fav} like</h1>
            </div>
        )
    }
    ~~~

- 다이나믹하게 변경하기

    ~~~javascript
    const actorILike = [
        {
            name :"yangyang",
            image : "https://file.mk.co.kr/chinafocus/2018/01/201801220332181900666.jpg"
        },{
            name :"suhyun",
            image :"https://img.sbs.co.kr/newsnet/etv/upload/2017/06/27/30000573168_1280.jpg"
        },
        {
            name :"sojisub",
            image :"http://img.hani.co.kr/imgdb/resize/2019/0517/00501906_20190517.JPG"
        }
    ];
        
     // Map으로 처리   
     {actorILike.map(item =><Test actor={item}/>)}    
    ~~~

- prop의 TYPE 설정

    ~~~javascript
    Test.propType = {
        name : PropTypes.string.isRequired,
        image : PropTypes.string.isRequired
    }
    ~~~

