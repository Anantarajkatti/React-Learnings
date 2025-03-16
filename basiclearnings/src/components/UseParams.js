   //------------------------------------------/// Use params///--------------------------------------------------------------------

   //it is a hook used to accesss url parameters
   // fetch dynamic values in url -- ex:- "/profile/:id"  here "id" is dynamic values
   // it is react router dom hook

   // first on Route you should provide -----<Route path="/profile/:id" element={<UsingFile/>}/>----App.jsx
   // on one side theer will be -------------navigate("/profile/_id-00001") ------------------------some x.jsx file
   // on file that uses this id ------------ {id}= useParams() -------------------------------------UsingFile.jsx
                                        //   console.log(id)---- "_id=00001"


   // multiple Params is also possible
   //
   // "profile/:category/:id"
   //  navigate("/profile/mobiles/0000123")
   // {category,id}=useParams()
   // console.log(category, id) --------------  "mobiles" "0000123"

import React from 'react'

function UseParams() {
  return (
    <div>UseParams</div>
  )
}

export default UseParams