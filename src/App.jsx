import { useEffect, useState } from 'react';
import Header from '@header/header';
import ArthurFrost from '@components/arthurfrost';
import Card from '@components/card/card';
import fetchData from '@utils/fetchdata';
import Footer from "@footer/footer";

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([]);
  const baseUrl = "https://arthurfrost.qflo.co.za"

  useEffect(() => {
              console.log("This is a side effect")
                  fetch(`${baseUrl}/php/getTimeline.php`)
                  .then(res => res.json())
                  .then(json => {
                    setItems(json.Timeline.slice(0, 6))
                    console.log(json)
                  })

                  }, [])
  return (
    <>
      <Header/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-500">
        <h1 className="text-4xl font-bold py-6">Welcome to Arthur Frost Website</h1>
        <div className='grid grid-rows-2 grid-cols-3 gap-10 h-auto'>
               {
        items.map(
          (item) => {
            console.log(item)
            return <Card key={item.Id} title={JSON.stringify(item.Title)} category={JSON.stringify(item.Category)} img={`${baseUrl}/${item.Image}`} source={JSON.stringify(item.MediaName)}></Card>
          }
        )
      }
        </div>
        <div className='py-15'>
        <ArthurFrost />
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default App
