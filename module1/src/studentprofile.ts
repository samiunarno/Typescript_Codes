interface BaseStudent {
  name: string;
  email: string;
  age: number;
  Devtype: string;
  watch: boolean;
}

const buildStudentProfile = <T extends BaseStudent>(
  student: T
): T & { course: string } => {
  const course = "Bsc in CSE";

  return {
    ...student,
    course,
  };
};

interface stsam {
  name: string;
  email: string;
  age: number;
  Devtype: string;
  watch: boolean;
}

const student1 = buildStudentProfile({
  name: "Sam",
  email: "sam@gmail.com",
  age: 23,
  Devtype: "Full stack",
  watch: true,
});

const student2 = buildStudentProfile({
  name: "Arno",
  email: "arno@gmail.com",
  age: 22,
  Devtype: "Robotics",
  watch: true,
});

if (student1.age == student2.age) {
  console.log("Both are Same Age");
}

console.log(buildStudentProfile.call(student1.Devtype, student2));
