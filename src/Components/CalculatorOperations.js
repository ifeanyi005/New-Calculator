import React from 'react'

const CalculatorOperations = {
    '/': (storedValue, newValue) => newValue === 0 ? 'division by zero' : parseFloat(storedValue / newValue),
    '*': (storedValue, newValue) => newValue * storedValue,
    '+': (storedValue, newValue) => newValue + storedValue,
    '-': (storedValue, newValue) => storedValue - newValue,
    '%': (storedValue, newValue) => (newValue / 100),
    '=': (storedValue, newValue) => newValue
}

export default CalculatorOperations
