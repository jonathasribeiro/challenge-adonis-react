import React, { useState } from 'react';

import { Container, DateConfig, Select, Option, Input } from './styles';

import Calendar from '../../components/Calendar';

export default function Main() {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2020);

  return (
    <Container>
      <DateConfig>
        <Select onChange={e => setMonth(e.target.value)}>
          <Option value={0} selected>
            Janeiro
          </Option>
          <Option value={1}>Fevereiro</Option>
          <Option value={2}>Março</Option>
          <Option value={3}>Abril</Option>
          <Option value={4}>Maio</Option>
          <Option value={5}>Junho</Option>
          <Option value={6}>Julho</Option>
          <Option value={7}>Agosto</Option>
          <Option value={8}>Setembro</Option>
          <Option value={9}>Outubro</Option>
          <Option value={10}>Novembro</Option>
          <Option value={11}>Dezembro</Option>
        </Select>

        <Input defaultValue={year} onChange={e => setYear(e.target.value)} />
      </DateConfig>
      <Calendar month={month} year={year} />
    </Container>
  );
}
