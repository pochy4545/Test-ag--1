'use client'

import { useState } from 'react'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [firstValue, setFirstValue] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)

  const handleNumber = (num: string) => {
    setDisplay(prev => prev === '0' ? num : prev + num)
  }

  const handleOperator = (op: string) => {
    setFirstValue(parseFloat(display))
    setOperator(op)
    setDisplay('0')
  }

  const calculate = () => {
    if (firstValue !== null && operator) {
      const secondValue = parseFloat(display)
      let result = 0

      switch (operator) {
        case '+':
          result = firstValue + secondValue
          break
        case '-':
          result = firstValue - secondValue
          break
        case '*':
          result = firstValue * secondValue
          break
        case '/':
          result = firstValue / secondValue
          break
      }

      setDisplay(result.toString())
      setFirstValue(null)
      setOperator(null)
    }
  }

  const clear = () => {
    setDisplay('0')
    setFirstValue(null)
    setOperator(null)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="mb-4 text-right text-3xl font-bold bg-gray-200 p-4 rounded">
          {display}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7','8','9','÷','4','5','6','×','1','2','3','-','0','.','=','+'].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if ('0123456789.'.includes(btn)) handleNumber(btn)
                else if ('+-*/÷×'.includes(btn)) handleOperator(btn === '÷' ? '/' : btn === '×' ? '*' : btn)
                else if (btn === '=') calculate()
              }}
              className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 transition duration-300"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={clear}
            className="col-span-4 bg-red-500 text-white p-4 rounded hover:bg-red-600 transition duration-300"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}