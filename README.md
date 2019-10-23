# Movie App

React JS Fundamentals Course 2019

## Props 

- props 이름 설정
    ~~~javascript
        <Test fav="kimchi"/>
    ~~~

- props 를 사용하는 컴포넌트  
    ~~~javascript
    function Test({fav}) {
        return (
            <div>
                <h1>{fav} like</h1>
            </div>
        )
    }
    ~~~




