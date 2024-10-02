const arrayTest = [{name: 'Complete Assignment', due: '2024-07-22'},
    {name: 'Complete Assignment', due: '2024-07-22'},
    {name: 'Complete Assignment', due: '2024-07-22'}
    ];
    printlist();
    function printlist(){
        let inputhtml = '';
        let html = '';
        for(let i=0;i<arrayTest.length;i++){
            let {name , due} = arrayTest[i]
            inputhtml=`<div>${name}</div>
            <div>${due}</div>
            <button class="removeButton button" onclick="remove(${i})">Remove</button>`;

            html += inputhtml;
        }   
    document.querySelector('.output').innerHTML = html;
    }
    
    function addEvent(){
        let inputEvent = document.querySelector('.nameInput');
        let inputDate = document.querySelector('.dateInput');
        arrayTest.push({name: inputEvent.value ,due: inputDate.value});
        inputDate.value = '';
        inputEvent.value = '';
        printlist();
        console.log(arrayTest)

    }

    function remove(index){                
        arrayTest.splice(index,1);
        printlist();
    }

    function editEvent(){
        let html = '';
        html = `<input class="editIndex editElements" placeholder="Enter the Sr no of the event">
        <input  class="editInput editElements" placeholder="Enter the task">
        <button class="editElements" onclick="commitChange()">submit</button>`;
        document.querySelector(".edit").innerHTML = html;  
    }

    function commitChange(){
        const index = document.querySelector(".editIndex");
        const input = document.querySelector(".editInput");
        if(index.value>=0 && index.value< arrayTest.length){
            arrayTest[index.value].name = input.value;
            printlist();
            document.querySelector(".edit").innerHTML = ''; 
        }
        else{
            alert("enter a valid input");
            document.querySelector(".edit").innerHTML = ''; 
        }               
    }