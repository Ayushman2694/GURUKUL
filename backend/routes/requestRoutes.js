import express from "express"
import { addRequest, getAllRequest } from "../controllers/request.controller.js"


const addRouter = express.Router()

addRouter.post("/addRequest",addRequest)
addRouter.get("/getRequest",getAllRequest)



export default addRouter