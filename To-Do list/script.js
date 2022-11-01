var plusButton = document.getElementById('plusButton'),          //creating variables for inputs to be used
    inputField = document.getElementById('input'),
    listItem = document.getElementById('listItem');

plusButton.addEventListener('click', function(){               //Event listener for plus button
    var paragraph = document.createElement('p')
    listItem.appendChild(paragraph)
    paragraph.innerText = inputField.value;
    paragraph.classList.add('paragraph')
    inputField.value=""
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration='line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        paragraph.innerText="";
    })
})

document.addEventListener('keypress', function (e) {              //Event Listener for Enter Key
    if (e.key === 'Enter') {
      var paragraph = document.createElement('p')
      listItem.appendChild(paragraph)
      paragraph.innerText = inputField.value;
      paragraph.classList.add('paragraph')
      inputField.value=""
      paragraph.addEventListener('click', function(){
          paragraph.style.textDecoration='line-through';
      })
      paragraph.addEventListener('dblclick', function(){
          paragraph.innerText="";
      })
    }
});
