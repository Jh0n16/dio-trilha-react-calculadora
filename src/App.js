import { Container, Content, Row } from "./styles";

import Input from './components/Input'
import Button from './components/Button'

import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handlerClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handlerAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handlerSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')

    } else {
      const soma = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(soma))
      setOperation('')

    }
  }

  const handlerSubNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')

    } else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')

    }
  }

  const handlerMultNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')

    } else {
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }

  const handlerDivNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')

    } else {
      const div = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(div))
      setOperation('')
    }
  }

  const handlerEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handlerSumNumbers()
          break
        
        case '-':
          handlerSubNumbers()
          break
        
        case '*':
          handlerMultNumbers()
          break
        
        case '/':
          handlerDivNumbers()
          break

        default:
          break
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="#"/>
          <Button label="/" onClick={handlerDivNumbers}/>
          <Button label="*" onClick={handlerMultNumbers}/>
          <Button label="C" onClick={handlerClear}/>
        </Row>  
        <Row>
          <Button label="7" onClick={() => handlerAddNumber('7')}/>
          <Button label="8" onClick={() => handlerAddNumber('8')}/>
          <Button label="9" onClick={() => handlerAddNumber('9')}/>
          <Button label="-" onClick={handlerSubNumbers}/>
        </Row>  
        <Row>
          <Button label="4" onClick={() => handlerAddNumber('4')}/>
          <Button label="5" onClick={() => handlerAddNumber('5')}/>
          <Button label="6" onClick={() => handlerAddNumber('6')}/>
          <Button label="+" onClick={handlerSumNumbers}/>
        </Row>  
        <Row>
          <Button label="1" onClick={() => handlerAddNumber('1')}/>
          <Button label="2" onClick={() => handlerAddNumber('2')}/>
          <Button label="3" onClick={() => handlerAddNumber('3')}/>
          <Button label="=" onClick={handlerEquals}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handlerAddNumber('0')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
