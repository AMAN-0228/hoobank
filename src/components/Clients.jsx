import { clients } from "../constants/constants"

const Clients = () => (
  <section className="flexCenter my-4">
    <div className="flexCenter flex-wrap w-full">
      {clients.map(client=>(
        <div key={client.id} className="my-3 flex flex-1 min-w-[120px] sm:min-w-[192px]">
          <img src={client.logo} alt="client" className="w-[100px] sm:w-[192px] object-contain"/>
        </div>
      ))}
    </div>
  </section>
)

export default Clients
