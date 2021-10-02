import { useState } from 'react'
import './styles.css'

export default function PagesCalculadora() {
  const [valor1, setValor1] = useState(0)
  const [valor2, setValor2] = useState(0)

  return (
    <div className="PagesCalculadora__main">
      <form className="PagesCalculadora__form">

        <input
          type="number"
          name="valor1"
          min={0}
          step={1}
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
        />

        <span>+</span>

        <input
          type="number"
          name="valor2"
          min={0}
          step={1}
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
        />

        <span>=</span>

        <span className="PagesCalculadora__span-resultado">
          {Number(valor1) + Number(valor2)}
        </span>

      </form>
    </div>
  )
}