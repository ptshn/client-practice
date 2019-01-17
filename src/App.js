import React from 'react';
// import Joke from './components/Joke';
import Product from './components/Product'
import productsData from './data/productsData'

// const myJokes = [
//   {
//     id: 1
//     , question: 'Why did the chicken cross the road?'
//     , punchline: 'To get to the other side'
//   }
//   , {
//     id: 2
//     , question: 'What did sushi A say to sushi B?'
//     , punchline: 'Wasabi!'
//   }
//   , {
//     id: 3
//     , punchline: 'No question, only punchline because I am thirsy.'
//   }
//   , {
//     id: 4
//     , question: 'What’s the best time to go to the dentist?'
//     , punchline: 'Tooth hurty'
//   }
//   , {
//     id: 5
//     , question: 'Why are bananas never lonely?'
//     , punchline: 'Because they hang out in bunches.'
//   }
// ]

function App() {
  const productList = productsData.map(item => {
    return (
        <Product key={item.id} productName={item} />
    )
  })

  return (
    <div>
      {productList}
    </div>
  )
}


export default App;