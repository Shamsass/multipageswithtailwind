import React from 'react'

const Contact = () => {
  return ( 
  <section className='Contact-form border max-w-1g mx-auto my-20 p-8 bg-white shadow-md rounded-md'>
  <h2 className="text-4xl font-bold mb-6 text-center" data-aos="fade-up">Contact us</h2>
<form>
<input type="text" placeholder='Full Name' className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md"required />
<br/>
<input type="Email" placeholder='Email Address'className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md" required />
<br/>
<input type="text" placeholder='Phone Number'className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md"/>
<br/>
<textarea placeholder="your Message" rows={5} required></textarea>
<button type ="submit" className="w-full mb-4 px-4 py-2 border border-blue-500 rounded-md">send Message</button>
        </form>
      </section>
  
  )
}

export default Contact
