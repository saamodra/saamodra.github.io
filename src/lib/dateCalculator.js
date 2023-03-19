export const monthsDiffCalculator = (startDate, endDate) => {
    const monthsFromYear = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    const daysDiff = startDate.getDay() - endDate.getDay();

    const additionalMonth = Math.abs(daysDiff) > 20 ? 1 : 0;
    const monthsDiff = monthsFromYear - startDate.getMonth() + endDate.getMonth() + additionalMonth;

    return monthsDiff <= 0 ? 0 : monthsDiff;
}

export const monthsDiffText = (startDate, endDate) => {
  const fullMonthsDiff = monthsDiffCalculator(startDate, endDate);
  const yearsDiff = Math.floor(fullMonthsDiff / 12);
  const monthsDiff = fullMonthsDiff % 12
  const monthsText = `${monthsDiff} mo`;

  return yearsDiff ? `${yearsDiff} yr ${monthsText}` : monthsText;
}

export const dateFormatter = (startDate, endDate) => {
  const ongoingDate = endDate.toLocaleDateString() === new Date().toLocaleDateString()
  const startDateText = `${startDate.toLocaleString('default', { month: 'long' })} ${startDate.getFullYear()}`;
  const endDateText = ongoingDate ? 'Present' : `${endDate.toLocaleString('default', { month: 'long' })} ${endDate.getFullYear()}`;

  return `${startDateText} - ${endDateText}`
}
