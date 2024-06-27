import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [selectCurrency, setSelectCurrency] = useState('usd')
  const onCurrencyChange=(val)=>{
    setSelectCurrency(val)
  }

  const currencyInfo = useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)
  const swap=()=>{
    const temp=from
    setFrom(to)
    setTo(temp)
    const tempAmount=amount
  setAmount(convertedAmount)
  setConvertedAmount(tempAmount)

  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])

  }
  return (

 <div className='flex justify-center items-center'>
  <div className='w-[700px] h-screen' style={{
    backgroundImage: `url('https://images.pexels.com/photos/19955613/pexels-photo-19955613/free-photo-of-palm-trees-and-a-suspension-bridge-against-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}>

  </div>
   <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
         
            backgroundImage: `url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount1) => setAmount(amount1)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable //automatically gives true
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
 </div>
);
}

export default App
