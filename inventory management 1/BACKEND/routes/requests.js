const router = require("express").Router();
let Request = require("../models/request");


//Create Class..
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const onumber = Number(req.body.onumber);
    const email = req.body.email;
    const item = req.body.item;
    const message = req.body.message;
   


    const newRequest = new Request({
        name,
        onumber,
        email,
        item, 
        message

    })

    newRequest.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read..
router.route("/all").get((req,res)=>{

    Request.find().then((request)=>{
        res.json(request)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/allreq").get((req,res)=>{

    Request.find().then((request)=>{
        res.json(request)
    }).catch((err)=>{
        console.log(err)
    })
})



//Update Class..
/*router.route("/update/:id").put(async (req, res) => {
    let classId = req.params.id;
    const {classname, grade, date, time, link} = req.body;

    const updateClass = {
        classname,
        grade,
        date,
        time,
        link
    }

    const update = await Class.findByIdAndUpdate(classId, updateClass)
    .then(() => {
    res.status(200).send({status: "Class Updated"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
})   
}) */

//Delete Class..
router.route("/delete/:id").delete(async (req, res) => {
    let requestId = req.params.id;

    await Request.findByIdAndDelete(requestId)
    .then(() => {
        res.status(200).send({status: "Request Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete request", error: err.message});
    })
})

//Read Class..
/*router.route("/get/:id").get(async (req, res) => {
    let classId = req.params.id;
    const user = await Class.findById(classId)
    .then((user) => {
         res.status(200).send({status: "Class fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get class", error: err.message});
    })
})  */

router.route("/get/:id").get(async (req, resp) => {
    let result = await Request.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})  





router.route("/update/:id").put(async (req, resp) => {
    let result = await Request.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})  

module.exports = router;