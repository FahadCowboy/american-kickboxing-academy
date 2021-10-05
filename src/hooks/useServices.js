import { useEffect, useState } from "react";

const useServices = () => {
   const [services, setServices] = useState([])

   useEffect(() => {
      fetch('./aka.json')
      .then(res => res.json())
      .then(data => setServices(data[0].services))
   }, [])
   return [services]
}

export default useServices
