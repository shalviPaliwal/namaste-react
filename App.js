{/* <div id="parent">
    <div id="child">
        <h1>h1 tag</h1>
    </div>
</div> */}

const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"h1 tag")))

console.log(parent) //object
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);

{/* <div id="parent">
    <div id="child">
        <h1>h1 tag</h1>
        <h2>h2 tag</h1>
    </div>
</div> */}

const parent1=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"h2 tag")]))

console.log(parent1) //object
const root1=ReactDOM.createRoot(document.getElementById("root"))
root1.render(parent1);
