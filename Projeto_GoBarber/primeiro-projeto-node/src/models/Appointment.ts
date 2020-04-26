import { uuid } from 'uuidv4';
/* èsse e o arquivo para os agendamentos , cada agendamento
tu usa esse arquivo */
class Appointment {
  id: string;

  provider: string;

  date: Date;

  // provider: string, date: Date
  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
