interface Userr {
  name: string;
  email: string;
  password: string;
}

interface Admins extends Userr {
  admin: boolean;
}

function abbc(obj: Admins) {
  console.log(obj.name);
}
