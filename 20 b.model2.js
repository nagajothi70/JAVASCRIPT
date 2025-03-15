 let dropdown = document.getElementById("dropdown");
        let arr = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
        
        let optionsHTML = "";
        for (let i = 0; i < arr.length; i++) {
            optionsHTML += `<option value="${arr[i]}">${arr[i]}</option>`;
        }
        dropdown.innerHTML = optionsHTML; // Set all options at once
