type fd = "fkd" | "jD";
const newdev: fd = "fkd";

type userrrs = {
  name: string;
  email?: string;
  gender?: "male" | "female";
  blood?: "A" | "B" | "AB";
};

const userrrs1: userrrs = {
  name: "Samiun Mahmud",
};

type frontend = {
  skills: string[];
  experience: number;
  frontendDesignation: "Junior";
};

type backend = {
  skills: string[];
  experience: number;
  backendDesignation: "Senior";
};

type fullstack = frontend & backend;

const FullStack: fullstack = {
  skills: ["HTML", "Express"],
  experience: 3,
  frontendDesignation: "Junior",
  backendDesignation: "Senior",
};
