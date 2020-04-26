import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/*
Problemas para seremserolsivod/resolvidos:
1) {X} O recebimento das informações
2) {X} Tratativa de erros e exceçções
3) {X} Acesso ao repositorio
Quando vc taa recebendo dados no service chama de requestDTO
*/

interface RequestDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentServices {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: RequestDTO): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.FindByDate(
      appointmentDate
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is alredy booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });
    return appointment;
  }
}

export default CreateAppointmentServices;
