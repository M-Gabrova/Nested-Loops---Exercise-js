function trainTheTrainers (input){
    let index = 0;

    let gradesCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalGradeSum = 0;
    let presentationsCount = 0;

    while (command !== 'Finish') {
        let presentationName = command;
        let gradeSum = 0;

        for (let curGradeCount = 1; curGradeCount <= gradesCount; curGradeCount++) {
            let curGrade = Number(input[index]);
            index++;

            gradeSum += curGrade;                        
        }

        let averageGrade = gradeSum / gradesCount;
        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
        
        totalGradeSum += averageGrade;
        presentationsCount++;
    
        command = input[index];
        index++;
    }

    let totalAverageGrade = totalGradeSum / presentationsCount;
    console.log(`Student's final assessment is ${totalAverageGrade.toFixed(2)}.`);


}
trainTheTrainers (["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

