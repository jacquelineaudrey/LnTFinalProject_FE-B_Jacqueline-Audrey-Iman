const selectedAll = document.querySelectorAll(".wrapper-dropdown");

let choice = "kosong";

selectedAll.forEach((selected) => {
    const optionsContainer = selected.children[2];
    const optionsList = selected.querySelectorAll("div.wrapper-dropdown li");
    selected.addEventListener("click", () => {
        let arrow = selected.children[1];
        if (selected.classList.contains("active")) {
            handleDropdown(selected, arrow, false);
        } else {
            let currentActive = document.querySelector(".wrapper-dropdown.active");
            if (currentActive) {
                let anotherArrow = currentActive.children[1];
                handleDropdown(currentActive, anotherArrow, false);
            }
            handleDropdown(selected, arrow, true);
        }
    });
    for (let o of optionsList) {
        o.addEventListener("click", () => {
            selected.querySelector(".selected-display").innerHTML = o.innerHTML;
            choice = o.innerHTML;
        });
    }
});

window.addEventListener("click", function (e) {
    if (e.target.closest(".wrapper-dropdown") === null) {
        closeAllDropdowns();
    }
});


function closeAllDropdowns() {
    const selectedAll = document.querySelectorAll(".wrapper-dropdown");
    selectedAll.forEach((selected) => {
        const optionsContainer = selected.children[2];
        let arrow = selected.children[1];

        handleDropdown(selected, arrow, false);
    });
}

function handleDropdown(dropdown, arrow, open) {
    if (open) {
        arrow.classList.add("rotated");
        dropdown.classList.add("active");
    } else {
        arrow.classList.remove("rotated");
        dropdown.classList.remove("active");
    }
}



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDeotnJzQ0DElqF4rTDUQEZyHEtQCmKJw8",
    authDomain: "lntfinalproject-1331e.firebaseapp.com",
    projectId: "lntfinalproject-1331e",
    storageBucket: "lntfinalproject-1331e.appspot.com",
    messagingSenderId: "868205423573",
    appId: "1:868205423573:web:d4e4b76fc55b82c593ab5c"
};

const app = initializeApp(firebaseConfig); 
const db = getDatabase(app);


document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');
    let centerError = document.getElementById('centerError');
    let successMessage = document.getElementById('successMessage');
    let valid = true;

    nameError.innerHTML = '';
    emailError.innerHTML = '';
    phoneError.innerHTML = '';
    centerError.innerHTML = '';
    if (name === '') {
        nameError.innerHTML = 'Name is required';
        valid = false;
    }else if(name.length < 3){
        nameError.innerHTML = 'Name must be at least 3 characters';
        valid = false;
    }

    if (email === '') {
        emailError.innerHTML = 'Email is required';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.innerHTML = 'Invalid email address';
        valid = false;
    }

    if (phone === '') {
        phoneError.innerHTML = 'phone is required';
        valid = false;
    } else if (phone.length < 10) {
        phoneError.innerHTML = 'phone must be at least 10 characters';
        valid = false;
    }else if (phone.length > 14){
        phoneError.innerHTML = 'phone must be at most 14 characters';
        valid = false;
    }else if(phone.charAt(0) != '0' || phone.charAt(1) != '8'){
        phoneError.innerHTML = 'phone must be lead with "08"';
        valid = false;
    }
    if(choice === 'kosong'){
        centerError.innerHTML = 'please choose one of the events';
        valid = false;
    }
    if (valid) {
        set(ref(db, 'user/' + name),{
            username: name,
            email: email,
            phone_number : phone,
            events_choice: choice,
        });
        successMessage.style.display = 'block';
        setTimeout(function () {
            successMessage.style.display = 'none';
            document.getElementById('form').reset();
            let choicereset = document.getElementById('destination');
            choicereset.innerHTML = 'Pick an Event!';
        }, 1000);
        // push(ref(db, 'user'), {
        //     // 

        //     email: _email,
        //     phone: _phone,
        //     event: _eventChoice,
        // }).then(() => {
        //     successMessage.style.display = 'block';
        //     alert('Data saved successfully!');
        // });
    }
})

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');
    let centerError = document.getElementById('centerError');
    let successMessage = document.getElementById('successMessage');
    let valid = true;

    nameError.innerHTML = '';
    emailError.innerHTML = '';
    phoneError.innerHTML = '';
    centerError.innerHTML = '';
    if (name === '') {
        nameError.innerHTML = 'Name is required';
        valid = false;
    }

    if (email === '') {
        emailError.innerHTML = 'Email is required';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.innerHTML = 'Invalid email address';
        valid = false;
    }

    if (phone === '') {
        phoneError.innerHTML = 'phone is required';
        valid = false;
    } else if (phone.length < 10) {
        phoneError.innerHTML = 'phone must be at least 6 characters';
        valid = false;
    }else if (phone.length > 14){
        phoneError.innerHTML = 'phone must be at most 14 characters';
        valid = false;
    }else if(phone.charAt(0) != '0' || phone.charAt(1) != '8'){
        phoneError.innerHTML = 'phone must be lead with "08"';
        valid = false;
    }
    if(choice === 'kosong'){
        centerError.innerHTML = 'please choose one of the events';
        valid = false;
    }
    if (valid) {
        // e.preventDefault();
        // alert("LoginSuccessfull!");
        // let _name = name;
        // let _email = email;
        // let _phone = phone;
        // let _eventChoice = choice;
        // set(ref(db,'user/' + name),{
        //     // 
            
        // });
        // alert("AOKWOAKWkow");
        // successMessage.style.display = 'block';
        // // setTimeout(function () {
        // //     successMessage.style.display = 'none';
        // //     // document.getElementById('form').reset();
        // //     let choicereset = document.getElementById('destination');
        // //     choicereset.innerHTML = 'Pick an Event!';
        // }, 1000);
        push(ref(db, 'user'), {
            // 

            email: _email,
            phone: _phone,
            event: _eventChoice,
        }).then(() => {
            successMessage.style.display = 'block';
            alert('Data saved successfully!');
        });
    }
    return false;
}

//Firebase

