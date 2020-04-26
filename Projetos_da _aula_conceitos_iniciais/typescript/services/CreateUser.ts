/* para criar name,emaile password */

interface TechObjects {
  title:string; 
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string; 
  password: string;
  techs: Array<string | TechObjects>;
  //techs: string[];
}

export default function createUser ({name,email,password}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }
  return user; 
}