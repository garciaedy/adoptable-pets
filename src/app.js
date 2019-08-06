const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed)
    ])
};

const App = () => {
    return React.createElement(
        "div",
        { id: "something important" },
        [
            React.createElement("h1", {}, "Adopt Me!!"),
            React.createElement(Pet, {
                name: 'Hommie',
                animal: 'dog',
                breed: 'Chiguaga'
            }),

            React.createElement(Pet, {
                name: 'Snar',
                animal: 'dog',
                breed: 'Doberman'
            }),

            React.createElement(Pet,
                {
                    name: 'Hairy',
                    animal: 'dog',
                    breed: 'Chiguaga'
                }),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));