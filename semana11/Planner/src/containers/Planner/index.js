import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";


const PageWrapper = styled.div`
`
const TaskWrapper= styled.form`
  width: 90%;
  display:flex;
  justify-content:center;
  align-items:center;
`
const WeekWrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;

`

class Planner extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <PageWrapper>

        <TaskWrapper>
          <input type="text" placeholder="Nova Tarefa"></input>
          <select>
            <option>Segunda</option>
            <option>Terça</option>
            <option>Quarta</option>
            <option>Quinta</option>
            <option>Sexta</option>
            <option>Sabado</option>
            <option>Domingo</option>
          </select>
          <button>Salvar</button>
        </TaskWrapper>

        <WeekWrapper>
          <p>Segunda - Feira</p>
          <p>Terça - Feira</p>
          <p>Quarta - Feira</p>
          <p>Quinta - Feira</p>
          <p>Sexta - Feira</p>
          <p>Sabado</p>
          <p>Domingo</p>
        </WeekWrapper>
      </PageWrapper>
    )
  }
}

export default Planner;
