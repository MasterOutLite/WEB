var myLanguage = {
    "Java": 15,
    "C++": 50,
    "HTML5": 80,
    "CSS3": 70,
    "C#": 70,
    "JavaScript": 40
};
var myLegend = document.getElementById("myLegend");
 
var myDougnutChart = new Piechart(
    {
        canvas:myCanvas,
        data:myLanguage,
        colors:["#fde23e","#f16e23", "#57d9ff","#937e88","#000000","#0400FC"],
        legend:myLegend
    }
);
myDougnutChart.draw();