import { useEffect, useState } from "react";

const useServices = () => {
   const [coaches, setCoaches] = useState([])

   useEffect(() => {
      fetch('./aka.json')
      .then(res => res.json())
      .then(data => setCoaches(data[1].coaches))
   }, [])
   return [coaches]
}

export default useServices