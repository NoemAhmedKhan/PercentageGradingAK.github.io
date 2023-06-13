// Important Variables
let Total, Entries, All_Obt_Marks, Percentages, Splitted, Grades, Remarks, td, tr, text;
let x;
let y;
let c;

// Activating function after clicking on calculate button
function clicked(){
    // Getting values from the box of Total, Entries, and All Obtained Marks
    Total = Number(document.getElementById('total').value);
    Entries = Number(document.getElementById('entries').value);
    All_Obt_Marks = document.getElementById('obtained').value;

    // Splitting values by ( / OR , ) from obtained box and storing into Splitted variable
    if(All_Obt_Marks.includes(',')){
        Splitted = All_Obt_Marks.split(',');
    }else if(All_Obt_Marks.includes('/')){
        Splitted = All_Obt_Marks.split('/');
    }else{
        All_Obt_Marks.innerHTML = "Enter Correct Values Follow Example";
    }

    // for Loop to create Table Of All Values
    y = 0;
    c = Entries;
    for(x = 0; x < Entries; x++){
        // Creating tr (Row) after first row of heading
        tr = document.createElement('tr');
        document.getElementById('first-tr').insertAdjacentElement("afterend", tr);
        
            // Creating td (Data) for serial number
            td = document.createElement('td');
            text = document.createTextNode(c);
            td.appendChild(text);
            td.classList.add('td');
            tr.appendChild(td);
            c--;

            // Creating td (Data) for Total Values
            td = document.createElement('td');
            text = document.createTextNode(Total);
            td.appendChild(text);
            td.classList.add('td');
            tr.appendChild(td);

            // Creating td (Data) for All Obtained Values
            td = document.createElement('td');
            text = document.createTextNode(Splitted[y]);
            td.appendChild(text);
            td.classList.add('td');
            tr.appendChild(td);

            // Creating td (Data) for All Percentages
            td = document.createElement('td');
            Percentages = Number(Splitted[y]);
            Percentages = document.createTextNode( ((Percentages / Total) * 100).toFixed(2));
            td.appendChild(Percentages);
            td.classList.add('td');
            tr.appendChild(td);
            Percentages = Number(td.innerHTML);
            y++;

            if(Number(Percentages) >= 80){
                Grades = "A-1";
                Remarks = "Outstanding";
            }else if(Number(Percentages) >= 70){
                Grades = "A";
                Remarks = "Excellent";
            }else if(Number(Percentages) >= 60){
                Grades = "B";
                Remarks = "Very Good";
            }else if(Number(Percentages) >= 50){
                Grades = "C";
                Remarks = "Good";
            }else if(Number(Percentages) >= 40){
                Grades = "D";
                Remarks = "Fair";
            }else if(Number(Percentages) >= 33){
                Grades = "E";
                Remarks = "Satisfactory";
            }else{
                Grades = "FAIL";
                Remarks = "Needs Improvement";
            }

            // Creating Grades for All Values
            td = document.createElement('td');
            text = document.createTextNode(Grades);
            td.appendChild(text);
            td.classList.add('td');
            tr.appendChild(td);
    
            // Creating Remarks for All Values
            td = document.createElement('td');
            text = document.createTextNode(Remarks);
            td.appendChild(text);
            td.classList.add('td');
            tr.appendChild(td);
    }

}

// Function To Reset All Values
function reset(){
    td = document.getElementsByClassName('td');
    for(x = 0; x < td.length; x++){
        td[x].style.display = 'none';
    }
}