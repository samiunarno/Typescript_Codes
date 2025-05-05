{
  //   interface BaseStudent {
  //     name: string;
  //     email: string;
  //     age: number;
  //     Devtype: string;
  //     watch: boolean;
  //   }

  const addcourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Bsc in CSE";
    return {
      ...student,
      course,
    };
  };

  const student3 = addcourseToStudent({
    id: 1,
    name: "sam",
    email: "@gmail.com",
  });

  const std1 = addcourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>;

  //   const buildStudentProfile = <T extends BaseStudent>(
  //     student: T
  //   ): T & { course: string } => {
  //     const course = "Bsc in CSE";

  //     return {
  //       ...student,
  //       course,
  //     };
  //   };

  interface stsam {
    name: string;
    email: string;
    age: number;
    Devtype: string;
    watch: boolean;
  }

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
