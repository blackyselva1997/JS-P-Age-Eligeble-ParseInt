document.write("Age eligeble parseInt");
document.write("<br>");
document.write("<br>");

let age= parseInt(prompt("Enter your age :"));
let sex= prompt("Enter your sex :");
if (sex == "female") {
	document.write("Urban areas");
} 
	else if (sex == "male" && 20 <= age && age <= 40) {
	document.write("Anywhere");
} 
	else if (sex == "male" && 40 <= age && age <= 60) {
	document.write("Urban areas");
} 
	else {
	document.write("Error");
}