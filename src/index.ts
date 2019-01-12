import './style.css';

const component = () => {

    const element = document.createElement('div');
    let elementText: string = "Welcome to TypeScript";
    element.innerHTML = elementText;

    return element;
}

let test: string = "Hello";

console.log(test);

document.body.appendChild(component());