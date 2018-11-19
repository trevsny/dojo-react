// const myButton = React.createElement('button', null, "Click Me");
 // console.log(JSON.stringify(myButton));

const vanillaDiv = document.getElementById("vanilla");
// const date = new Date().toLocaleTimeString()

const renderNow = () => {
    vanillaDiv.innerHTML = `
    <div class="demo">
        <p>Vanilla - The time is: ${new Date().toLocaleTimeString()}</p>
    </div>`;

    ReactDOM.render(
        
        React.createElement('p', null, `React - the time is: ${new Date().toLocaleTimeString()}`),
        document.getElementById('app'),
        );
}

setInterval(renderNow, 1000);



