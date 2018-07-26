
export default function (elementType, text){
    const newElement = document.createElement(elementType);

    newElement.innerText = text;

    document.body.appendChild(newElement);
}

