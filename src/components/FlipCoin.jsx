import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import './style.css'

const FlipCoin = () => {
    const [totalCoins, setTotalCoins] = useState()
    const [outcome, setOutCome] = useState(0)
    const [result, setResult] = useState('')
    const [head, setHead] = useState(0)
    const [tail, setTail] = useState(0)

    const countOutcomes = () => {
        let power = Math.pow(2, totalCoins);
        setOutCome(power)
    }

    const flip = () => {
        const randSide = Math.floor(Math.random() * 2);
        var result = randSide === 0 ? "heads" : "tails"
        setResult(result)
        if (result === 'heads') { setHead(head + 1) }
        else { setTail(tail + 1) }
    }

    const reset = () => {
        setTotalCoins(0)
        setOutCome(0)
        setResult('')
        setHead(0)
        setTail(0)
    }

    return (<>
        <div className='tossWrapper'>
            <Form onSubmit={(e)=>e.preventDefault()}>
                <h2 className='main_heading'>Coin flipping</h2>
                <InputGroup className="mb-3">
                    <Form.Control
                        type='number'
                        placeholder="enter number of coins"
                        value={totalCoins}
                        onChange={(e) => setTotalCoins(e.target.value)}
                    />
                    <InputGroup.Text id="basic-addon1" type="button" onClick={countOutcomes}>Find Outcomes</InputGroup.Text>
                </InputGroup>

                <div className="App">
                    <div id="coin" className={result} key={+new Date()}>
                        <div className="side-a coinWrapper">
                            <h2>{result}</h2>
                        </div>
                    </div>

                    <h3 className='flip-heading'>Flip a coin</h3>
                    <div className='coinsControls'>

                        <Button onClick={flip} className="coinTossBtn">
                            Coin Toss
                        </Button>
                        <Button onClick={reset} className="resetBtn">
                            Reset
                        </Button>
                    </div>
                </div>
            <ul className='tossResult'>
                <li>
                    Total Outcomes <span>{outcome}</span>
                </li>
                <li>
                    Total Tails <span>{tail}</span>
                </li>
                <li>
                    Total Heads <span>{head}</span>
                </li>
            </ul>
            </Form>
            
        </div>

    </>)
}

export default FlipCoin