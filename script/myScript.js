function getLength(){
    let text = document.getElementById("text_area_01").value;
    document.getElementById("output_01").innerHTML = text.length;
}

function changeFontColor() {
    var searchText = [" let ", " const ", " var ", " typeof ", " break ", " null ",
     " case ", " default ", " for ", " in ", " while ", " do ", " new ", " function ",
    " if ", " else ", " else if "," class "];
    var divs = document.getElementsByClassName("code_block");

    for (let j = 0; j < searchText.length; j++) {
        for (var i = 0; i < divs.length; i++) {
            var div = divs[i];
            var nodes = div.childNodes;

            for (var k = 0; k < nodes.length; k++) {
                var node = nodes[k];

                if (node.nodeType === Node.TEXT_NODE) {
                    var text = node.textContent;
                    var index = text.indexOf(searchText[j]);

                    if (index !== -1) {
                        var beforeText = text.substring(0, index);
                        var afterText = text.substring(index + searchText[j].length);

                        var spanNode = document.createElement("span");
                        spanNode.style.color = "blue";
                        spanNode.appendChild(document.createTextNode(searchText[j]));

                        node.textContent = beforeText;
                        div.insertBefore(spanNode, nodes[k + 1]);
                        div.insertBefore(document.createTextNode(afterText), nodes[k + 2]);
                    }
                }
            }
        }
    }
}

function highlightWordsInQuotes() {
    var divs = document.getElementsByClassName("code_block");

    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        var nodes = div.childNodes;

        for (var k = 0; k < nodes.length; k++) {
            var node = nodes[k];

            if (node.nodeType === Node.TEXT_NODE) {
                var text = node.textContent;
                var highlightedText = text.replace(/"([^"]+)"/g, '<span style="color: brown;">&quot;$1&quot;</span>');

                // Create a temporary element to parse the HTML
                var tempElement = document.createElement('div');
                tempElement.innerHTML = highlightedText;

                // Replace the original text node with the parsed nodes
                while (tempElement.firstChild) {
                    div.insertBefore(tempElement.firstChild, node);
                }

                // Remove the original text node
                div.removeChild(node);
            }
        }
    }
}

function highlightNumbersInRed() {
    var divs = document.getElementsByClassName("code_block");

    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        var nodes = div.childNodes;

        for (var k = 0; k < nodes.length; k++) {
            var node = nodes[k];

            if (node.nodeType === Node.TEXT_NODE) {
                var text = node.textContent;

                // Highlight words in quotes
                var highlightedText = text.replace(/"([^"]+)"/g, '<span style="color: brown;">&quot;$1&quot;</span>');

                // Turn numbers into red
                highlightedText = highlightedText.replace(/\b\d+\b/g, '<span style="color: violet;">$&</span>');

                // Create a temporary element to parse the HTML
                var tempElement = document.createElement('div');
                tempElement.innerHTML = highlightedText;

                // Replace the original text node with the parsed nodes
                while (tempElement.firstChild) {
                    div.insertBefore(tempElement.firstChild, node);
                }

                // Remove the original text node
                div.removeChild(node);
            }
        }
    }
}
function highlightBetweenPeriodAndParentheses() {
    var divs = document.getElementsByClassName("code_block");

    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        var nodes = div.childNodes;

        for (var k = 0; k < nodes.length; k++) {
            var node = nodes[k];

            if (node.nodeType === Node.TEXT_NODE) {
                var text = node.textContent;

                // Use a regular expression to match the string between "." and "(" with no spaces
                var highlightedText = text.replace(/\.\s*([^\s.]*?)(?=\()/g, '.<span style="color: red;">$1</span>');

                // Create a temporary element to parse the HTML
                var tempElement = document.createElement('div');
                tempElement.innerHTML = highlightedText;

                // Replace the original text node with the parsed nodes
                while (tempElement.firstChild) {
                    div.insertBefore(tempElement.firstChild, node);
                }

                // Remove the original text node
                div.removeChild(node);
            }
        }
    }
}

function highlightBetweenSpaceAndParentheses() {
    var divs = document.getElementsByClassName("code_block");

    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        var nodes = div.childNodes;

        for (var k = 0; k < nodes.length; k++) {
            var node = nodes[k];

            if (node.nodeType === Node.TEXT_NODE) {
                var text = node.textContent;

                // Use a regular expression to match the string between a space and "(" without any spaces
                var highlightedText = text.replace(/\s(\S*)\(/g, ' <span style="color: red;">$1</span>(');

                // Create a temporary element to parse the HTML
                var tempElement = document.createElement('div');
                tempElement.innerHTML = highlightedText;

                // Replace the original text node with the parsed nodes
                while (tempElement.firstChild) {
                    div.insertBefore(tempElement.firstChild, node);
                }

                // Remove the original text node
                div.removeChild(node);
            }
        }
    }
}
function highlightAfterDoubleSlash() {
    var divs = document.getElementsByClassName("code_block");

    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        var nodes = div.childNodes;

        for (var k = 0; k < nodes.length; k++) {
            var node = nodes[k];

            if (node.nodeType === Node.TEXT_NODE) {
                var text = node.textContent;

                // Use a regular expression to match text after "//" and before the line break or next line
                var highlightedText = text.replace(/(\/\/.*?)($|\r\n|\n)/g, '<span style="color: green;">$1</span>$2');

                // Create a temporary element to parse the HTML
                var tempElement = document.createElement('div');
                tempElement.innerHTML = highlightedText;

                // Replace the original text node with the parsed nodes
                while (tempElement.firstChild) {
                    div.insertBefore(tempElement.firstChild, node);
                }

                // Remove the original text node
                div.removeChild(node);
            }
        }
    }
}
function scrollView() {
   // alert("hello");
    const elements = document.getElementsByClassName("active");
    if (elements.length > 0) {
        const element = elements[0];
        element.scrollIntoView({
            behavior: "instant",
            block: "center"
        });
    }
}
// Add an event listener to run the function when the page finishes loading

