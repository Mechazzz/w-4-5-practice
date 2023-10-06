const studentsData = [
    {
        name: "Kovács János",
        age: 29,
        subjects: [
            {
                subjectName: "Maths",
                subjectGrade: 5
            },
            {
                subjectName:"Physics",
                subjectGrade: 3
            },
            {
                subjectName: "English",
                subjectGrade: 2
            }
        ]
    },
    {
        name: "Kis Péter",
        age: 29,
        subjects: [
            {
                subjectName: "Maths",
                subjectGrade: 2
            },
            {
                subjectName:"Physics",
                subjectGrade: 5
            },
            {
                subjectName: "English",
                subjectGrade: 4
            }
        ]
    },
    {
        name: "Leföld Elek",
        age: 95,
        subjects: [
            {
                subjectName: "Maths",
                subjectGrade: 2
            },
            {
                subjectName:"Physics",
                subjectGrade: 1
            },
            {
                subjectName: "English",
                subjectGrade: 5
            }
        ]
    }
]

/* for (let i = 0; i <DataTransfer.length; i++){
console.log(data[i].name)
} */

/* data.forEach(student => console.log(student.name)) */

studentsData.forEach(student => {
    console.log(student.name)
    
    student.subjects.forEach(subject => console.log(`${subject.subjectName}: ${subject.subjectGrade}`))
})