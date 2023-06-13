let Total, Obtained, Percentage;

function PercentageGrading(){
    Total = Number(document.getElementById('total').value);
    Obtained = Number(document.getElementById('obtained').value);

    Percentage = ( (Obtained / Total) * 100).toFixed(2);
    document.getElementById('percentage').value = Percentage;

        if(Percentage === "NaN"){
            document.getElementById('percentage').value = '';
            document.getElementById('grade').value = '';
        }else if(Total == 0 && Obtained != 0 || Total != 0 && Obtained == 0){
            document.getElementById('percentage').value = 'Percentage Error';
            document.getElementById('grade').value = 'None';
        }else if(Percentage >= 80){
            document.getElementById('grade').value = 'A-1';
        }else if(Percentage >= 70){
            document.getElementById('grade').value = 'A';
        }else if(Percentage >= 60){
            document.getElementById('grade').value = 'B';
        }else if(Percentage >= 50){
            document.getElementById('grade').value = 'C';
        }else if(Percentage >= 40){
            document.getElementById('grade').value = 'D';
        }else if(Percentage >= 33){
            document.getElementById('grade').value = 'E';
        }else{
            document.getElementById('grade').value = 'FAIL';
        }

}