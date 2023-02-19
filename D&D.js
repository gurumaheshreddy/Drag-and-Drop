const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = document.querySelector('.button');
let input = document.querySelector('input');

let file;

button.onclick = () => {
    input.click();
};

//When Browse
input.addEventListener('change', function(){
    file = this.files[0];
      dragArea.classList.add('active');
    displayFile();
})

//when file is inside the drag-area
dragArea.addEventListener('dragover', (event) =>{
    event.preventDefault();
    dragText.textContent = 'Release to Upload';
    dragArea.classList.add('active');
  //  console.log('File is in the darg area');
});

// when file leaves drag area
dragArea.addEventListener('dragleave', () =>{
    dragText.textContent = 'Drag and Drop';
    dragArea.classList.remove('active');
   // console.log('file left drag area');
});

// when file is dropped
dragArea.addEventListener('drop',(event ) =>{
    event.preventDefault();

    file = event.dataTransfer.files[0];
    // console.log(file);
    displayFile();

    
});

function displayFile() {
    let fileType = file.type;
   // console.log(fileType);

   let validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'PDF/X'];

   if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();

        fileReader.onload = () =>{
            let fileURL = fileReader.result;
          //  console.log(fileURL);
          let imgTag = `<img src= "${fileURL} " alt="">`;
          dragArea.innerHTML = imgTag;
        };
        fileReader.readAsDataURL(file);
   }else{
    alert('This is not the selected format');
    dragArea.classList.remove('active');
   }
   // console.log('The file is dropped in drag area');
}