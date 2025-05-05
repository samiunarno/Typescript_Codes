"use strict";
{
    //   interface BaseStudent {
    //     name: string;
    //     email: string;
    //     age: number;
    //     Devtype: string;
    //     watch: boolean;
    //   }
    const addcourseToStudent = (student) => {
        const course = "Bsc in CSE";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student3 = addcourseToStudent({
        id: 1,
        name: "sam",
        email: "@gmail.com",
    });
    const std1 = (addcourseToStudent);
    //   const student1 = buildStudentProfile({
    //     name: "Sam",
    //     email: "sam@gmail.com",
    //     age: 22,
    //     Devtype: "Full stack",
    //     watch: true,
    //   });
    //   const student2 = addcourseToStudent({
    //     name: "Arno",
    //     email: "arno@gmail.com",
    //     age: 20,
    //     Devtype: "Robotics",
    //     watch: true,
    //   });
}
