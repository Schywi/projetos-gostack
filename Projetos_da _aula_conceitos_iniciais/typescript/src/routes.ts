import {Request, Response} from 'express';
import createUser from '../services/CreateUser'; 

export function helloWolrd(request: Request, response: Response) {
  const user = createUser({
    email: 'janna@piltover.com.br',
    password: '233434',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      {title: 'Javascript', experience: 100},
    ],
  }); 
  
  
  
  
  return response.json({message: 'Hello Oniisama'})
}; 