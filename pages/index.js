export default function Home() {
  return (
    <div className='grid grid-flow-row drop-shadow-primary rounded-lg md:grid-cols-2'>

      <div className='bg-white grid gap-4 text-left font-primary p-6 tracking-wide md:col-span-2'>
        <h1 className='text-lg font-semibold text-darkBlue tracking-wider md:text-xl'>Join our community </h1>
        <p className='text-textGreen font-semibold'>30-day, hassle-free money back guarantee</p>
        <p className='text-textGray text-sm leading-7'>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills. </p>
      </div>

      <div className='bg-darkBlue p-6 tracking-wide grid gap-6 font-primary md:pr-20'>
        <h1 className='text-white font-medium tracking-wider'>Monthly Subscription </h1>
        <div className='grid gap-2'>
          <h1 className='text-textLightGreen font-thin'><span className='text-3xl text-white mr-2'>$29</span> per month </h1>
          <p className='text-textLightBlueGreen font-extralight text-[15px]'>Full access for less than $1 a day</p>
        </div>
        <button className='bg-textGreen text-textYellow px-5 py-3 rounded-md text-[15px] tracking-wider'>Sign Up</button>
      </div>

      <div className='bg-lightBlue p-6 tracking-wide grid gap-4 font-primary'>
        <h1 className='text-white'>Why Us?</h1>
        <ul className='text-textLightBlueGreen text-sm font-thin'>
          <li>Tutorials by industry experts</li>
          <li>Peer & expert code review </li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </div>
  )
}
