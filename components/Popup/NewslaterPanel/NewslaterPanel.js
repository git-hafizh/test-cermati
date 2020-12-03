import { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use'

const NewslaterPanel = () => {
  const { x, y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0)
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrolled((y / height) * 100)
    console.log(scrolled)
    if (scrolled > 33) {
      setShow(true)
    }
  }, [y])

  const onClosed = () => setClosed(!closed)

  return (
    <div id={closed ? "btn-closed" : "slideUp-before-clicked"} className={show ? "slideUpNews flex-wrap w-640 bg-primary-blue opacity-80 fixed bottom-0 phone:w-480" : "flex-wrap w-640 bg-primary-blue opacity-80 fixed bottom-full"}>
      <div className="relative text-right mx-4 top-4 text-white text-xs font-bold">
        <button onClick={onClosed}>X</button>
      </div>
      <div className="ml-10 my-5">
        <div className="text-white flex flex-wrap">
          <p className="text-3xl font-semibold">Get latest updates in web technologies</p>
          <p>I write articles related to web technologies, such as design trends, development</p>
          <p>tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get<br />
          them all.</p>
        </div>
        <div className="my-4">
          <input className="py-0.5 px-2 mr-3 w-96 left-0" placeholder="Email address" />
          <button className="text-white font-semibold rounded bg-primary-orange py-1 px-2 hover:bg-primary-dark-orange hover:transition duration-300 ease-in-out phone:w-96 mt-3">Count me in!</button>
        </div>
      </div>
    </div>
  )
}

export default NewslaterPanel
