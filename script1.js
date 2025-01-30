const collegeName="mru"
const marks=100;
function Tasking(){
    console.log("I am learning code at "+collegeName);
    document.getElementById("hello").innerText="I am learning code at "+collegeName
}
export { collegeName, Tasking };