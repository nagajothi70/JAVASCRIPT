 document.getElementById('submitButton').addEventListener('click', function  add () {
        // Get basic form values
        const firstName = document.getElementById('firstname').value;
        const password = document.getElementById('password').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value;
        const color = document.getElementById('colorPicker').value;
        const volume = document.getElementById('volumeRange').value;
        const datetime = document.getElementById('datetime').value;
        const month = document.getElementById('month').value;
        const search = document.getElementById('search').value;
        const tele = document.getElementById('tele').value;
        const week = document.getElementById('week').value;
        const url = document.getElementById('url').value;

        // Get selected course options
        const courseSelect = document.getElementById('course');
        let selectedCourses = [];
        for (let i = 0; i < courseSelect.options.length; i++) {
            if (courseSelect.options[i].selected) {
                selectedCourses.push(courseSelect.options[i].value);
            }
        }

        // Get selected gender
        let gender = '';
        if (document.getElementById('female').checked) {
            gender = 'Female';
        } else if (document.getElementById('male').checked) {
            gender = 'Male';
        }

        // Get selected children options
        let children = [];
        if (document.getElementById('childFemale').checked) {
            children.push('Female');
        }
        if (document.getElementById('childMale').checked) {
            children.push('Male');
        }

        // Get uploaded file names
        const fileInput = document.getElementById('fileInput');
        let fileNames = [];
        for (let i = 0; i < fileInput.files.length; i++) {
            fileNames.push(fileInput.files[i].name);
        }

        // Display collected data in the console
        console.log('First Name:', firstName);
        console.log('Password:', password);
        console.log('Date:', date);
        console.log('Time:', time);
        console.log('Address:', address);
        console.log('Email:', email);
        console.log('Number:', number);
        console.log('Color:', color);
        console.log('Volume:', volume);
        console.log('Date and Time:', datetime);
        console.log('Month:', month);
        console.log('Search:', search);
        console.log('Telephone:', tele);
        console.log('Week:', week);
        console.log('URL:', url);
        console.log('Selected Courses:', selectedCourses);
        console.log('Gender:', gender);
        console.log('Children:', children);
        console.log('Uploaded Files:', fileNames);

        alert('Form Data Collected! Check the console.');
    });
