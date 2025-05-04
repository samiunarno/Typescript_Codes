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
  age: 22,
  Devtype: "Full stack",
  watch: true,
});

const student2 = buildStudentProfile({
  name: "Arno",
  email: "arno@gmail.com",
  age: 20,
  Devtype: "Robotics",
  watch: true,
});

if (student1.age == student2.age) {
  console.log("Both are Same Age");
} else if (student1.watch == student2.watch) {
  console.log("Both Have Watches");
} else {
  console.log("THey are not similar", student1.name, "and", student2.name);
}

for (let i = 0; i < 2; i++) {
  console.log(" ");
}

console.log("Student 1 Profile : ", student1);
console.log("Student 2 Profile : ", student2);
