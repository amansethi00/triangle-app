var modal = document.getElementById("myModal");
var head = document.querySelector("#head");
// Get the button that opens the modal
var btn = document.querySelectorAll(".myBtn");
var question = document.querySelector("#question");
var option1 = document.querySelector("#option-1");
var option2 = document.querySelector("#option-2");
var option3 = document.querySelector("#option-3");
var option4 = document.querySelector("#option-4");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
const values = ["Quiz on isoceles triangle","Quiz on equilateral triangle","Quiz on right-angled triangle","Random Quiz"]
// When the user clicks the button, open the modal 
for(let i=0;i<btn.length;i++){
    btn[i].onclick = btn.onclick = function() {
        modal.style.display = "block";
        head.innerHTML = values[i];
        if(i===0){
            question.innerHTML = list[0].question;
            for(var j=0;j<list[0].options.length;j++){
                (option+j).innerHTML = list[0].options[i];
            }

            
        }
        else if(i===1){
            question.innerHTML = list[5].question;
            for(var j=0;j<list[5].options.length;j++){
                (option+j).innerHTML = list[5].options[i];
            }
        }
        else if(i===2){
            question.innerHTML = list[8].question;
            for(var j=0;j<list[8].options.length;j++){
                (option+j).innerHTML = list[8].options[i];
            }
        }
        else if(i===3){
            let k=parseInt(Math.random()*10);
            question.innerHTML = list[k].question;
            for(var j=0;j<list[k].options.length;j++){
                (option+j).innerHTML = list[k].options[i];
            }
        }
        
      }
}

const list  = [
    //isoceles triangle
    {
        question:"An isosceles triangle has a base of 6 and a height of 4. What is the perimeter of the triangle?",
        options:[24,16,12,"None of these"],
        answer:16
    },
    {
        question:"What is the area of a square that has a diagonal whose endpoints in the coordinate plane are located at (-8, 6) and (2, -4)?",
        options:["200√2","50√2","100","100√2"],
        answer:100
    },
    {
        question:"The length of the diagonal of a given square is 42–√. What is the square's area?",
        options:[20,24,28,16],
        answer:16
    },
    {
        question:"Two sides of an isosceles triangle are 20 and 30. What is the difference of the largest and the smallest possible perimeters?",
        options:[15,10,30,0],
        answer:10
    },
    {
        question:"The base angle of an isosceles triangle is five more than twice the vertex angle.  What is the base angle?",
        options:[73,55,62,34],
        answer:73
    },
    //equilateral triangle
    {
        question:" In an equilateral triangle, what is the sum of any two of its angles? ",
        options:[60,90,120,150],
        answer:120,
    },
    {
        question:"There are 2 equilateral traingles of length 60cm and 50cm.They both are ___",
        options:["congruent","similar","equal","same"],
        answer:"similar",
    },
    {
        question:"The relation between the altitude, median, angle bisector, and perpendicular bisector for each side in equilateral triangle is",
        options:["all are same","all are perpendicular to each other","bisect the triangle","none of the above"],
        answer:"all are same",
    },
    //Right angled triangle
    {
        question:"A right triangle ABC is given where angle B = 90 degrees.Which side of the triangle is the longest?",
        options:["side CA","side BC","side AB","cannot be determined"],
        answer:"side CA",
    },{
        question:" The Pythagorean Theorem states that:'The square of the hypotenuse of a right angle triangle is equal to the sum of the squares of the other two sides.'This means that, in a right triangle ABC with hypotenuse AC:",
        options:["(AB + AC)^2 = BC^2)","AB^2 + BC^2 = AC^2","(AB + BC) (AB - BC) = AC^2","(AB + BC) (AB - BC) = AC^2"],
        answer:"AB^2 + BC^2 = AC^2",
    },
    {
        question:"There is a triangle XYZ where XY is perpendicular to YZ and angle X = 70 degrees. What is the measure of angle Z?",
        options:["30 degrees","20 degrees","130 degrees","110 degrees"],
        answer:"20 degrees",
    },

    
]


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}