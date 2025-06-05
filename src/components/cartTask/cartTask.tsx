// import { DeleteTasks } from "state/api-calls"
// import "./cartTask.scss"
// import { useDispatch } from "react-redux"

// interface employee{
//         employeeId:string,
//         username:string,
// }

// interface task{
//     type:{
//         _id:string
//         elementId:string
//         elementName:string
//         confirmers:[employee]
//         followers:[employee]
//         type:number,
//         name:String,
//     }
// }

// export const CartTask = ({type}:task)=>{
//     const dispatch = useDispatch()
//     const handleDelete=(employeeId:string)=>{
//         const data = {
//             employeeIds: [employeeId],
//             _id: type._id
//         }

//         DeleteTasks(data,dispatch)

//     }
//     return (
//         <div className="tasks-cart" id={type._id}>
//             <h4 className="title">{type.name}</h4>
//             <div className="divider"></div>
//             <div className="employees">
//             {type.confirmers.slice(0, 3).map((e)=>
//             <div className="employee">
//             <div className="name">{e.username}</div>
//             <div className="clear" onClick={(event:any)=>{
//                 event.stopPropagation();
//                 handleDelete(e.employeeId)}} >x</div>
//             </div>
//             )}
//             {type.confirmers.length>3&&<div>...</div>}
//             </div>
//             <div className="divider"></div>
//             <div className="employees">
//             {type.followers.slice(0, 3).map((e)=>
//             <div className="employee">
//             <div className="name">{e.username}</div>
//             <div className="clear" onClick={(event:any)=>{
//                 event.stopPropagation();
//                 handleDelete(e.employeeId)}} >x</div>
//             </div>
//             )}
//             {type.followers.length>3&&<div>...</div>}
//             </div>
//         </div>
//     )
// }
