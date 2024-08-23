import express from "express"
import { addRequest } from "../controllers/request.controller.js"


const addRouter = express.Router()

addRouter.post("/addRequest",addRequest)



export default addRouter