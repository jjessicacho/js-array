// grab HTML elements
const output1 = document.getElementById("output-part1");
const output2 = document.getElementById("output-part2");


/* 
-------------------
PART 1
-------------------
*/
// Variables
const students = ["Jane", "Joe", "Jack", "Jill", "Jerome"];
const targetName = "Jessica";

// Output target name
output1.innerHTML += `<p>Target name is: ${targetName}</p>`;

// Output heading
output1.innerHTML += `<h3>List of Students:</h3>`;

// Add three more first names to the student array
students.push('Jessica', 'Oliver', 'Harry')

// Output the total numbers of students
output1.innerHTML += `<p>There are ${students.length} students.</p>`;

// Iterate over the students array 
// 'target found' message when the student name matches the tagName
// 'target found' message stylized in yellow highlights
let html = "<p>Iterate over the students array:</p>";
html += '<ul>';

students.forEach( function( oneStudent ){
    if (targetName === oneStudent) {
        html += `<li style="background-color: yellow">${oneStudent} <-- target name found!</li>`;
    }else {
        html += `<li>${oneStudent}</li>`;
    }
});

html += '</ul>';
output1.innerHTML += html;

// Provide a summary whether the target name was or was not found in the array.
// Output heading
output1.innerHTML += `<h3>Using a boolean flag to search the array...</h3>`;

// Boolean flag
if (students[5] === targetName) {
    output1.innerHTML += `<p>Target name was found in the list (using a boolean flag)</p>`;
}else {
    output1.innerHTML += `<p>Target name was NOT found in the list (using a boolean flag)</p>`;
};

// Output heading
output1.innerHTML += `<h3>Using array.find() to search array...</h3>`;

// array.find()
if (students.find(students => students === targetName)){
    output1.innerHTML += `<p>Target name was found in the list (using array.find())</p>`;
}else{
    output1.innerHTML += `<p>Target name was NOT found in the list (using array.find())</p>`;
}


/* 
-------------------
PART 2
-------------------
*/
// Variables
const arrayOfNumbers = [4, 0, -4, 13, -2];

// Count 4
html = `<h3>Count Down Number: ${arrayOfNumbers[0]}</h3>`;
html += '<ul>';

for(let count = 4; count >= 0; count--){
    html += `<li>${count}</li>`;
}

html += '</ul>';
output2.innerHTML += html;


// Count 0
html = `<h3>Count Number: ${arrayOfNumbers[1]}</h3>`;

for(let count = 0; count <= 0; count++){
    html += `<p>There is no counting to be done...</p>`;
}

output2.innerHTML += html;

// Count -4
html = `<h3>Count Up Number: ${arrayOfNumbers[2]}</h3>`;
html += '<ul>';

for(let count = -4; count <= 0; count++){
    html += `<li>${count}</li>`;
}

html += '</ul>';
output2.innerHTML += html;

// Count 13
html = `<h3>Count Down Number: ${arrayOfNumbers[3]}</h3>`;
html += '<ul>';

for(let count = 13; count >= 0; count--){
    html += `<li>${count}</li>`;
}

html += '</ul>';
output2.innerHTML += html;

// Count -2
html = `<h3>Count Up Number: ${arrayOfNumbers[4]}</h3>`;
html += '<ul>';

for(let count = -2; count <= 0; count++){
    html += `<li>${count}</li>`;
}

html += '</ul>';
output2.innerHTML += html;
