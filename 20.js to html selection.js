let p = document.getElementById("one");
        let arr = [1, 2, 3, 4, 5];

        // Populate the dropdown on page load
        function demo() {
            for (let i = 0; i < arr.length; i++) {
                // Create a new <option> element
                let option = document.createElement("option");
                // Set the value and text of the option
              //  option.value = arr[i];
                option.innerHTML = arr[i];
                // Append the option to the <select>
                p.appendChild(option);
            }
        }

        // Call the function to populate the dropdown
        demo();

