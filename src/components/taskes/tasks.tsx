// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { baseRequest } from "utils/request-methods";
// import "./tasks.scss";
// import { useTranslation } from "react-i18next";
// import { DialogContent, Dialog, DialogTitle } from "@mui/material";
// import NewTask from "pages/new/new-task/new-task";
// import { CartTask } from "components/cartTask/cartTask";
// import { getTasks } from "state/api-calls";

// const Tasks = () => {
//     const dispatch = useDispatch();
//     const [open,setOpen] = useState<boolean>(false)
//     const [selectedTask,setSelectedTask] = useState(null);
//     const tasks = useSelector(
//         (state: any) => state.task.tasks
//     );

//     useEffect(() => {
//         try{

//             getTasks(dispatch);
//         }catch(err){
//           console.log(err)
//         }
//       }, []);

//     const { t } = useTranslation();
//     const handleClose=()=>{
//         setOpen(false)
//     }

//     return (
//         <div className="tasks overflowPreventer">
//             <Dialog
//                 open={open}
//                 onClose={() => handleClose()}
//                 maxWidth={false}
//             >
//                 <DialogTitle>{t("Task Manager")}</DialogTitle>
//                 <DialogContent>
//                     <NewTask type={
//                         selectedTask
//                     }/>
//                 </DialogContent>
//             </Dialog>
//             <div className="datatableTitle">
//                 <button onClick={() => {
//                     setSelectedTask(null)
//                     setOpen(true)}} className="link">
//                     {t("new")}
//                 </button>
//             </div>
//             <div className="container-products">
//                 {tasks.map((e: any) => (
//                     <div onClick={()=>{setSelectedTask(e)
//                         setOpen(true)
//                     }}>
//                         <CartTask type={e}/>
//                     </div>
//                 ))}
//                 <div></div>
//                 <div></div>
//                 <div></div>
//                 <div></div>

//             </div>
//         </div>
//     );
// };

// export default Tasks;
