const Pet = () =>{
    return React.createElement("div", {}, [
        React.createElement('h1',{}, "hommie"),
        React.createElement('h2',{}, "Snar"),
        React.createElement('h2',{}, "perro")
    ])
};

const App = () => {
    return  React.createElement(
        "div",
        {id: "something important"},
        [
        React.createElement("h1", {}, "Adopt Me!!"),
        React.createElement(Pet,{
            name: 'Hommie', 
            animal: 'dog', 
            breed:'Chiguaga'}),

        React.createElement(Pet,{
            name: 'Snar', 
            animal: 'dog', 
            breed:'Doberman'}),

        React.createElement(Pet,
            {name: 'Hairy', 
            animal: 'dog', 
            breed:'Chiguaga'}),
        ]
    );
    };
    
    ReactDOM.render(React.createElement(App),document.getElementById("root"));