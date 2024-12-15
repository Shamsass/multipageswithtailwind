import React from 'react'

const Instruments = () => {
const InstrumentsData=[
{id :1,name:'HPLC',price :15000,description: 'High Performance Liquid Chromatography',image:'/image3.webp'},
{id :2,name:'Electrophoresis',price :10000,description: 'Gel Electrophoresis',image:'/image12.jpg'},
{id :3,name:'Column Chromatography',price :20000,description: 'Chromatography ',image:'/image5.png'},
{id :4,name:'Liquid Chromatography',price :30000,description: 'Chromatography ',image:'/image8.jpg'},
{id :5,name:'Gas Chromatography',price :40000,description: 'Chromatography ',image:'/image11.png'},
{id :6,name:'Paper Chromatography',price :40000,description: 'Chromatography ',image:'/image10.webp'},
    ]
    return (
    <div>
      <div className="Instruments grid grid-col-1 md:grid-cols-3 gap-10 px-10my-10">
        {InstrumentsData.map((Instruments)=>(
          <div key ={Instruments.id} className="watch-card bg-white p-5 rounded md shadow-md text-center">
            <img src={Instruments.image} className ="w-full rounded-md transiton-transform  duration-300 transform  hover :scale -110" alt={Instruments.name}/>
            <h3 className="mt-4 text-2x1 font-bold">{Instruments.name}</h3>
            <p className="price text-blue-500">{Instruments.description}</p>
            <div className="price text-blue-500 text-xlfont-semibold mt-2">$ {Instruments.price}</div>
            <button className="mt-4 px-4 px-4 py-2 bg-blue-500 text-white rounded-md">Add to the Cart</button>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Instruments