window.addEventListener("load", highlightAfterDoubleSlash);
window.addEventListener("load", highlightBetweenPeriodAndParentheses);
window.addEventListener("load", highlightBetweenSpaceAndParentheses);
window.addEventListener("load", highlightNumbersInRed);
window.addEventListener("load", highlightWordsInQuotes);
window.addEventListener("load", changeFontColor);
window.addEventListener("load", scrollView);
//better to use this to make it onload() on every pages
//lets not load it first because the innerHTML is not reading the <br>



function getDateNow(){
    const d = new Date();
    document.getElementById("date_01").innerHTML = d;
    document.getElementById("date_02").innerHTML = 
      "year: " + d.getFullYear() + "<br>" 
    + "month: " + d.getMonth() + "<br>"
    + "date: " + d.getDate() + "<br>"
    + "day: " + d.getDay() + "<br>"
    + "hours: " + d.getHours() + "<br>"
    + "minutes: " + d.getMinutes() + "<br>"
    + "seconds: " + d.getSeconds() + "<br>"
    + "milliseconds: " + d.getMilliseconds() + "<br>"
    + "time: " + d.getTime() ;
}


function countUnique(){
    let text = document.getElementById("text_area_01").value;
    let arr = text.split(" ");
    let holder = "";
    const wordCount = new Map();

    //insert array of words into a map object with 0 as initial value
    //map object will no accept duplicates
    for(let i in arr){
        wordCount.set(arr[i], 0);
    }

    // increment each unique word by looping throught the array again.
    // each time it will encounter the same words, it will get its value in the map, then change the value
    for(let i in arr){
        let num_holder = wordCount.get(arr[i]); // get value of encountered word
        num_holder = num_holder + 1; // increment it
        wordCount.set(arr[i], num_holder); // update map key value
        num_holder = 0; // reset the holder
    }


    for (const w of wordCount.entries()){
        holder = holder + w + "<br>";
    }

    document.getElementById("output_01").innerHTML = holder; 
}


function createInput(type, name, placeholder, id) {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;
    input.id = id;
    
    return input;
  }

function createLabel(name) {
    const label = document.createElement('p');
    label.innerHTML = name; 
 
    return label;
}

function createTableHeader(name){
    const t_header = document.createElement("th");
    t_header.innerHTML = name;

    return t_header;
}

var id_arr = [];

var person = new Object();

function createTextInput(){
    const inputContainer = document.getElementById('here');
    const table_header = document.getElementById("test_header");

    let label_name = document.getElementById("test_label").value;
    const inputPlaceholder = document.getElementById("test_placeholder").value;
    const id = document.getElementById("test_id").value;

    const inputType = 'text';
    const inputName = 'dynamicInput';
    
    //label_name = label_name + ", id: " + id;
    // Create a new input element with the specified attributes
    const newInput = createInput(inputType, inputName, inputPlaceholder, id);
    const newLabel = createLabel(label_name);
    const header = createTableHeader(label_name);

    id_arr.push(id);

    //person[label_name] = "";
    
    // Append the new input element to the container
    inputContainer.appendChild(newLabel);
    inputContainer.appendChild(newInput);  
    table_header.appendChild(header); 

}

function createRow(){
    const table_ = document.getElementById("test_table");
    let row_ = document.createElement("tr");
    

    for(let i in id_arr){
        let data_ = document.createElement("td");
        data_.innerHTML = document.getElementById(id_arr[i]).value;
        row_.appendChild(data_);
    }
    table_.appendChild(row_);
}




function animateText() {
    let text = document.getElementById("text_area_for_interval").value;
    let holder = "";
    let index = 0;  // Added index to keep track of current letter

    function typeIt() {
        holder = holder + text[index];
        document.getElementById("sample_text").innerHTML = holder;
        index++;

        if (index < text.length) {
            setTimeout(typeIt, 50);  // Call typeIt again after 3 seconds
        }
    }

    typeIt();  // Start the animation
}


function changeP1(){
    let element = document.getElementById("p1");
    element.innerHTML = "youre wonderful";
}

function changeP2(){
    let element = document.getElementById("p2");
    element.innerHTML = "you're doing great";
}

function changeSampleP(){
    let elements = document.getElementsByClassName("sample_p");
    for(let i = 0; i < elements.length; i++){
        elements[i].innerHTML = "frogs are cool";
    }
}

function resetP(){
    let elements = document.getElementsByClassName("sample_p");
    let arr = ["id = p1; class = sample_p", "id = p2; class = sample_p", "id = p3; class = sample_p"];
    for(let i = 0; i < elements.length; i++){
        elements[i].innerHTML = arr[i];
    }
}

function changeInnerHTML(){
    let element = document.getElementById("sample_block_001");
    element.innerHTML = "new innerHTML"
}

function changeBorderColor(){
    let element = document.getElementById("sample_block_001");
    element.style.borderColor = "red";
}

function changeFontFamily(){
    let element = document.getElementById("sample_block_001");
    element.style.fontFamily = "Century Gothic"
}

function resetDiv(){
    let element = document.getElementById("sample_block_001");
    element.innerHTML = "some text";
    element.style.borderColor = "black";
    element.style.fontFamily = "Arial"
}



