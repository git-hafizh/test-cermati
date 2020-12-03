import { Content } from '../data'

const Panel = () => {
  return (
    <div className="container-2xl mx-auto bg-primary-smoke-grey">
      <div className="text-center justify-center py-16">
        <p className="text-2xl mb-2">How Can I Help You?</p>
        <p>Our work then targeted, best practices outcomes social innovation synergy.</p>
        <p>Venture philanthropy, revolutionary inclusive policymaker relief. User-centered<br />
        program areas scale.</p>
      </div>
      <div className="grid grid-cols-3 justify-center text-center tablet:grid-cols-2 phone:grid-cols-1">
        {Content.map((item) => {
          return (
            <div key={item.index} className="border border-gray-400 text-left mx-4 mb-12 p-4">
                <p className="text-xl font-semibold flex justify-between my-2">
                  {item.title}
                  <span className="fill-current text-3xl text-gray-400">
                    {item.icon}
                  </span>
                </p>
              <p className="my-2">{item.caption}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Panel
