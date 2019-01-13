import './style.scss';

const component = () => {

    const element: HTMLElement = document.createElement('div');
    let elementText: string = "Welcome to TypeScript";
    element.innerHTML = elementText;

    return element;
}
const innerComponent = () => {

    const element: HTMLElement = document.createElement('p');
    let elementText: string = `I'm inside the div`;
    element.innerHTML = elementText;

    return element;
}

let test: string = "Hello";

console.log(test);

document.body.appendChild(component());
const target = document.getElementsByTagName('div')[0];
target.appendChild(innerComponent());