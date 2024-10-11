export default function getStudentsIdsSum(studentData){
    const numberOfStudents = studentData.reduce(
        (cummulative, currevtValue)=>currevtValue.id + cummulative, 0,
    );
    return numberOfStudents;
}