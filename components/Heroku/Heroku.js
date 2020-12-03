import Image from 'next/image'
import { NewslaterPanel, NotificationPanel } from '../Popup'

const Heroku = () => {
  return (
    <div>
      <NotificationPanel />
      <NewslaterPanel />
      <div className="bg-heroku container-2xl flex justify-center mx-auto p-4">
        <nav className="absolute left-6">
          <a className="z-10" href="/">
            <Image src="/logo.png" alt="logo" width="56" height="56" />
          </a>
        </nav>
        <div className="text-center text-white m-auto leading-9">
          <p className="text-2xl">Hello! I'm Muhammad Hafizh Maulana</p>
          <p className="font-bold text-xl">Consult, Design, and Develop Websites</p>
          <p>Have something great in mind? Feel free to contact me.</p>
          <p>I'll help you to make it happen.</p>
          <button className="border border-white focus:outline-none uppercase font-bold py-3 px-6 m-4 hover:text-primary-dark-blue hover:bg-white hover:transition duration-300 ease-in-out">Let's Make Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Heroku
