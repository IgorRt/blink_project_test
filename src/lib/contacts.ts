export const CONTACT_EMAIL = '27stroyka@mail.ru';
export const CONTACT_PHONE = '+7 (4212) 45-01-03';
export const CONTACT_PHONE_HREF = 'tel:+74212450103';

const consultationSubject = 'Консультация по проекту Хабаровск-Сити';
const consultationBody = 'Здравствуйте! Хочу получить консультацию по проекту Хабаровск-Сити.';

export const CONSULTATION_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  consultationSubject,
)}&body=${encodeURIComponent(consultationBody)}`;
