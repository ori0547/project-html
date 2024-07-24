const emptyContainer = document.getElementById("empty-container");


document.getElementById('insert-button').addEventListener('click', function () {
    // Collects the elements from user...
    const elementType = document.getElementById("element-type").value;
    const elementWidth = document.getElementById("element-width").value + "px";
    const elementHeight = document.getElementById("element-height").value + "px";
    const elementContent = document.getElementById("element-content").value;
    const backgroundColor = document.getElementById("background-color").value;
    const fontColor = document.getElementById("font-color").value;
    const fontSize = document.getElementById("font-size").value + "px";
    const fontFamily = document.getElementById("font-family").value;
    // Add everything up for a new element
    const newElement = document.createElement(elementType);
    newElement.style.width = elementWidth;
    newElement.style.height = elementHeight;
    newElement.textContent = elementContent;
    newElement.style.backgroundColor = backgroundColor;
    newElement.style.color = fontColor;
    newElement.style.fontSize = fontSize;
    newElement.style.fontFamily = fontFamily;
    newElement.style.overflow = 'hidden';
    newElement.style.padding = '5px';
    //Actually puts it inside the larger div
    emptyContainer.appendChild(newElement);
    //Checks values in console
    console.log(elementType);
    console.log(elementWidth);
    console.log(elementHeight);
    console.log(elementContent);
    console.log(backgroundColor);
    console.log(fontColor);
    console.log(fontSize);
    console.log(fontFamily);
});

document.getElementById('cleanup-button').addEventListener('click', function () {
    //Just removes all text written in the html inside that div.
    //Ultimatly just removes all elements inside the larger div!
    emptyContainer.innerHTML = '';
});
